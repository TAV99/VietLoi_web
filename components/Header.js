'use client';

import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.topBar}>
                <div className="container">
                    <div className={styles.topContent}>
                        <div className={styles.logo}>
                            <img src="/logo.png" alt="VIỆT LỢI" />
                            <span>CÔNG TY TNHH VIỆT LỢI</span>
                        </div>
                        <div className={styles.hotlines}>
                            <a href="tel:0909123456" className={styles.hotlineBtn}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                0909 123 456
                            </a>
                            <a href="tel:0988765432" className={styles.hotlineBtn}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                0988 765 432
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <nav className={styles.mainNav}>
                <div className="container">
                    <ul className={styles.navList}>
                        <li><a onClick={() => scrollToSection('home')}>Trang chủ</a></li>
                        <li><a onClick={() => scrollToSection('pricing')}>Bảng giá</a></li>
                        <li><a onClick={() => scrollToSection('about')}>Giới thiệu</a></li>
                        <li><a onClick={() => scrollToSection('contact')}>Liên hệ</a></li>
                    </ul>
                </div>
            </nav>

            <div className={styles.secondaryNav}>
                <div className="container">
                    <div className={styles.categories}>
                        <span className={styles.categoryItem}>Nhôm</span>
                        <span className={styles.categoryItem}>Đồng</span>
                        <span className={styles.categoryItem}>Inox</span>
                        <span className={styles.categoryItem}>Sắt thép</span>
                        <span className={styles.categoryItem}>Chì</span>
                        <span className={styles.categoryItem}>Niken</span>
                        <span className={styles.categoryItem}>Hợp kim</span>
                        <span className={styles.categoryItem}>Thiếc</span>
                        <span className={styles.categoryItem}>Vải</span>
                        <span className={styles.categoryItem}>Linh kiện điện tử</span>
                    </div>
                </div>
            </div>

            <button
                className={styles.hamburger}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                <div className={styles.mobileMenuContent}>
                    <button className={styles.closeBtn} onClick={() => setIsMenuOpen(false)}>×</button>
                    <ul className={styles.mobileNavList}>
                        <li><a onClick={() => scrollToSection('home')}>Trang chủ</a></li>
                        <li><a onClick={() => scrollToSection('pricing')}>Bảng giá</a></li>
                        <li><a onClick={() => scrollToSection('about')}>Giới thiệu</a></li>
                        <li><a onClick={() => scrollToSection('contact')}>Liên hệ</a></li>
                    </ul>
                    <div className={styles.mobileCategoriesTitle}>Danh mục phế liệu</div>
                    <div className={styles.mobileCategories}>
                        <span>Nhôm</span>
                        <span>Đồng</span>
                        <span>Inox</span>
                        <span>Sắt thép</span>
                        <span>Chì</span>
                        <span>Niken</span>
                        <span>Hợp kim</span>
                        <span>Thiếc</span>
                        <span>Vải</span>
                        <span>Linh kiện điện tử</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
