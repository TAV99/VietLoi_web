import { getPricingData } from '@/lib/getPricing';
import PricingList from './PricingList';

export default async function PricingTable() {
    const { data, lastUpdated } = await getPricingData();

    // Group flat data into categories expected by the UI
    // Structure: { categoryKey: { name: 'Category Name', items: [] } }
    const groupedData = data.reduce((acc, item) => {
        // Create a key from category name (e.g., "Sắt thép" -> "sat_thep")
        // or just use the category name itself if simple
        const key = item.category || 'other';

        if (!acc[key]) {
            acc[key] = {
                name: item.category,
                items: []
            };
        }

        acc[key].items.push(item);
        return acc;
    }, {});

    return <PricingList pricingData={groupedData} lastUpdated={lastUpdated} />;
}
