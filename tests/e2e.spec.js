// @ts-check
import { test, expect } from '@playwright/test';

const BASE_URL = 'https://phelieuvietloi.com';

test.describe('VietLoi Website E2E Tests', () => {

    test('Homepage loads successfully with correct title', async ({ page }) => {
        const response = await page.goto(BASE_URL);

        // Check HTTP status
        expect(response?.status()).toBe(200);

        // Check title contains "Việt Lợi"
        await expect(page).toHaveTitle(/Việt Lợi/);
    });

    test('Pricing table exists on page', async ({ page }) => {
        await page.goto(BASE_URL);

        // Check if #pricing-table element exists (or fallback to #pricing section)
        const pricingSection = page.locator('#pricing, #pricing-table').first();
        await expect(pricingSection).toBeVisible({ timeout: 10000 });
    });

    test('Footer contains Bình Dương address', async ({ page }) => {
        await page.goto(BASE_URL);

        // Check footer contains the location text
        const footer = page.locator('footer');
        await expect(footer).toContainText('Bình Dương');
    });

    test('robots.txt is accessible', async ({ request }) => {
        const response = await request.get(`${BASE_URL}/robots.txt`);

        // Check HTTP status
        expect(response.status()).toBe(200);

        // Check content contains sitemap reference
        const body = await response.text();
        expect(body).toContain('Sitemap');
    });

    test('sitemap.xml is accessible', async ({ request }) => {
        const response = await request.get(`${BASE_URL}/sitemap.xml`);

        // Check HTTP status
        expect(response.status()).toBe(200);

        // Check content is valid XML
        const body = await response.text();
        expect(body).toContain('<?xml');
        expect(body).toContain('phelieuvietloi.com');
    });

});
