import styles from './CategoryPricing.module.css';
import { getMaterialInfo } from '@/lib/materialInfo';
import Link from 'next/link';

export default function CategoryPricing({ data, categoryName, lastUpdated }) {
    // Get the material info for content section
    const slug = categoryName.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D')
        .replace(/\s+/g, '-');

    const info = getMaterialInfo(slug);

    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('vi-VN', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
        } catch {
            return dateString;
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Pricing Table */}
                <div className={styles.tableCard}>
                    <div className={styles.tableHeader}>
                        <h2 className={styles.tableTitle}>
                            Bảng Giá Thu Mua {categoryName}
                        </h2>
                        {lastUpdated && (
                            <p className={styles.updateDate}>
                                Cập nhật: {formatDate(lastUpdated)}
                            </p>
                        )}
                    </div>

                    {data.length > 0 ? (
                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Tên hàng</th>
                                        <th>Giá (VNĐ/KG)</th>
                                        <th>Đơn vị tính</th>
                                        <th>Ghi chú</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={index}>
                                            <td className={styles.stt}>{index + 1}</td>
                                            <td className={styles.material}>{item.material}</td>
                                            <td className={styles.price}>{item.price}</td>
                                            <td className={styles.unit}>{item.unit}</td>
                                            <td className={styles.note}>{item.note || '-'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className={styles.emptyState}>
                            <p>Chưa có dữ liệu giá cho loại phế liệu này.</p>
                            <p>Vui lòng liên hệ hotline để được báo giá chi tiết.</p>
                        </div>
                    )}

                    <div className={styles.disclaimer}>
                        <p>* Giá trên chỉ mang tính chất tham khảo. Liên hệ hotline để được báo giá chính xác.</p>
                    </div>
                </div>

                {/* Content Section for SEO */}
                {info?.content && (
                    <div className={styles.contentSection}>
                        <div className={styles.contentCard}>
                            <div className={styles.contentText}>
                                {info.content.split('\n\n').map((paragraph, idx) => {
                                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                                        return (
                                            <h3 key={idx} className={styles.contentHeading}>
                                                {paragraph.replace(/\*\*/g, '')}
                                            </h3>
                                        );
                                    }
                                    if (paragraph.startsWith('- ')) {
                                        const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                                        return (
                                            <ul key={idx} className={styles.contentList}>
                                                {items.map((item, i) => (
                                                    <li key={i}>{item.replace('- ', '')}</li>
                                                ))}
                                            </ul>
                                        );
                                    }
                                    return <p key={idx}>{paragraph}</p>;
                                })}
                            </div>
                        </div>
                    </div>
                )}

                {/* Back to all prices */}
                <div className={styles.backLink}>
                    <Link href="/#bang-gia" className={styles.backButton}>
                        ← Xem bảng giá tất cả phế liệu
                    </Link>
                </div>
            </div>
        </section>
    );
}
