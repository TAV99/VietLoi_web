export const metadata = {
    title: 'Thu Mua Phế Liệu Giá Cao - Nhanh Chóng Uy Tín',
    description: 'Dịch vụ thu mua phế liệu giá cao tận nơi trên toàn quốc. Thu mua nhôm, đồng, inox, sắt thép, chì, niken, hợp kim. Báo giá nhanh, thanh toán liền tay.',
    keywords: 'thu mua phế liệu, phế liệu giá cao, thu mua nhôm, thu mua đồng, thu mua inox, thu mua sắt thép',
}

export default function RootLayout({ children }) {
    return (
        <html lang="vi">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
            </head>
            <body>{children}</body>
        </html>
    )
}
