import Image from 'next/image';
import styles from './MaterialCategories.module.css';
import Link from 'next/link';
import { slugify } from '@/lib/utils';

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
            name: 'Nhựa',
            description: 'Thu mua nhựa PP, PVC, PET và các loại nhựa phế liệu',
            image: '/copper.jpg'
        },
        {
            name: 'Giấy',
            description: 'Thu mua giấy carton, bìa cứng và các loại giấy phế liệu',
            image: '/aluminum.jpg'
        },
        {
            name: 'Vàng',
            description: 'Thu mua vàng phế liệu, vàng từ linh kiện điện tử',
            image: '/copper.jpg'
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
                        <Link
                            key={index}
                            href={`/bang-gia/${slugify(category.name)}`}
                            className={styles.categoryCard}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={category.image}
                                    alt={`Thu mua phế liệu ${category.name}`}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className={styles.overlay}>
                                    <span className={styles.learnMore}>Xem bảng giá →</span>
                                </div>
                            </div>
                            <div className={styles.cardContent}>
                                <h3>{category.name}</h3>
                                <p>{category.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
