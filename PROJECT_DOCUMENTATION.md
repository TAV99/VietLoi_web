# 📘 Tài Liệu Dự Án vibeCode

## 📋 Tổng Quan Dự Án

**Tên dự án:** vibeCode  
**Phiên bản:** 0.1.0  
**Mô tả:** Website một trang (one-page) cho dịch vụ thu mua phế liệu giá cao tận nơi trên toàn quốc  
**Ngôn ngữ:** Tiếng Việt  

### 🎯 Mục Đích
Website cung cấp thông tin dịch vụ thu mua phế liệu với các tính năng:
- Hiển thị thông tin công ty và dịch vụ
- Bảng giá thu mua các loại phế liệu
- Hoa hồng cho người giới thiệu
- Quy trình làm việc
- Danh mục vật liệu thu mua
- Địa điểm phục vụ
- Tin tức/Blog
- Tối ưu SEO cho ngành thu mua phế liệu

### 🌟 Tính Năng Chính
- ✅ Responsive design (Desktop, Tablet, Mobile)
- ✅ SEO-friendly với metadata và Schema.org
- ✅ Modern UI/UX với animation và hiệu ứng
- ✅ Floating action buttons (Call, Zalo, Messenger)
- ✅ Bảng giá chi tiết theo từng loại phế liệu
- ✅ Hệ thống hoa hồng tiếp thị liên kết
- ✅ Tích hợp Google Fonts (Inter)

---

## 🏗️ Kiến Trúc & Công Nghệ

### Tech Stack

| Công nghệ | Phiên bản | Mục đích |
|-----------|----------|----------|
| **Next.js** | ^15 | React framework với SSR/SSG |
| **React** | ^18 | UI library |
| **CSS Modules** | Built-in | Component-scoped styling |
| **ESLint** | ^8 | Code linting |

### Cấu Trúc Thư Mục

```
vibeCode/
├── 📁 app/                      # Next.js App Router
│   ├── globals.css              # Global styles & CSS variables
│   ├── layout.js                # Root layout (HTML, fonts)
│   └── page.js                  # Homepage với tất cả sections
│
├── 📁 components/               # React Components
│   ├── Header.js                # Navigation header
│   ├── Header.module.css
│   ├── Hero.js                  # Hero banner section
│   ├── Hero.module.css
│   ├── CompanyIntro.js          # Giới thiệu công ty
│   ├── CompanyIntro.module.css
│   ├── WhyChooseUs.js           # Lý do chọn dịch vụ
│   ├── WhyChooseUs.module.css
│   ├── PricingTable.js          # Bảng giá thu mua
│   ├── PricingTable.module.css
│   ├── CommissionTable.js       # Bảng hoa hồng
│   ├── CommissionTable.module.css
│   ├── WorkProcess.js           # Quy trình làm việc
│   ├── WorkProcess.module.css
│   ├── MaterialCategories.js    # Danh mục vật liệu
│   ├── MaterialCategories.module.css
│   ├── Locations.js             # Địa điểm phục vụ
│   ├── Locations.module.css
│   ├── NewsSection.js           # Tin tức/Blog
│   ├── NewsSection.module.css
│   ├── Footer.js                # Footer với links
│   ├── Footer.module.css
│   ├── FloatingActions.js       # Nút liên hệ nổi
│   └── FloatingActions.module.css
│
├── 📁 public/                   # Static assets
│   ├── logo.png                 # Logo công ty
│   ├── banner.jpg               # Hero banner image
│   ├── aluminum.jpg             # Ảnh nhôm
│   ├── copper.jpg               # Ảnh đồng
│   ├── stainless.jpg            # Ảnh inox
│   ├── steel.jpg                # Ảnh sắt thép
│   ├── electronic.jpg           # Ảnh linh kiện điện tử
│   └── 📁 Dashboard_files/      # Additional assets
│
├── 📄 package.json              # Dependencies
├── 📄 next.config.js            # Next.js configuration
├── 📄 jsconfig.json             # JavaScript config (path aliases)
├── 📄 .eslintrc.json            # ESLint rules
└── 📄 .gitignore                # Git ignore rules
```

---

## 🧩 Components Chi Tiết

### 1. Header (`Header.js`)
- **Chức năng:** Navigation bar cố định ở đầu trang
- **Tính năng:**
  - Logo và tên công ty
  - Menu navigation (smooth scroll)
  - Responsive mobile menu
  - Sticky header khi scroll

### 2. Hero (`Hero.js`)
- **Chức năng:** Banner chính của trang
- **Tính năng:**
  - Call-to-action buttons
  - Background image
  - Slogan và mô tả dịch vụ

### 3. CompanyIntro (`CompanyIntro.js`)
- **Chức năng:** Giới thiệu về công ty
- **Tính năng:**
  - Thông tin công ty
  - Giá trị cốt lõi
  - Cam kết dịch vụ

### 4. WhyChooseUs (`WhyChooseUs.js`)
- **Chức năng:** Lý do nên chọn dịch vụ
- **Tính năng:**
  - Các lợi thế cạnh tranh
  - Icon và mô tả

### 5. PricingTable (`PricingTable.js`)
- **Chức năng:** Bảng giá thu mua phế liệu
- **Tính năng:**
  - Giá theo từng loại vật liệu
  - Đơn vị tính
  - Responsive table

### 6. CommissionTable (`CommissionTable.js`)
- **Chức năng:** Bảng hoa hồng cho người giới thiệu
- **Tính năng:**
  - Tỷ lệ hoa hồng theo số lượng
  - Điều kiện áp dụng

### 7. WorkProcess (`WorkProcess.js`)
- **Chức năng:** Quy trình làm việc 4 bước
- **Tính năng:**
  - Timeline visualization
  - Step-by-step guide

### 8. MaterialCategories (`MaterialCategories.js`)
- **Chức năng:** Các loại vật liệu thu mua
- **Tính năng:**
  - Grid layout
  - Hình ảnh minh họa
  - Mô tả từng loại

### 9. Locations (`Locations.js`)
- **Chức năng:** Khu vực phục vụ
- **Tính năng:**
  - Danh sách tỉnh/thành phố
  - Thông tin liên hệ từng khu vực

### 10. NewsSection (`NewsSection.js`)
- **Chức năng:** Tin tức và blog
- **Tính năng:**
  - Bài viết mới nhất
  - Preview và link

### 11. Footer (`Footer.js`)
- **Chức năng:** Thông tin cuối trang
- **Tính năng:**
  - Thông tin liên hệ
  - Links navigation
  - Social media
  - Copyright

### 12. FloatingActions (`FloatingActions.js`)
- **Chức năng:** Nút liên hệ nhanh
- **Tính năng:**
  - Fixed position
  - Call, Zalo, Messenger buttons
  - Smooth animation

---

## 🎨 Design System

### Color Palette
```css
/* Màu chính - Based on Red Brand Color */
--primary-color: #dc2626;     /* Red - Màu thương hiệu */
--primary-dark: #b91c1c;      /* Darker red */
--primary-light: #ef4444;     /* Lighter red */

/* Màu phụ */
--secondary-color: #1e293b;   /* Dark slate */
--text-color: #334155;        /* Slate gray */
--bg-light: #f8fafc;          /* Light background */

/* Màu accent */
--accent-gold: #f59e0b;       /* Gold/Amber */
--success-green: #10b981;     /* Green */
```

### Typography
- **Font Family:** Inter (Google Fonts)
- **Weights:** 300, 400, 500, 600, 700, 800

### Layout
- **Max Width:** 1200px (container)
- **Breakpoints:**
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

---

## 🔧 Cấu Hình

### next.config.js
```javascript
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
}
```

### jsconfig.json
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

---

## 🚀 Hướng Dẫn Phát Triển

### 1. Cài Đặt
```bash
# Clone project
cd /Users/ben/Documents/dev/vibeCode

# Cài đặt dependencies
npm install
```

### 2. Chạy Development Server
```bash
npm run dev
```
🌐 Mở trình duyệt: [http://localhost:3000](http://localhost:3000)

### 3. Build Production
```bash
npm run build
npm start
```

### 4. Linting
```bash
npm run lint
```

---

## 📱 SEO Optimization

### Metadata
- ✅ Title tags tối ưu
- ✅ Meta descriptions
- ✅ Keywords cho ngành phế liệu
- ✅ Open Graph tags (Facebook, Social)

### Schema.org Structured Data
```json
{
  "@type": "LocalBusiness",
  "name": "Thu Mua Phế Liệu Giá Cao",
  "telephone": ["0909123456", "0988765432"],
  "email": "info@thumuaphelieu.com",
  "address": [...],
  "openingHours": "Mo-Su 00:00-23:59",
  "aggregateRating": {
    "ratingValue": "4.8",
    "reviewCount": "250"
  }
}
```

### Performance
- Next.js optimized image loading
- CSS Modules cho minimal CSS
- Server-side rendering (SSR)

---

## 🎯 Roadmap & To-Do

### Hiện Tại
- [x] One-page website hoàn chỉnh
- [x] Responsive design
- [x] SEO optimization
- [x] 12 components chính

### Tương Lai
- [ ] Blog/News CMS integration
- [ ] Admin dashboard
- [ ] Form liên hệ với email notification
- [ ] Tích hợp Google Maps cho locations
- [ ] Multi-language support (English)
- [ ] Dark mode
- [ ] Performance optimization (lazy loading)
- [ ] Analytics integration (Google Analytics)

---

## 👥 Thông Tin Liên Hệ (Demo)

**Hotline:** 0909123456, 0988765432  
**Email:** info@thumuaphelieu.com  
**Địa chỉ:**
- **TP. HCM:** 123 Đường Nguyễn Văn Linh, Quận 7
- **Hà Nội:** 456 Đường Giải Phóng, Quận Hoàng Mai

---

## 📝 Notes

- Dự án sử dụng Next.js 15 với App Router (không phải Pages Router)
- CSS Modules được sử dụng cho component styling
- Tất cả images được lưu trong `/public`
- Path alias `@/` trỏ đến root directory
- Font Inter được load từ Google Fonts trong `layout.js`

---

**Cập nhật lần cuối:** 06/01/2026  
**Version:** 0.1.0
