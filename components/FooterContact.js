import React from 'react';
import styles from './Footer.module.css';

/**
 * FooterContact renders company details, hotline, email, tax code, and address.
 */
export default function FooterContact() {
    return (
        <div className={styles.column}>
            <h3>Thông Tin Công Ty</h3>
            <div className={styles.companyInfo}>
                <p><strong>Công Ty TNHH KD TM DV Việt Lợi</strong></p>
                <p>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    Hotline : 0979065588
                </p>
                <p>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                    </svg>
                    Email: ducongthao168@gmail.com
                </p>
                <p><strong>MST:</strong> 3702541855</p>
                <p><strong>Địa chỉ:</strong> Số 10/3, khu phố Bình Phước B, Phường An Phú, Thuận An, Bình Dương, Việt Nam</p>
            </div>
        </div>
    );
}
