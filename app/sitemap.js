import { materialInfo } from '@/lib/materialInfo';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://vietloi.vn';

export default function sitemap() {
    // 1. Static Routes
    const staticRoutes = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
    ];

    // 2. Dynamic Routes (From materialInfo keys)
    const dynamicRoutes = Object.keys(materialInfo).map((slug) => ({
        url: `${BASE_URL}/bang-gia/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
    }));

    return [...staticRoutes, ...dynamicRoutes];
}
