import { getPricingData } from '@/lib/getPricing';
import PricingAccordion from './PricingAccordion';
import styles from './PricingTable.module.css';

// Force dynamic rendering to ensure fresh data on each request
export const dynamic = 'force-dynamic';

/**
 * Helper function to extract numeric price for sorting.
 */
function extractMaxPrice(priceString) {
    if (!priceString) return 0;
    const numbers = priceString.match(/[\d.]+/g);
    if (!numbers) return 0;
    return Math.max(...numbers.map(n => parseFloat(n.replace(/\./g, ''))));
}

/**
 * Category order for sorting
 */
const CATEGORY_ORDER = [
    'Vàng',
    'Đồng',
    'Nhôm',
    'Inox',
    'Sắt thép',
    'Nhựa',
    'Giấy',
    'Chì',
    'Niken',
    'Thiếc',
    'Kẽm',
    'Chung'
];

/**
 * Reusable PricingTable component - Flat unified table.
 */
export default async function PricingTable({ data } = {}) {
    let displayData;
    let lastUpdated;

    if (data) {
        displayData = data;
        lastUpdated = new Date().toISOString();
    } else {
        const fetchResult = await getPricingData();
        displayData = fetchResult.data;
        lastUpdated = fetchResult.lastUpdated;
    }

    // Handle empty or undefined data
    if (!displayData || displayData.length === 0) {
        return (
            <section id="pricing" className="section section-alt">
                <div className="container">
                    <h2 className={styles.sectionTitle}>Bảng Giá Phế Liệu</h2>
                    <div className={styles.emptyState}>
                        <p className={styles.emptyMessage}>
                            Hiện chưa có báo giá cho mục này.
                            Vui lòng liên hệ <a href="tel:0901234567" className={styles.hotlineLink}>Hotline</a> để được tư vấn trực tiếp.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return <PricingAccordion data={displayData} lastUpdated={lastUpdated} />;
}
