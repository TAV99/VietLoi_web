import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CompanyIntro from '@/components/CompanyIntro';
import WhyChooseUs from '@/components/WhyChooseUs';
import PricingTable from '@/components/PricingTable';
import CommissionTable from '@/components/CommissionTable';
import WorkProcess from '@/components/WorkProcess';
import MaterialCategories from '@/components/MaterialCategories';
import Locations from '@/components/Locations';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import './globals.css';

export const metadata = {
    title: 'Thu Mua Phế Liệu Giá Cao - Nhanh Chóng Uy Tín Tận Nơi',
    description: 'Dịch vụ thu mua phế liệu giá cao tận nơi trên toàn quốc. Thu mua nhôm, đồng, inox, sắt thép, chì, niken, hợp kim, thiếc, vải, linh kiện điện tử. Báo giá nhanh, thanh toán liền tay, cân đo uy tín.',
    keywords: 'thu mua phế liệu, phế liệu giá cao, thu mua nhôm, thu mua đồng, thu mua inox, thu mua sắt thép, thu mua chì, thu mua linh kiện điện tử',
    openGraph: {
        title: 'Thu Mua Phế Liệu Giá Cao - Nhanh Chóng Uy Tín',
        description: 'Dịch vụ thu mua phế liệu uy tín, giá cao nhất thị trường. Phục vụ 24/7 toàn quốc.',
        type: 'website',
    }
};

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Thu Mua Phế Liệu Giá Cao",
                        "description": "Dịch vụ thu mua phế liệu giá cao tận nơi",
                        "telephone": ["0979065588", "0988765432"],
                        "email": "info@thumuaphelieu.com",
                        "address": [
                            {
                                "@type": "PostalAddress",
                                "streetAddress": "123 Đường Nguyễn Văn Linh",
                                "addressLocality": "Quận 7",
                                "addressRegion": "TP. Hồ Chí Minh",
                                "addressCountry": "VN"
                            },
                            {
                                "@type": "PostalAddress",
                                "streetAddress": "456 Đường Giải Phóng",
                                "addressLocality": "Quận Hoàng Mai",
                                "addressRegion": "Hà Nội",
                                "addressCountry": "VN"
                            }
                        ],
                        "openingHours": "Mo-Su 00:00-23:59",
                        "priceRange": "$$",
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.8",
                            "reviewCount": "250"
                        }
                    })
                }}
            />

            <Header />
            <main>
                <Hero />
                <CompanyIntro />
                <WhyChooseUs />
                <PricingTable />
                <CommissionTable />
                <WorkProcess />
                <MaterialCategories />
                <Locations />
                <NewsSection />
            </main>
            <Footer />
            <FloatingActions />
        </>
    );
}
