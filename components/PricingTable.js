import { getPricingData } from '@/lib/getPricing';
import PricingList from './PricingList';

// Force dynamic rendering to ensure fresh data on each request
export const dynamic = 'force-dynamic';

export default async function PricingTable() {
    const { data, lastUpdated } = await getPricingData();

    // Generate render timestamp to verify re-renders
    const renderTime = new Date().toLocaleTimeString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    // Group flat data into categories expected by the UI
    const groupedData = data.reduce((acc, item) => {
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

    return (
        <PricingList
            pricingData={groupedData}
            lastUpdated={lastUpdated}
            renderTime={renderTime}
        />
    );
}
