import styles from './FloatingActions.module.css';
import Image from 'next/image';

const FloatingActions = () => {
    return (
        <div className={styles.container}>
            {/* Zalo Button */}
            <a
                href="https://zalo.me/0979065588"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} ${styles.zaloButton}`}
                aria-label="Chat on Zalo"
            >
                <Image
                    src="/Icon_of_Zalo.svg"
                    alt="Zalo"
                    width={40}
                    height={40}
                    priority
                    className={styles.icon}
                    style={{ width: '40px', height: '40px' }}
                />
            </a>

            {/* Call Button */}
            <a
                href="tel:0979065588"
                className={`${styles.button} ${styles.callButton}`}
                aria-label="Call Now"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={styles.icon}
                    style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}
                >
                    {/* Phone Icon */}
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            </a>
        </div>
    );
};

export default FloatingActions;
