import styles from './CommissionTable.module.css';

export default function CommissionTable() {
    const commissionData = [
        { range: '1 - 5 tấn', copper: '2%', aluminum: '1.5%', steel: '1%', other: '1.5%' },
        { range: '5 - 20 tấn', copper: '3%', aluminum: '2.5%', steel: '1.5%', other: '2%' },
        { range: '20 - 50 tấn', copper: '4%', aluminum: '3.5%', steel: '2%', other: '3%' },
        { range: '> 50 tấn', copper: '5%', aluminum: '4.5%', steel: '2.5%', other: '4%' },
    ];

    return (
        <section className="section">
            <div className="container">
                <h2 className={styles.sectionTitle}>Bảng Hoa Hồng</h2>
                <p className={styles.subtitle}>
                    Chính sách hoa hồng hấp dẫn dành cho người giới thiệu
                </p>

                <div className={styles.tableContainer}>
                    <table className={styles.commissionTable}>
                        <thead>
                            <tr>
                                <th>Số lượng</th>
                                <th>Đồng</th>
                                <th>Nhôm</th>
                                <th>Sắt thép</th>
                                <th>Loại khác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {commissionData.map((row, index) => (
                                <tr key={index}>
                                    <td className={styles.rangeCell}>{row.range}</td>
                                    <td>{row.copper}</td>
                                    <td>{row.aluminum}</td>
                                    <td>{row.steel}</td>
                                    <td>{row.other}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className={styles.highlights}>
                    <div className={styles.highlightCard}>
                        <div className={styles.highlightIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                            </svg>
                        </div>
                        <h3>Hoa hồng cao</h3>
                        <p>Lên đến 5% giá trị đơn hàng</p>
                    </div>

                    <div className={styles.highlightCard}>
                        <div className={styles.highlightIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                <line x1="1" y1="10" x2="23" y2="10" />
                            </svg>
                        </div>
                        <h3>Thanh toán nhanh</h3>
                        <p>Chi trả hoa hồng ngay sau giao dịch</p>
                    </div>

                    <div className={styles.highlightCard}>
                        <div className={styles.highlightIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                        </div>
                        <h3>Minh bạch</h3>
                        <p>Chính sách rõ ràng, công khai</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
