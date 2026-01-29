'use client';

import { useState } from 'react';
import styles from './PricingTable.module.css';

export default function PricingList({ pricingData, lastUpdated }) {
    // Determine the first category key to open by default, or 'copper' as fallback
    const firstCategory = Object.keys(pricingData)[0] || 'copper';
    const [openCategory, setOpenCategory] = useState(firstCategory);

    return (
        <section id="pricing" className="section section-alt">
            <div className="container">
                <h2 className={styles.sectionTitle}>Bảng Giá Phế Liệu</h2>
                <p className={styles.subtitle}>
                    Giá thu mua cập nhật mới nhất {lastUpdated ? `(${new Date(lastUpdated).toLocaleDateString('vi-VN')})` : ''}.
                    <br />Liên hệ hotline để được báo giá chính xác.
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
                                                <th>Giá (VNĐ/kg)</th>
                                                <th>Đơn vị tính</th>
                                                {/* Removed 'Giá đến' as likely singular price string in CSV, adapted headers */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {category.items.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.material}</td>
                                                    <td className={styles.price}>{item.price}</td>
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
