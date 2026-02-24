# 🏭 VietLoi Web - Website Thu Mua Phế Liệu

<p align="center">
  <strong>Dịch vụ thu mua phế liệu giá cao tận nơi trên toàn quốc</strong>
</p>

<p align="center">
  <a href="https://nextjs.org">
    <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js 15">
  </a>
  <a href="https://react.dev">
    <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" alt="React 18">
  </a>
  <a href="https://tailwindcss.com">
    <img src="https://img.shields.io/badge/CSS-Modules-38bdf8?style=for-the-badge" alt="CSS Modules">
  </a>
</p>

---

## 📋 Giới Thiệu

**VietLoi Web** là website one-page (một trang) giới thiệu dịch vụ thu mua phế liệu giá cao tận nơi, phục vụ toàn quốc. Dự án được xây dựng với mu cung cục tiêấp thông tin minh bạch, dễ sử dụng và tối ưu SEO cho ngành thu mua phế liệu.

### 🎯 Mục Tiêu Dự Án

- Cung cấp thông tin giá thu mua các loại phế liệu một cách minh bạch
- Tạo kênh tiếp cận khách hàng dễ dàng qua hotline và các liên kết mạng xã hội
- Tối ưu hóa công cụ tìm kiếm (SEO) để tiếp cận khách hàng tiềm năng
- Xây dựng hệ thống hoa hồng cho đối tác giới thiệu

---

## 🌟 Tính Năng Chính

### 1. Giao Diện Người Dùng
- ✅ **Responsive Design** - Tương thích mọi thiết bị (Desktop, Tablet, Mobile)
- ✅ **Modern UI/UX** - Thiết kế hiện đại với animation và hiệu ứng mượt mà
- ✅ **Floating Action Buttons** - Nút gọi điện, Zalo, Messenger nổi cố định

### 2. Các Section Chính
- **Hero Banner** - Banner giới thiệu dịch vụ chính
- **Giới thiệu công ty** - Thông tin về Công ty TNHH KD TM DV Việt Lợi
- **Lý do chọn chúng tôi** - Các lợi thế cạnh tranh
- **Bảng giá phế liệu** - Giá thu mua chi tiết theo từng loại vật liệu
- **Bảng hoa hồng** - Chương trình Affiliate cho người giới thiệu
- **Quy trình làm việc** - 5 bước dịch vụ rõ ràng
- **Danh mục vật liệu** - Các loại phế liệu thu mua
- **Khu vực phục vụ** - Danh sách tỉnh/thành phố
- **Tin tức/Blog** - Bài viết mới nhất

### 3. Tối Ưu SEO
- ✅ Meta tags tối ưu (Title, Description, Keywords)
- ✅ Open Graph tags cho mạng xã hội
- ✅ Schema.org Structured Data (LocalBusiness)
- ✅ Server-Side Rendering với Next.js

---

## 🏗️ Kiến Trúc & Công Nghệ

### Tech Stack

| Công nghệ | Phiên bản | Mục đích |
|-----------|-----------|-----------|
| **Next.js** | ^15 | React Framework với SSR/SSG |
| **React** | ^18 | UI Library |
| **CSS Modules** | Built-in | Component-scoped styling |
| **ESLint** | ^8 | Code linting |

### Cấu Trúc Thư Mục

```
VietLoi_web/
├── 📁 app/                      # Next.js App Router
│   ├── globals.css              # Global styles & CSS variables
│   ├── layout.js                # Root layout (HTML, fonts)
│   └── page.js                  # Homepage với tất cả sections
│
├── 📁 components/               # React Components (16 components)
│   ├── Header.js                # Navigation header
│   ├── Hero.js                  # Hero banner section
│   ├── CompanyIntro.js          # Giới thiệu công ty
│   ├── WhyChooseUs.js           # Lý do chọn dịch vụ
│   ├── PricingTable.js          # Bảng giá thu mua
│   ├── CommissionTable.js       # Bảng hoa hồng
│   ├── WorkProcess.js           # Quy trình làm việc (5 bước)
│   ├── MaterialCategories.js    # Danh mục vật liệu
│   ├── Locations.js             # Địa điểm phục vụ
│   ├── NewsSection.js          # Tin tức/Blog
│   ├── Footer.js                # Footer
│   ├── FloatingActions.js       # Nút liên hệ nổi
│   └── ...
│
├── 📁 lib/                     # Utility functions
│   └── getPricing.js           # Fetch pricing data từ Google Sheets
│
├── 📁 public/                   # Static assets
│   ├── logo.png
│   ├── banner.jpg
│   └── [các file hình ảnh]
│
├── 📄 package.json
├── 📄 next.config.js
├── 📄 jsconfig.json
└── 📄 .eslintrc.json
```

---

## 💰 Danh Mục Thu Mua & Bảng Giá

### Các Loại Phế Liệu Thu Mua

| STT | Loại phế liệu | Ví dụ vật liệu |
|-----|---------------|-----------------|
| 1 | **Đồng** | Đồng đỏ, đồng vàng, dây điện đồng |
| 2 | **Nhôm** | Nhôm thanh, nhôm tấm, nhôm lon bia |
| 3 | **Inox** | Inox 304, Inox 201, Inox 430 |
| 4 | **Sắt thép** | Sắt thép mới, sắt xây dựng, sắt phế liệu |
| 5 | **Nhựa** | Nhựa PP, PET, HDPE |
| 6 | **Giấy** | Giấy carton, giấy tồn kho |
| 7 | **Chì** | Chì thỏi, chì phế liệu |
| 8 | **Niken** | Niken nguyên chất, hợp kim niken |
| 9 | **Thiếc** | Thiếc nguyên chất |
| 10 | **Kẽm** | Kẽm thỏi, kẽm phế liệu |

### Phạm Vi Khu Vực

- ✅ **TP. Hồ Chí Minh** và các tỉnh lân cận
- ✅ **Hà Nội** và các tỉnh miền Bắc
- ✅ Toàn quốc cho đơn hàng lớn

---

## 👥 Thông Tin Công Ty

| Thông tin | Chi tiết |
|-----------|----------|
| **Tên công ty** | Công Ty TNHH KD TM DV Việt Lợi |
| **Hotline** | 0979065588 |
| **Email** | ducongthao168@gmail.com |
| **MST** | 3702541855 |
| **Địa chỉ** | Số 10/3, khu phố Bình Phước B, Phường An Phú, TP Hồ Chí Minh |

### Mạng Xã Hội
- 📘 Facebook
- 💬 Zalo
- 📺 YouTube
- 📷 Instagram

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Dự Án

### Yêu Cầu Hệ Thống

- Node.js >= 18.x
- npm >= 9.x

### Cài Đặt

```bash
# Clone dự án
git clone https://github.com/TAV99/VietLoi_web.git
cd VietLoi_web

# Cài đặt dependencies
npm install
```

### Chạy Development Server

```bash
npm run dev
```

Truy cập: http://localhost:3000

### Build Production

```bash
# Build dự án
npm run build

# Chạy production server
npm start
```

### Linting

```bash
npm run lint
```

---

## 🔧 Cấu Hình Môi Trường

### Biến Môi Trường

Tạo file `.env.local`:

```env
# URL Google Sheets JSON API cho pricing data
NEXT_PUBLIC_GOOGLE_SHEET_JSON_URL=your_google_sheet_json_url
```

### Cấu Hình Next.js

```javascript
// next.config.js
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
}
```

---

## 🎨 Design System

### Color Palette

| Màu | Giá trị | Mục đích |
|-----|---------|----------|
| Primary | `#dc2626` | Màu thương hiệu (đỏ) |
| Primary Dark | `#b91c1c` | Màu đậm |
| Primary Light | `#ef4444` | Màu nhạt |
| Secondary | `#1e293b` | Màu phụ (xanh đậm) |
| Text | `#334155` | Màu văn bản |
| Background Light | `#f8fafc` | Nền sáng |
| Accent Gold | `#f59e0b` | Màu nhấn |

### Typography

- **Font Family:** Inter (Google Fonts)
- **Trọng số:** 300, 400, 500, 600, 700, 800

---

## 📈 SEO & Performance

### Metadata

```javascript
title: 'Thu Mua Phế Liệu Giá Cao - Nhanh Chóng Uy Tín Tận Nơi'
description: 'Dịch vụ thu mua phế liệu giá cao tận nơi trên toàn quốc...'
keywords: 'thu mua phế liệu, phế liệu giá cao, thu mua nhôm...'
```

### Schema.org

```json
{
  "@type": "LocalBusiness",
  "name": "Thu Mua Phế Liệu Giá Cao",
  "telephone": ["0979065588", "0988765432"],
  "address": {...},
  "openingHours": "Mo-Su 00:00-23:59",
  "aggregateRating": {
    "ratingValue": "4.8",
    "reviewCount": "250"
  }
}
```

---

## 📝 License

Copyright © 2025 Công Ty TNHH KD TM DV Việt Lợi. All rights reserved.

---

## 📞 Liên Hệ

**Hotline:** 0979065588  
**Email:** ducongthao168@gmail.com  
**Địa chỉ:** Số 10/3, khu phố Bình Phước B, Phường An Phú, TP Hồ Chí Minh

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/TAV99">TAV99</a>
</p>
