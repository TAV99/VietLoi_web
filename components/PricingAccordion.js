'use client';

import React, { useState } from 'react';
import styles from './PricingTable.module.css';

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
 * Global Collapsible Pricing Table
 * Features a red header that toggles the entire table visibility.
 */
export default function PricingAccordion({ data, lastUpdated }) {
    const [isOpen, setIsOpen] = useState(true);

    // Get current date for header
    const today = new Date().toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    // Group data by category
    const groupedData = data.reduce((acc, item) => {
        const category = item.category || 'Chung';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(item);
        return acc;
    }, {});

    // Sort categories
    const sortedCategories = Object.keys(groupedData).sort((a, b) => {
        const orderA = CATEGORY_ORDER.indexOf(a);
        const orderB = CATEGORY_ORDER.indexOf(b);
        return (orderA === -1 ? 999 : orderA) - (orderB === -1 ? 999 : orderB);
    });

    // Sort items within each category by price (descending)
    sortedCategories.forEach(category => {
        groupedData[category].sort((a, b) => {
            return extractMaxPrice(b.price) - extractMaxPrice(a.price);
        });
    });

    // Flatten for row numbering
    let rowIndex = 0;

    return (
        <section id="pricing" className="section section-alt">
            <div className="container">
                <h2 className={styles.sectionTitle}>Bảng Giá Phế Liệu</h2>
                <p className={styles.subtitle}>
                    Giá thu mua cập nhật mới nhất {lastUpdated ? `(${new Date(lastUpdated).toLocaleDateString('vi-VN')})` : ''}.
                    <br />Liên hệ hotline để được báo giá chính xác.
                </p>

                <div className={styles.tableContainer}>
                    {/* Global Red Header - Toggle */}
                    <div
                        className={styles.globalHeader}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className={styles.globalHeaderText}>
                            BẢNG GIÁ THU MUA PHẾ LIỆU HÔM NAY ({today})
                        </span>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            className={`${styles.globalChevron} ${isOpen ? styles.chevronExpanded : ''}`}
                        >
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>

                    {/* Collapsible Table Body - CSS Grid Trick */}
                    <div className={`${styles.contentWrapper} ${isOpen ? styles.open : ''}`}>
                        <div className={styles.minHeightFix}>
                            <div className={styles.tableWrapper}>
                                <table className={styles.priceTable}>
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên Phế Liệu</th>
                                            <th>Đơn Vị</th>
                                            <th>Giá Thu Mua (VNĐ)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sortedCategories.map(category => (
                                            <React.Fragment key={`category-${category}`}>
                                                {/* Category Sub-Header (Non-clickable) */}
                                                <tr className={styles.categorySubHeader}>
                                                    <td colSpan="4">{category.toUpperCase()}</td>
                                                </tr>
                                                {/* Items in this category */}
                                                {groupedData[category].map((item, idx) => {
                                                    rowIndex++;
                                                    return (
                                                        <tr key={`${category}-${item.material}-${idx}`} className={styles.itemRow}>
                                                            <td className={styles.indexCell}>{rowIndex}</td>
                                                            <td className={styles.materialCell}>
                                                                <span className={styles.materialName}>{item.material}</span>
                                                            </td>
                                                            <td className={styles.unitCell}>{item.unit}</td>
                                                            <td className={styles.priceCell}>{item.price}</td>
                                                        </tr>
                                                    );
                                                })}
                                            </React.Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.note}>
                    <p>
                        <strong>Lưu ý:</strong> Giá trên chỉ mang tính chất tham khảo.
                        Giá thu mua thực tế phụ thuộc vào chất lượng, số lượng và thời điểm thu mua.
                        Vui lòng liên hệ hotline để được báo giá chính xác nhất.
                    </p>
                    <a href="#contact" className={styles.fullPriceLink}>
                        Liên hệ báo giá →
                    </a>
                </div>
            </div>
        </section>
    );
}
