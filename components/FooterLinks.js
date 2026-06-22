import React from 'react';
import styles from './Footer.module.css';

/**
 * FooterLinks renders list collections of materials and navigation links in the footer.
 */
export default function FooterLinks() {
    return (
        <>
            <div className={styles.column}>
                <h3>Danh Mục Thu Mua</h3>
                <ul className={styles.categoryList}>
                    <li><a href="#">Thu mua đồng</a></li>
                    <li><a href="#">Thu mua nhôm</a></li>
                    <li><a href="#">Thu mua inox</a></li>
                    <li><a href="#">Thu mua sắt thép</a></li>
                    <li><a href="#">Thu mua thiếc</a></li>
                    <li><a href="#">Thu mua niken</a></li>
                    <li><a href="#">Thu mua hợp kim</a></li>
                    <li><a href="#">Thu mua bao bì, phế liệu từ dây chuyền sản xuất đồ nhựa</a></li>
                    <li><a href="#">Thu mua thiếc</a></li>
                    <li><a href="#">Thu mua giấy,carton</a></li>
                    <li><a href="#">Thu mua vải tồn kho</a></li>
                    <li><a href="#">Thu mua linh kiện điện tử</a></li>
                </ul>
            </div>

            <div className={styles.column}>
                <h3>Liên Kết Nhanh</h3>
                <ul className={styles.linkList}>
                    <li><a href="#home">Trang chủ</a></li>
                    <li><a href="#pricing">Bảng giá phế liệu</a></li>
                    <li><a href="#">Hướng dẫn định giá</a></li>
                    <li><a href="#about">Giới thiệu công ty</a></li>
                    <li><a href="#contact">Liên hệ</a></li>
                    <li><a href="#">Chính sách bảo mật</a></li>
                    <li><a href="#">Điều khoản dịch vụ</a></li>
                    <li><a href="#">Hướng dẫn bán phế liệu</a></li>
                    <li><a href="#">Tin tức phế liệu</a></li>
                </ul>
            </div>
        </>
    );
}
