#!/usr/bin/env node

/**
 * Image Optimization Script
 * Compresses all images in /public/images/ larger than 1MB to WebP format under 500KB.
 * 
 * Usage:
 *   npm install sharp --save-dev   (one-time)
 *   node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'optimized');
const SIZE_THRESHOLD = 1 * 1024 * 1024; // 1MB
const TARGET_SIZE = 500 * 1024; // 500KB
const SUPPORTED_EXTENSIONS = ['.png', '.jpg', '.jpeg'];

async function optimizeImage(filePath, outputPath) {
    const stats = fs.statSync(filePath);
    const originalSize = stats.size;
    const fileName = path.basename(filePath);

    if (originalSize < SIZE_THRESHOLD) {
        console.log(`⏭️  SKIP: ${fileName} (${(originalSize / 1024).toFixed(0)} KB — under 1MB)`);
        return;
    }

    console.log(`🔄 Processing: ${fileName} (${(originalSize / 1024 / 1024).toFixed(1)} MB)`);

    // Start with quality 80 and reduce until under target size
    let quality = 80;
    let outputBuffer;

    while (quality >= 10) {
        outputBuffer = await sharp(filePath)
            .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
            .webp({ quality })
            .toBuffer();

        if (outputBuffer.length <= TARGET_SIZE) break;
        quality -= 5;
    }

    const webpName = path.basename(filePath, path.extname(filePath)) + '.webp';
    const webpPath = path.join(outputPath, webpName);
    fs.writeFileSync(webpPath, outputBuffer);

    const savings = ((1 - outputBuffer.length / originalSize) * 100).toFixed(1);
    console.log(`✅ ${fileName} → ${webpName} | ${(originalSize / 1024 / 1024).toFixed(1)} MB → ${(outputBuffer.length / 1024).toFixed(0)} KB (−${savings}%) [quality: ${quality}]`);
}

async function main() {
    console.log('\\n🖼️  Image Optimization Script');
    console.log('='.repeat(50));
    console.log(`Source:    ${IMAGES_DIR}`);
    console.log(`Output:    ${OUTPUT_DIR}`);
    console.log(`Threshold: > 1 MB`);
    console.log(`Target:    < 500 KB (WebP)\\n`);

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const files = fs.readdirSync(IMAGES_DIR).filter(f => {
        const ext = path.extname(f).toLowerCase();
        return SUPPORTED_EXTENSIONS.includes(ext) && !fs.statSync(path.join(IMAGES_DIR, f)).isDirectory();
    });

    if (files.length === 0) {
        console.log('No images found to process.');
        return;
    }

    console.log(`Found ${files.length} image(s)\\n`);

    for (const file of files) {
        await optimizeImage(path.join(IMAGES_DIR, file), OUTPUT_DIR);
    }

    console.log('\\n✅ Done! Optimized images saved to: public/images/optimized/');
    console.log('\\n📋 Next steps:');
    console.log('   1. Review the optimized images in public/images/optimized/');
    console.log('   2. Replace originals: mv public/images/optimized/* public/images/');
    console.log('   3. Update file extensions in code from .png/.jpg → .webp');
    console.log('   4. Delete the optimized/ folder');
}

main().catch(console.error);
