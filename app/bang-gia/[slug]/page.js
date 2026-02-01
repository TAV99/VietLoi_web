import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import CategoryHero from '@/components/CategoryHero';
import CategoryPricing from '@/components/CategoryPricing';
import { getMaterialInfo, getAllMaterialSlugs } from '@/lib/materialInfo';
import { getPricingData } from '@/lib/getPricing';
import { slugify } from '@/lib/utils';

// Generate static params for all material slugs
export async function generateStaticParams() {
    const slugs = getAllMaterialSlugs();
    return slugs.map((slug) => ({ slug }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const info = getMaterialInfo(slug);

    if (!info) {
        return {
            title: 'Không tìm thấy trang',
            description: 'Trang bạn tìm kiếm không tồn tại.'
        };
    }

    return {
        title: `${info.title} | Bảng Giá Mới Nhất 2026`,
        description: info.description,
        keywords: info.keywords,
        alternates: {
            canonical: `/bang-gia/${slug}`,
        },
        openGraph: {
            title: info.title,
            description: info.description,
            type: 'website',
        }
    };
}

export default async function MaterialPage({ params }) {
    const { slug } = await params;
    const info = getMaterialInfo(slug);

    // Return 404 if material not found
    if (!info) {
        notFound();
    }

    // Fetch pricing data and filter by category
    const { data, lastUpdated } = await getPricingData();
    const filteredData = data.filter(item =>
        slugify(item.category) === slug
    );

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": info.title,
                        "description": info.description,
                        "category": "Phế liệu " + info.name,
                        "offers": {
                            "@type": "AggregateOffer",
                            "priceCurrency": "VND",
                            "availability": "https://schema.org/InStock"
                        }
                    })
                }}
            />

            <Header />
            <main>
                <CategoryHero info={info} />
                <CategoryPricing
                    data={filteredData}
                    categoryName={info.name}
                    lastUpdated={lastUpdated}
                />
            </main>
            <Footer />
            <FloatingActions />
        </>
    );
}
