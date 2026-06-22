'use client';

import React, { useState, useRef, useEffect } from 'react';
import PricingTableGrid from './PricingTableGrid';
import styles from './PricingTable.module.css';


/**
 * Global Collapsible Pricing Table
 * Features a red header that toggles the entire table visibility.
 * Auto-opens on scroll (once) or when navigating via #pricing anchor.
 */
export default function PricingAccordion({ data, lastUpdated }) {
    const [isOpen, setIsOpen] = useState(false); // Start CLOSED
    const containerRef = useRef(null);
    const hasAutoOpened = useRef(false); // Track if auto-open already happened

    // Auto-open logic: scroll into view OR anchor link
    useEffect(() => {
        // Handler for hash changes AND initial check
        const handleHashChange = () => {
            if (window.location.hash === '#pricing') {
                setIsOpen(true);
                hasAutoOpened.current = true;
            }
        };

        // Check immediately on mount (for direct URL access like /#pricing)
        handleHashChange();

        // IntersectionObserver for scroll-triggered auto-open
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAutoOpened.current) {
                    setIsOpen(true);
                    hasAutoOpened.current = true;
                    observer.disconnect(); // Stop observing after auto-open
                }
            },
            { threshold: 0.2 } // Trigger when 20% visible (more reliable)
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        // Listen for hash changes (clicking nav link while on page)
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            observer.disconnect();
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    // Get current date for header
    const today = new Date().toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    return (
        <section
            id="pricing"
            ref={containerRef}
            className="section section-alt"
            style={{ scrollMarginTop: '100px' }}
        >
            <div className="container">
                <h2 className={styles.sectionTitle}>Bảng Giá Phế Liệu</h2>
                <p className={styles.subtitle}>
                    Giá thu mua cập nhật mới nhất {lastUpdated ? `(${new Date(lastUpdated).toLocaleDateString('vi-VN')})` : ''}.
                    <br />Liên hệ hotline để được báo giá chính xác.
                </p>

                <div className={styles.tableContainer}>
                    {/* Global Red Header - Toggle */}
                    <div
                        className={styles.globalHeader}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className={styles.globalHeaderText}>
                            BẢNG GIÁ THU MUA PHẾ LIỆU HÔM NAY ({today})
                        </span>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            className={`${styles.globalChevron} ${isOpen ? styles.chevronExpanded : ''}`}
                        >
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>

                    {/* Collapsible Table Body - CSS Grid Trick */}
                    <div className={`${styles.contentWrapper} ${isOpen ? styles.open : ''}`}>
                        <div className={styles.minHeightFix}>
                            <PricingTableGrid data={data} />
                        </div>
                    </div>
                </div>

                <div className={styles.note}>
                    <p>
                        <strong>Lưu ý:</strong> Giá trên chỉ mang tính chất tham khảo.
                        Giá thu mua thực tế phụ thuộc vào chất lượng, số lượng và thời điểm thu mua.
                        Vui lòng liên hệ hotline để được báo giá chính xác nhất.
                    </p>
                    <a href="#contact" className={styles.fullPriceLink}>
                        Liên hệ báo giá →
                    </a>
                </div>
            </div>
        </section>
    );
}
