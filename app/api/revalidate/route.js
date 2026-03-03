import { revalidateTag, revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');

    // Validate the secret token
    if (secret !== process.env.REVALIDATE_SECRET) {
        return NextResponse.json(
            { error: 'Unauthorized' },
            { status: 401 }
        );
    }

    try {
        revalidateTag('pricing');
        revalidatePath('/');

        const timestamp = Date.now();

        return NextResponse.json({
            revalidated: true,
            now: timestamp,
            message: 'Cache cleared for pricing tag and homepage'
        });
    } catch (error) {
        console.error('[Revalidate API] Revalidation error:', error);
        return NextResponse.json(
            { error: 'Failed to revalidate', details: error.message },
            { status: 500 }
        );
    }
}
