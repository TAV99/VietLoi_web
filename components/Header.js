'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { slugify } from '@/lib/utils';

// Categories matching the pricing data (synced with getPricing.js)
const CATEGORIES = [
    'Đồng',
    'Nhôm',
    'Inox',
    'Sắt thép',
    'Nhựa',
    'Giấy'
];

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

    // Close mobile menu on navigation
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.topBar}>
                <div className="container">
                    <div className={styles.topContent}>
                        <Link href="/" className={styles.logo} onClick={closeMenu}>
                            <Image
                                src="/logo.png"
                                alt="VIỆT LỢI - Thu Mua Phế Liệu"
                                width={40}
                                height={40}
                                priority
                            />
                            <span>CÔNG TY TNHH KD TM DV VIỆT LỢI</span>
                        </Link>
                        <a href="tel:0979065588" className={styles.ctaHotline}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <span className={styles.ctaText}>Gọi Ngay</span>
                        </a>
                    </div>
                </div>
            </div>

            <nav className={styles.mainNav}>
                <div className="container">
                    <ul className={styles.navList}>
                        <li><Link href="/">Trang chủ</Link></li>
                        <li><Link href="/#pricing">Bảng giá</Link></li>
                        <li><Link href="/#about">Giới thiệu</Link></li>
                        <li><Link href="/#contact">Liên hệ</Link></li>
                    </ul>
                </div>
            </nav>

            <div className={styles.secondaryNav}>
                <div className="container">
                    <div className={styles.categories}>
                        {CATEGORIES.map((category) => (
                            <Link
                                key={category}
                                href={`/bang-gia/${slugify(category)}`}
                                className={styles.categoryItem}
                            >
                                {category}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile CTA + Hamburger */}
            <div className={styles.mobileActions}>
                <a href="tel:0979065588" className={styles.mobileCta}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span className={styles.mobileCtaText}>Gọi Ngay</span>
                </a>
                <button
                    className={styles.hamburger}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                <div className={styles.mobileMenuContent}>
                    <button className={styles.closeBtn} onClick={closeMenu}>×</button>
                    <ul className={styles.mobileNavList}>
                        <li><Link href="/" onClick={closeMenu}>Trang chủ</Link></li>
                        <li><Link href="/#pricing" onClick={() => {
                            // Hack nhỏ: Chờ 100ms để trang cuộn rồi mới tìm bảng giá để mở
                            setTimeout(() => {
                                const table = document.getElementById('pricing');
                                if (table) table.click(); // Giả lập bấm vào bảng giá để mở
                            }, 100);
                        }}>Bảng giá</Link></li>
                        <li><Link href="/#about" onClick={closeMenu}>Giới thiệu</Link></li>
                        <li><Link href="/#contact" onClick={closeMenu}>Liên hệ</Link></li>
                    </ul>
                    <div className={styles.mobileCategoriesTitle}>Danh mục phế liệu</div>
                    <div className={styles.mobileCategories}>
                        {CATEGORIES.map((category) => (
                            <Link
                                key={category}
                                href={`/bang-gia/${slugify(category)}`}
                                onClick={closeMenu}
                            >
                                {category}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}
