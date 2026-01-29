export const revalidate = 3600; // Cache for 1 hour

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
 */
export async function getPricingData() {
    const url = process.env.NEXT_PUBLIC_GOOGLE_SHEET_JSON_URL;

    if (!url) {
        console.warn('NEXT_PUBLIC_GOOGLE_SHEET_JSON_URL is missing. Using fallback data.');
        return { data: FALLBACK_DATA, lastUpdated: new Date().toISOString() };
    }

    try {
        const response = await fetch(url, { next: { revalidate: 3600 } });

        if (!response.ok) {
            throw new Error(`Failed to fetch pricing data: ${response.statusText}`);
        }

        const json = await response.json();

        // Handle different JSON structures from Google Apps Script
        // Expected format: array of { category, material, unit, price, note }
        // Or: { data: [...], lastUpdated: "..." }
        let data;
        let lastUpdated;

        if (Array.isArray(json)) {
            data = json;
            lastUpdated = new Date().toISOString();
        } else if (json.data && Array.isArray(json.data)) {
            data = json.data;
            lastUpdated = json.lastUpdated || new Date().toISOString();
        } else {
            throw new Error('Invalid JSON format received from API');
        }

        // Validate and normalize each item
        const normalizedData = data.map(item => ({
            category: item.category || 'Chung',
            material: item.material || '',
            unit: item.unit || 'kg',
            price: item.price || '',
            note: item.note || ''
        })).filter(item => item.material); // Filter out empty rows

        return {
            data: normalizedData.length > 0 ? normalizedData : FALLBACK_DATA,
            lastUpdated
        };

    } catch (error) {
        console.error('Error fetching pricing data:', error);
        return { data: FALLBACK_DATA, lastUpdated: new Date().toISOString() };
    }
}
