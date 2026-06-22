import React from 'react';
import { extractMaxPrice } from '@/lib/utils';
import styles from './PricingTable.module.css';

const CATEGORY_ORDER = [
    'Đồng',
    'Nhôm',
    'Inox',
    'Sắt thép',
    'Nhựa',
    'Giấy',
    'Hợp kim',
    'Niken',
    'Thiếc',
    'Kẽm',
    'Chung'
];

/**
 * PricingTableGrid renders the structured pricing table grouped by sorted categories.
 * Isolated from client-side accordion states to keep components modular.
 */
export default function PricingTableGrid({ data }) {
    if (!data || data.length === 0) return null;

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

    let rowIndex = 0;

    return (
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
                            {/* Category Sub-Header */}
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
    );
}
