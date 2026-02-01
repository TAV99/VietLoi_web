// Removed export revalidate - using tags for on-demand revalidation instead

const FALLBACK_DATA = [
    // Copper
    { category: 'Đồng', material: 'Đồng đỏ', unit: 'kg', price: '185.000 - 195.000', note: '' },
    { category: 'Đồng', material: 'Đồng vàng', unit: 'kg', price: '178.000 - 188.000', note: '' },
    { category: 'Đồng', material: 'Đồng phế liệu', unit: 'kg', price: '165.000 - 175.000', note: '' },
    { category: 'Đồng', material: 'Dây điện đồng', unit: 'kg', price: '155.000 - 165.000', note: '' },

    // Aluminum
    { category: 'Nhôm', material: 'Nhôm thanh', unit: 'kg', price: '38.000 - 42.000', note: '' },
    { category: 'Nhôm', material: 'Nhôm tấm', unit: 'kg', price: '35.000 - 40.000', note: '' },
    { category: 'Nhôm', material: 'Nhôm lon bia', unit: 'kg', price: '28.000 - 32.000', note: '' },
    { category: 'Nhôm', material: 'Nhôm phế liệu', unit: 'kg', price: '30.000 - 35.000', note: '' },

    // Inox
    { category: 'Inox', material: 'Inox 304', unit: 'kg', price: '45.000 - 52.000', note: '' },
    { category: 'Inox', material: 'Inox 201', unit: 'kg', price: '38.000 - 45.000', note: '' },
    { category: 'Inox', material: 'Inox 430', unit: 'kg', price: '35.000 - 42.000', note: '' },
    { category: 'Inox', material: 'Inox phế liệu', unit: 'kg', price: '30.000 - 38.000', note: '' },

    // Steel
    { category: 'Sắt thép', material: 'Sắt thép mới', unit: 'kg', price: '8.000 - 11.000', note: '' },
    { category: 'Sắt thép', material: 'Sắt thép phế liệu', unit: 'kg', price: '6.000 - 9.000', note: '' },
    { category: 'Sắt thép', material: 'Sắt thép xây dựng', unit: 'kg', price: '7.000 - 10.000', note: '' },
    { category: 'Sắt thép', material: 'Sắt phế liệu loại 1', unit: 'kg', price: '5.500 - 8.000', note: '' },

    // Plastic
    { category: 'Nhựa', material: 'Nhựa PP', unit: 'kg', price: '8.000 - 12.000', note: '' },
    { category: 'Nhựa', material: 'Nhựa PET', unit: 'kg', price: '7.000 - 11.000', note: '' },
    { category: 'Nhựa', material: 'Nhựa HDPE', unit: 'kg', price: '6.000 - 10.000', note: '' },
    { category: 'Nhựa', material: 'Nhựa phế liệu', unit: 'kg', price: '5.000 - 8.000', note: '' },
];

/**
 * Fetches pricing data from Google Apps Script JSON API.
 * Falls back to hardcoded data if the fetch fails.
 * Uses cache tags for on-demand revalidation.
 */
export async function getPricingData() {
    const url = process.env.NEXT_PUBLIC_GOOGLE_SHEET_JSON_URL;

    // Generate fetch timestamp for debugging
    const fetchTime = new Date().toISOString();
    console.log('[getPricingData] Fetch started at:', fetchTime);

    if (!url) {
        console.warn('[getPricingData] NEXT_PUBLIC_GOOGLE_SHEET_JSON_URL is missing. Using fallback data.');
        return { data: FALLBACK_DATA, lastUpdated: fetchTime };
    }

    try {
        // Use ISR with 1-hour cache for optimal performance
        // Data is cached and revalidated every hour, or on-demand via revalidateTag
        const response = await fetch(url, {
            next: {
                revalidate: 3600, // Cache for 1 hour
                tags: ['pricing']
            }
        });

        console.log('[getPricingData] API response status:', response.status);

        if (!response.ok) {
            throw new Error(`Failed to fetch pricing data: ${response.statusText}`);
        }

        const json = await response.json();
        console.log('[getPricingData] Received data items:', Array.isArray(json) ? json.length : json?.data?.length || 0);

        // Handle different JSON structures from Google Apps Script
        let data;
        let lastUpdated;

        if (Array.isArray(json)) {
            data = json;
            lastUpdated = fetchTime;
        } else if (json.data && Array.isArray(json.data)) {
            data = json.data;
            lastUpdated = json.lastUpdated || fetchTime;
        } else {
            throw new Error('Invalid JSON format received from API');
        }

        // Auto-categorize based on material name if category is missing
        const inferCategory = (material) => {
            if (!material) return 'Chung';
            const materialLower = material.toLowerCase();

            // Category detection order matters - more specific first
            if (materialLower.includes('đồng') || materialLower.includes('dong')) return 'Đồng';
            if (materialLower.includes('nhôm') || materialLower.includes('nhom')) return 'Nhôm';
            if (materialLower.includes('inox')) return 'Inox';
            if (materialLower.includes('sắt') || materialLower.includes('sat') || materialLower.includes('thép')) return 'Sắt thép';
            if (materialLower.includes('nhựa') || materialLower.includes('nhua') ||
                materialLower.includes('pp') || materialLower.includes('pvc') ||
                materialLower.includes('pet') || materialLower.includes('hdpe')) return 'Nhựa';
            if (materialLower.includes('giấy') || materialLower.includes('giay') || materialLower.includes('carton')) return 'Giấy';
            if (materialLower.includes('chì') || materialLower.includes('chi')) return 'Chì';
            if (materialLower.includes('niken') || materialLower.includes('nickel')) return 'Niken';
            if (materialLower.includes('thiếc') || materialLower.includes('thiec')) return 'Thiếc';
            if (materialLower.includes('kẽm') || materialLower.includes('kem')) return 'Kẽm';

            return 'Chung';
        };

        // Validate and normalize each item
        const normalizedData = data.map(item => ({
            category: item.category || inferCategory(item.material),
            material: item.material || '',
            unit: item.unit || 'kg',
            price: item.price || '',
            note: item.note || ''
        })).filter(item => item.material);

        console.log('[getPricingData] Normalized items:', normalizedData.length);

        return {
            data: normalizedData.length > 0 ? normalizedData : FALLBACK_DATA,
            lastUpdated
        };

    } catch (error) {
        console.error('[getPricingData] Error fetching pricing data:', error);
        return { data: FALLBACK_DATA, lastUpdated: fetchTime };
    }
}

/**
 * Extracts unique category names from pricing data.
 * Filters out 'Chung' (general) category.
 * @param {Array} data - Pricing data array
 * @returns {Array<string>} - Array of unique category names
 */
export function getUniqueCategories(data) {
    const categories = [...new Set(data.map(item => item.category))];
    return categories.filter(cat => cat && cat !== 'Chung');
}

