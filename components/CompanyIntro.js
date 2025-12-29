import styles from './CompanyIntro.module.css';

export default function CompanyIntro() {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className={styles.sectionTitle}>Giới Thiệu Công Ty</h2>

                <div className={styles.content}>
                    <div className={styles.description}>
                        <h3>Thu Mua Phế Liệu Uy Tín - Hơn 10 Năm Kinh Nghiệm</h3>
                        <p>
                            Với hơn 10 năm kinh nghiệm trong lĩnh vực thu mua phế liệu, chúng tôi là đơn vị uy tín hàng đầu tại Việt Nam.
                            Chúng tôi chuyên thu mua các loại phế liệu: nhôm, đồng, inox, sắt thép, chì, niken, hợp kim, thiếc, vải tồn kho,
                            linh kiện điện tử và nhiều loại phế liệu khác.
                        </p>
                        <p>
                            Cam kết mang đến dịch vụ chuyên nghiệp, giá cả cạnh tranh nhất thị trường, thanh toán nhanh chóng và
                            đảm bảo an toàn cho khách hàng. Chúng tôi phục vụ 24/7 trên toàn quốc.
                        </p>
                    </div>

                    <div className={styles.benefits}>
                        <div className={styles.benefitItem}>
                            <div className={styles.benefitIcon}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <div>
                                <h4>Hotline 1</h4>
                                <p>0909 123 456</p>
                            </div>
                        </div>

                        <div className={styles.benefitItem}>
                            <div className={styles.benefitIcon}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <div>
                                <h4>Hotline 2</h4>
                                <p>0988 765 432</p>
                            </div>
                        </div>

                        <div className={styles.benefitItem}>
                            <div className={styles.benefitIcon}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                    <line x1="12" y1="22.08" x2="12" y2="12" />
                                </svg>
                            </div>
                            <div>
                                <h4>Hồ sơ năng lực lớn</h4>
                                <p>Thu mua số lượng lớn</p>
                            </div>
                        </div>

                        <div className={styles.benefitItem}>
                            <div className={styles.benefitIcon}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </div>
                            <div>
                                <h4>Miễn phí vận chuyển</h4>
                                <p>Hỗ trợ chi phí vận chuyển</p>
                            </div>
                        </div>

                        <div className={styles.benefitItem}>
                            <div className={styles.benefitIcon}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    <polyline points="9 22 9 12 15 12 15 22" />
                                </svg>
                            </div>
                            <div>
                                <h4>Mua tận nơi</h4>
                                <p>Đến tận nơi thu mua</p>
                            </div>
                        </div>

                        <div className={styles.benefitItem}>
                            <div className={styles.benefitIcon}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="12" y1="1" x2="12" y2="23" />
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </div>
                            <div>
                                <h4>Giá cao nhất</h4>
                                <p>Giá tốt nhất thị trường</p>
                            </div>
                        </div>

                        <div className={styles.benefitItem}>
                            <div className={styles.benefitIcon}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <div>
                                <h4>Mua toàn quốc 24/7</h4>
                                <p>Phục vụ không nghỉ</p>
                            </div>
                        </div>

                        <div className={styles.benefitItem}>
                            <div className={styles.benefitIcon}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                </svg>
                            </div>
                            <div>
                                <h4>Hoa hồng lớn</h4>
                                <p>Chính sách hoa hồng hấp dẫn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
