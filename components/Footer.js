import FooterContact from './FooterContact';
import FooterLinks from './FooterLinks';
import FooterSocial from './FooterSocial';
import styles from './Footer.module.css';

/**
 * Footer component refactored to compose smaller, focused sub-components.
 * Benefits maintainability and performance (components are isolated).
 */
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <FooterContact />
                    <FooterLinks />
                    <FooterSocial />
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; 2025 CÔNG TY TNHH KD TM DV VIỆT LỢI.</p>
                    <p>Thiết kế bởi <a href="https://triocoresolutions.com.vn/" target="_blank" rel="noopener noreferrer"><span className={styles.trio}>Trio</span><span className={styles.core}>Core</span><span className={styles.solutions}>Solutions</span></a></p>
                </div>
            </div>
        </footer>
    );
}
