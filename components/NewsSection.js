import Image from 'next/image';
import styles from './NewsSection.module.css';

export default function NewsSection() {
    const articles = [
        {
            title: 'Bảng giá phế liệu mới nhất tháng 12/2025',
            excerpt: 'Cập nhật bảng giá thu mua phế liệu các loại: đồng, nhôm, inox, sắt thép mới nhất. Giá có xu hướng tăng nhẹ so với tháng trước.',
            date: '20/12/2025',
            image: '/copper.jpg'
        },
        {
            title: 'Hướng dẫn phân loại phế liệu để bán được giá cao',
            excerpt: 'Cách phân loại phế liệu đúng cách giúp bạn có thể bán được giá cao hơn. Tìm hiểu ngay để tối ưu hóa lợi nhuận.',
            date: '18/12/2025',
            image: '/aluminum.jpg'
        },
        {
            title: 'Chính sách ưu đãi cho khách hàng lớn năm 2025',
            excerpt: 'Đặc biệt dành cho khách hàng có số lượng lớn, hoa hồng hấp dẫn lên đến 5% giá trị đơn hàng.',
            date: '15/12/2025',
            image: '/stainless.jpg'
        },
        {
            title: 'Quy trình thu mua phế liệu chuyên nghiệp',
            excerpt: 'Tìm hiểu quy trình thu mua phế liệu 5 bước đơn giản, nhanh chóng và uy tín của chúng tôi.',
            date: '12/12/2025',
            image: '/steel.jpg'
        }
    ];

    return (
        <section className="section section-alt">
            <div className="container">
                <h2 className={styles.sectionTitle}>Tin Tức & Blog</h2>
                <p className={styles.subtitle}>
                    Cập nhật tin tức mới nhất về thị trường phế liệu và dịch vụ của chúng tôi
                </p>

                <div className={styles.articlesGrid}>
                    {articles.map((article, index) => (
                        <article key={index} className={styles.articleCard}>
                            <div className={styles.articleImage}>
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 25vw"
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className={styles.dateTag}>{article.date}</div>
                            </div>
                            <div className={styles.articleContent}>
                                <h3>{article.title}</h3>
                                <p>{article.excerpt}</p>
                                <a href="#" className={styles.readMore}>
                                    Đọc thêm →
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                <div className={styles.viewMoreWrapper}>
                    <button className={styles.viewMoreBtn}>
                        Xem thêm tin tức
                    </button>
                </div>
            </div>
        </section>
    );
}
