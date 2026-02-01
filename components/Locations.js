import styles from './Locations.module.css';

export default function Locations() {
    const locations = [
        { province: 'TP. Hồ Chí Minh', address: '123 Đường Nguyễn Văn Linh, Quận 7', districts: 'Quận 1, 2, 3, 4, 5, 7, Bình Tân, Tân Bình, Tân Phú' },
        { province: 'Hà Nội', address: '456 Đường Giải Phóng, Quận Hoàng Mai', districts: 'Ba Đình, Hoàn Kiếm, Đống Đa, Hai Bà Trưng, Cầu Giấy' },
        { province: 'Bình Dương', address: '789 Đại lộ Bình Dương, Thủ Dầu Một', districts: 'Thủ Dầu Một, Dĩ An, Thuận An' },
        { province: 'Đồng Nai', address: '321 Đường Võ Thị Sáu, Biên Hòa', districts: 'Biên Hòa, Long Khánh, Nhơn Trạch' },
        { province: 'Đà Nẵng', address: '654 Đường Điện Biên Phủ, Quận Thanh Khê', districts: 'Hải Châu, Thanh Khê, Sơn Trà' },
        { province: 'Cần Thơ', address: '987 Đường 30/4, Quận Ninh Kiều', districts: 'Ninh Kiều, Cái Răng, Bình Thủy' },
    ];

    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className={styles.sectionTitle}>Địa Chỉ Chi Nhánh</h2>
                <p className={styles.subtitle}>
                    Hệ thống chi nhánh trên toàn quốc - Phục vụ mọi lúc mọi nơi
                </p>

                <div className={styles.locationsContainer}>
                    <div className={styles.tableWrapper}>
                        <table className={styles.locationTable}>
                            <thead>
                                <tr>
                                    <th>Tỉnh/Thành phố</th>
                                    <th>Địa chỉ</th>
                                    <th>Khu vực phục vụ</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {locations.map((location, index) => (
                                    <tr key={index}>
                                        <td className={styles.provinceCell}>{location.province}</td>
                                        <td>{location.address}</td>
                                        <td className={styles.districtsCell}>{location.districts}</td>
                                        <td>
                                            <button className={styles.mapBtn}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                    <circle cx="12" cy="10" r="3" />
                                                </svg>
                                                Xem bản đồ
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className={styles.serviceNote}>
                        <div className={styles.noteIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 16v-4" />
                                <path d="M12 8h.01" />
                            </svg>
                        </div>
                        <div>
                            <h3>Phục vụ toàn quốc 24/7</h3>
                            <p>
                                Ngoài các chi nhánh chính, chúng tôi còn có đội ngũ thu mua di động phục vụ trên toàn quốc.
                                Liên hệ hotline <strong>0979065588</strong> hoặc <strong>0988 765 432</strong> để được báo giá và hỗ trợ ngay.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
