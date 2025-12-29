'use client';

import { useState } from 'react';
import styles from './PricingTable.module.css';

export default function PricingTable() {
    const [openCategory, setOpenCategory] = useState('copper');

    const pricingData = {
        copper: {
            name: 'Đồng',
            items: [
                { id: 1, name: 'Đồng đỏ', priceFrom: 185000, priceTo: 195000, unit: 'kg' },
                { id: 2, name: 'Đồng vàng', priceFrom: 178000, priceTo: 188000, unit: 'kg' },
                { id: 3, name: 'Đồng phế liệu', priceFrom: 165000, priceTo: 175000, unit: 'kg' },
                { id: 4, name: 'Dây điện đồng', priceFrom: 155000, priceTo: 165000, unit: 'kg' },
            ]
        },
        aluminum: {
            name: 'Nhôm',
            items: [
                { id: 1, name: 'Nhôm thanh', priceFrom: 38000, priceTo: 42000, unit: 'kg' },
                { id: 2, name: 'Nhôm tấm', priceFrom: 35000, priceTo: 40000, unit: 'kg' },
                { id: 3, name: 'Nhôm lon bia', priceFrom: 28000, priceTo: 32000, unit: 'kg' },
                { id: 4, name: 'Nhôm phế liệu', priceFrom: 30000, priceTo: 35000, unit: 'kg' },
            ]
        },
        inox: {
            name: 'Inox',
            items: [
                { id: 1, name: 'Inox 304', priceFrom: 45000, priceTo: 52000, unit: 'kg' },
                { id: 2, name: 'Inox 201', priceFrom: 38000, priceTo: 45000, unit: 'kg' },
                { id: 3, name: 'Inox 430', priceFrom: 35000, priceTo: 42000, unit: 'kg' },
                { id: 4, name: 'Inox phế liệu', priceFrom: 30000, priceTo: 38000, unit: 'kg' },
            ]
        },
        steel: {
            name: 'Sắt thép',
            items: [
                { id: 1, name: 'Sắt thép mới', priceFrom: 8000, priceTo: 11000, unit: 'kg' },
                { id: 2, name: 'Sắt thép phế liệu', priceFrom: 6000, priceTo: 9000, unit: 'kg' },
                { id: 3, name: 'Sắt thép xây dựng', priceFrom: 7000, priceTo: 10000, unit: 'kg' },
                { id: 4, name: 'Sắt phế liệu loại 1', priceFrom: 5500, priceTo: 8000, unit: 'kg' },
            ]
        },
        plastic: {
            name: 'Nhựa',
            items: [
                { id: 1, name: 'Nhựa PP', priceFrom: 8000, priceTo: 12000, unit: 'kg' },
                { id: 2, name: 'Nhựa PET', priceFrom: 7000, priceTo: 11000, unit: 'kg' },
                { id: 3, name: 'Nhựa HDPE', priceFrom: 6000, priceTo: 10000, unit: 'kg' },
                { id: 4, name: 'Nhựa phế liệu', priceFrom: 5000, priceTo: 8000, unit: 'kg' },
            ]
        },
    };

    return (
        <section id="pricing" className="section section-alt">
            <div className="container">
                <h2 className={styles.sectionTitle}>Bảng Giá Phế Liệu</h2>
                <p className={styles.subtitle}>
                    Giá thu mua cập nhật mới nhất. Liên hệ hotline để được báo giá chính xác.
                </p>

                <div className={styles.pricingContainer}>
                    {Object.entries(pricingData).map(([key, category]) => (
                        <div key={key} className={styles.categoryCard}>
                            <button
                                className={`${styles.categoryHeader} ${openCategory === key ? styles.active : ''}`}
                                onClick={() => setOpenCategory(openCategory === key ? null : key)}
                            >
                                <span className={styles.categoryName}>{category.name}</span>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className={`${styles.arrow} ${openCategory === key ? styles.rotated : ''}`}
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>

                            {openCategory === key && (
                                <div className={styles.tableWrapper}>
                                    <table className={styles.priceTable}>
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>Tên hàng</th>
                                                <th>Giá từ (VNĐ/kg)</th>
                                                <th>Giá đến (VNĐ/kg)</th>
                                                <th>Đơn vị tính</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {category.items.map((item, index) => (
                                                <tr key={item.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.priceFrom.toLocaleString('vi-VN')}</td>
                                                    <td>{item.priceTo.toLocaleString('vi-VN')}</td>
                                                    <td>{item.unit}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className={styles.note}>
                    <p>
                        <strong>Lưu ý:</strong> Giá trên chỉ mang tính chất tham khảo.
                        Giá thu mua thực tế phụ thuộc vào chất lượng, số lượng và thời điểm thu mua.
                        Vui lòng liên hệ hotline để được báo giá chính xác nhất.
                    </p>
                    <a href="#contact" className={styles.fullPriceLink}>
                        Xem đầy đủ bảng giá →
                    </a>
                </div>
            </div>
        </section>
    );
}
