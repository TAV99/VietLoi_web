import styles from './MaterialCategories.module.css';

export default function MaterialCategories() {
    const categories = [
        {
            name: 'Đồng',
            description: 'Thu mua đồng đỏ, đồng vàng, dây điện đồng với giá cao nhất thị trường',
            image: '/copper.jpg'
        },
        {
            name: 'Nhôm',
            description: 'Thu mua nhôm thanh, nhôm tấm, nhôm lon bia và các loại nhôm khác',
            image: '/aluminum.jpg'
        },
        {
            name: 'Inox',
            description: 'Thu mua inox 304, 201, 430 và các loại inox phế liệu',
            image: '/stainless.jpg'
        },
        {
            name: 'Sắt thép',
            description: 'Thu mua sắt thép xây dựng, sắt phế liệu các loại',
            image: '/steel.jpg'
        },
        {
            name: 'Chì',
            description: 'Thu mua chì acquy, chì phế liệu công nghiệp',
            image: '/steel.jpg'
        },
        {
            name: 'Hợp kim',
            description: 'Thu mua các loại hợp kim đồng, nhôm, kẽm',
            image: '/aluminum.jpg'
        },
        {
            name: 'Vải tồn kho',
            description: 'Thu mua vải tồn kho, vải phế liệu các loại',
            image: '/copper.jpg'
        },
        {
            name: 'Linh kiện điện tử',
            description: 'Thu mua bo mạch, linh kiện điện tử, phế liệu điện tử',
            image: '/electronic.jpg'
        }
    ];

    return (
        <section className="section section-alt">
            <div className="container">
                <h2 className={styles.sectionTitle}>Danh Mục Phế Liệu Thu Mua</h2>
                <p className={styles.subtitle}>
                    Chúng tôi thu mua đa dạng các loại phế liệu với giá cạnh tranh nhất
                </p>

                <div className={styles.categoriesGrid}>
                    {categories.map((category, index) => (
                        <div key={index} className={styles.categoryCard}>
                            <div className={styles.imageWrapper}>
                                <img src={category.image} alt={category.name} />
                                <div className={styles.overlay}>
                                    <button className={styles.learnMore}>Tìm hiểu thêm →</button>
                                </div>
                            </div>
                            <div className={styles.cardContent}>
                                <h3>{category.name}</h3>
                                <p>{category.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
