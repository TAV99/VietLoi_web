import styles from './WorkProcess.module.css';

export default function WorkProcess() {
    const steps = [
        {
            number: 1,
            title: 'Khảo sát & Báo giá',
            description: 'Liên hệ hotline, chúng tôi sẽ đến khảo sát và báo giá miễn phí',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                </svg>
            )
        },
        {
            number: 2,
            title: 'Ký hợp đồng',
            description: 'Thỏa thuận giá cả và ký kết hợp đồng thu mua chính thức',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                    <path d="M9 14l2 2 4-4" />
                </svg>
            )
        },
        {
            number: 3,
            title: 'Vận chuyển',
            description: 'Thu gom và vận chuyển phế liệu về kho xử lý của chúng tôi',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
            )
        },
        {
            number: 4,
            title: 'Thanh toán',
            description: 'Cân đo chính xác và thanh toán ngay sau khi hoàn tất',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                    <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
            )
        },
        {
            number: 5,
            title: 'Chăm sóc khách hàng',
            description: 'Hỗ trợ và tư vấn sau bán hàng, xây dựng mối quan hệ lâu dài',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            )
        }
    ];

    return (
        <section className="section">
            <div className="container">
                <h2 className={styles.sectionTitle}>Quy Trình Làm Việc</h2>
                <p className={styles.subtitle}>
                    5 bước đơn giản để bán phế liệu nhanh chóng và thuận tiện
                </p>

                <div className={styles.processContainer}>
                    {steps.map((step, index) => (
                        <div key={step.number} className={styles.stepWrapper}>
                            <div className={styles.stepCard}>
                                <div className={styles.stepNumber}>{step.number}</div>
                                <div className={styles.stepIcon}>{step.icon}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className={styles.connector}>
                                    <svg width="60" height="20" viewBox="0 0 60 20">
                                        <path
                                            d="M0 10 L50 10 L45 5 M50 10 L45 15"
                                            fill="none"
                                            stroke="var(--color-primary)"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
