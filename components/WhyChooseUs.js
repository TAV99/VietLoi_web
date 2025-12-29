import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
            ),
            title: 'Báo giá nhanh',
            description: 'Phản hồi báo giá trong vòng 15 phút sau khi nhận được thông tin. Luôn sẵn sàng tư vấn 24/7.'
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            ),
            title: 'Mua hàng ngay',
            description: 'Đội ngũ thu mua chuyên nghiệp đến tận nơi khảo sát và thu mua ngay khi thỏa thuận giá cả.'
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                    <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
            ),
            title: 'Thanh toán liền tay',
            description: 'Thanh toán ngay sau khi cân đo, hỗ trợ nhiều hình thức: tiền mặt, chuyển khoản, séc.'
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
            title: 'Cân đo uy tín',
            description: 'Sử dụng cân điện tử chính xác, được kiểm định định kỳ. Quy trình minh bạch, công khai.'
        }
    ];

    return (
        <section className="section section-alt">
            <div className="container">
                <h2 className={styles.sectionTitle}>Tại Sao Nên Chọn Chúng Tôi</h2>
                <p className={styles.subtitle}>
                    4 lý do hàng đầu khiến khách hàng tin tưởng và lựa chọn dịch vụ của chúng tôi
                </p>

                <div className={styles.reasonsGrid}>
                    {reasons.map((reason, index) => (
                        <div key={index} className={styles.reasonCard}>
                            <div className={styles.iconWrapper}>
                                {reason.icon}
                            </div>
                            <h3>{reason.title}</h3>
                            <p>{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
