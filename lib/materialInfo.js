import { slugify } from './utils';

/**
 * Static content configuration for each material category.
 * Used for SEO-rich detail pages at /bang-gia/[slug]
 */
export const materialInfo = {
    dong: {
        name: 'Đồng',
        title: 'Thu Mua Phế Liệu Đồng Giá Cao',
        description: 'Chuyên thu mua đồng đỏ, đồng vàng, dây điện đồng, đồng phế liệu công nghiệp với giá cao nhất thị trường. Cân đo chính xác, thanh toán ngay.',
        content: `
Đồng là kim loại màu có giá trị cao trong ngành thu mua phế liệu. Chúng tôi thu mua tất cả các loại đồng bao gồm:

**Các loại đồng thu mua:**
- Đồng đỏ nguyên chất
- Đồng vàng (đồng thau)
- Dây điện đồng các loại
- Đồng phế liệu công nghiệp
- Ống đồng, tấm đồng

**Cam kết của chúng tôi:**
- Giá cao nhất thị trường
- Cân đo chính xác
- Thanh toán ngay tại chỗ
- Thu mua tận nơi miễn phí
        `.trim(),
        image: '/images/copper.jpg',
        keywords: 'thu mua đồng, phế liệu đồng, đồng đỏ, đồng vàng, dây điện đồng'
    },
    nhom: {
        name: 'Nhôm',
        title: 'Thu Mua Phế Liệu Nhôm Giá Cao',
        description: 'Thu mua nhôm thanh, nhôm tấm, nhôm đùn, nhôm lon bia, nhôm phế liệu các loại. Giá cạnh tranh, thu mua tận nơi.',
        content: `
Nhôm là kim loại nhẹ có khả năng tái chế cao. Chúng tôi thu mua tất cả các loại nhôm với giá tốt nhất.

**Các loại nhôm thu mua:**
- Nhôm thanh định hình
- Nhôm tấm, nhôm cuộn
- Nhôm lon bia, vỏ lon
- Nhôm đùn công nghiệp
- Nhôm phế liệu xây dựng

**Ưu điểm khi bán nhôm cho chúng tôi:**
- Báo giá nhanh chóng
- Thu mua số lượng lớn
- Thanh toán linh hoạt
        `.trim(),
        image: '/images/aluminum.jpg',
        keywords: 'thu mua nhôm, phế liệu nhôm, nhôm thanh, nhôm tấm, nhôm lon bia'
    },
    inox: {
        name: 'Inox',
        title: 'Thu Mua Phế Liệu Inox 304, 201, 430 Giá Cao',
        description: 'Thu mua inox 304, inox 201, inox 430 và các loại inox phế liệu khác. Giá cao nhất, cân đo uy tín.',
        content: `
Inox (thép không gỉ) là vật liệu có giá trị cao trong ngành tái chế. Chúng tôi thu mua tất cả các mác inox.

**Các loại inox thu mua:**
- Inox 304 (loại phổ biến nhất)
- Inox 201
- Inox 430
- Inox phế liệu công nghiệp
- Thiết bị inox cũ

**Cách phân biệt mác inox:**
- Inox 304: Không hít nam châm
- Inox 201: Hít nhẹ nam châm
- Inox 430: Hít mạnh nam châm
        `.trim(),
        image: '/images/stainless.jpg',
        keywords: 'thu mua inox, phế liệu inox, inox 304, inox 201, inox 430'
    },
    'sat-thep': {
        name: 'Sắt thép',
        title: 'Thu Mua Phế Liệu Sắt Thép Giá Cao',
        description: 'Thu mua sắt thép xây dựng, sắt vụn, thép phế liệu các loại. Số lượng lớn giá đặc biệt.',
        content: `
Sắt thép là loại phế liệu phổ biến nhất trong xây dựng và công nghiệp. Chúng tôi thu mua với số lượng không giới hạn.

**Các loại sắt thép thu mua:**
- Sắt thép xây dựng
- Sắt vụn, sắt công trình
- Thép tấm, thép hình
- Sắt phế liệu các loại
- Máy móc cũ bằng sắt

**Chính sách thu mua:**
- Thu mua tận công trình
- Số lượng lớn giá cao hơn
- Hỗ trợ phương tiện vận chuyển
        `.trim(),
        image: '/images/steel.jpg',
        keywords: 'thu mua sắt, phế liệu sắt, sắt thép, sắt vụn, sắt xây dựng'
    },
    nhua: {
        name: 'Nhựa',
        title: 'Thu Mua Phế Liệu Nhựa PP, PVC, PET Giá Cao',
        description: 'Thu mua nhựa PP, PVC, PET, HDPE và các loại nhựa phế liệu công nghiệp. Giá cạnh tranh nhất thị trường.',
        content: `
Nhựa là vật liệu có khả năng tái chế cao. Chúng tôi thu mua nhiều loại nhựa khác nhau.

**Các loại nhựa thu mua:**
- Nhựa PP (Polypropylene)
- Nhựa PVC (Polyvinyl Chloride)
- Nhựa PET (chai nhựa)
- Nhựa HDPE (can nhựa)
- Nhựa phế liệu công nghiệp

**Yêu cầu phế liệu nhựa:**
- Phân loại theo màu sắc
- Tách riêng từng loại nhựa
- Không lẫn tạp chất
        `.trim(),
        image: '/images/Plastic.png',
        keywords: 'thu mua nhựa, phế liệu nhựa, nhựa PP, nhựa PVC, nhựa PET'
    },
    giay: {
        name: 'Giấy',
        title: 'Thu Mua Phế Liệu Giấy Carton Giá Cao',
        description: 'Thu mua giấy carton, giấy văn phòng, bìa cứng và các loại giấy phế liệu. Thu mua số lượng lớn.',
        content: `
Giấy là nguyên liệu tái chế quan trọng. Chúng tôi thu mua tất cả các loại giấy phế liệu.

**Các loại giấy thu mua:**
- Giấy carton, thùng carton
- Giấy văn phòng
- Bìa cứng, bìa carton
- Giấy báo cũ
- Giấy phế liệu các loại

**Điều kiện thu mua:**
- Giấy khô, không dính nước
- Không lẫn tạp chất
- Thu mua số lượng lớn
        `.trim(),
        image: '/images/Paper.png',
        keywords: 'thu mua giấy, phế liệu giấy, giấy carton, thu mua carton'
    },
    chi: {
        name: 'Chì',
        title: 'Thu Mua Phế Liệu Chì, Chì Acquy Giá Cao',
        description: 'Thu mua chì acquy, chì phế liệu công nghiệp với giá cạnh tranh. Thu mua tận nơi.',
        content: `
Chì là kim loại nặng có giá trị trong ngành tái chế. Chúng tôi thu mua an toàn và đúng quy định.

**Các loại chì thu mua:**
- Chì acquy cũ
- Chì phế liệu công nghiệp
- Chì tấm, chì thỏi
- Chì từ thiết bị y tế

**An toàn và môi trường:**
- Thu mua đúng quy định pháp luật
- Xử lý an toàn
- Có giấy phép thu mua
        `.trim(),
        image: '/images/Lead.png',
        keywords: 'thu mua chì, chì acquy, phế liệu chì'
    }
};

/**
 * Get material info by slug
 * @param {string} slug - URL slug (e.g., 'dong', 'nhom', 'inox')
 * @returns {Object|null} - Material info object or null if not found
 */
export function getMaterialInfo(slug) {
    return materialInfo[slug] || null;
}

/**
 * Get all valid slugs for static generation
 * @returns {Array<string>} - Array of valid slugs
 */
export function getAllMaterialSlugs() {
    return Object.keys(materialInfo);
}
