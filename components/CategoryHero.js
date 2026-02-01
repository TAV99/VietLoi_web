import styles from './CategoryHero.module.css';

export default function CategoryHero({ info }) {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <img
                    src={info.image}
                    alt={info.name}
                    className={styles.backgroundImage}
                />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.content}>
                <h1 className={styles.title}>{info.title}</h1>
                <p className={styles.description}>{info.description}</p>

                <div className={styles.cta}>
                    <a href="tel:0979065588" className={styles.ctaButton}>
                        📞 Gọi Báo Giá Ngay
                    </a>
                    <a
                        href="https://zalo.me/0979065588"
                        className={styles.ctaButtonSecondary}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        💬 Chat Zalo
                    </a>
                </div>
            </div>
        </section>
    );
}
