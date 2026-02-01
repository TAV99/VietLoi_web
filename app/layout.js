import './globals.css'
import { Inter } from 'next/font/google'
import FloatingActions from '@/components/FloatingActions'

// Optimized font loading - no layout shift
const inter = Inter({
    subsets: ['latin', 'vietnamese'],
    weight: ['300', '400', '500', '600', '700', '800'],
    display: 'swap',
    variable: '--font-inter',
})

export const metadata = {
    metadataBase: new URL('https://vietloi.vn'),
    title: 'Thu Mua Phế Liệu Giá Cao - Nhanh Chóng Uy Tín',
    description: 'Dịch vụ thu mua phế liệu giá cao tận nơi trên toàn quốc. Thu mua nhôm, đồng, inox, sắt thép, chì, niken, hợp kim. Báo giá nhanh, thanh toán liền tay.',
    keywords: 'thu mua phế liệu, phế liệu giá cao, thu mua nhôm, thu mua đồng, thu mua inox, thu mua sắt thép',
    alternates: {
        canonical: '/',
    },
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/favicon-96x96.png', type: 'image/png' },
            { url: '/favicon.svg', type: 'image/svg+xml' },
        ],
        apple: [
            { url: '/apple-touch-icon.png' },
        ],
    },
    manifest: '/site.webmanifest',
}

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5, // Accessibility best practice
    themeColor: '#ffffff',
}

export default function RootLayout({ children }) {
    return (
        <html lang="vi" className={inter.variable}>
            <body className={inter.className}>
                {children}
                <FloatingActions />
            </body>
        </html>
    )
}
