import { revalidateTag, revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');

    console.log('[Revalidate API] Request received at:', new Date().toISOString());
    console.log('[Revalidate API] Secret provided:', secret ? 'Yes' : 'No');

    // Validate the secret token
    if (secret !== process.env.REVALIDATE_SECRET) {
        console.log('[Revalidate API] ❌ Unauthorized - Invalid secret token');
        return NextResponse.json(
            { error: 'Unauthorized' },
            { status: 401 }
        );
    }

    console.log('[Revalidate API] ✅ Secret validated successfully');

    try {
        // Revalidate the pricing data cache tag
        console.log('[Revalidate API] Revalidating tag: pricing');
        revalidateTag('pricing');

        // Also revalidate the homepage to clear Full Route Cache
        console.log('[Revalidate API] Revalidating path: /');
        revalidatePath('/');

        const timestamp = Date.now();
        console.log('[Revalidate API] ✅ Revalidation complete at:', timestamp);

        return NextResponse.json({
            revalidated: true,
            now: timestamp,
            message: 'Cache cleared for pricing tag and homepage'
        });
    } catch (error) {
        console.error('[Revalidate API] ❌ Revalidation error:', error);
        return NextResponse.json(
            { error: 'Failed to revalidate', details: error.message },
            { status: 500 }
        );
    }
}
