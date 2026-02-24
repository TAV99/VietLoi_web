# 📄 BIÊN BẢN BÀN GIAO & TÀI LIỆU HƯỚNG DẪN VẬN HÀNH

**Dự án:** Website Thu Mua Phế Liệu Việt Lợi  
**Tên miền:** https://phelieuvietloi.com  
**Ngày bàn giao:** 25/02/2026  
**Đơn vị thực hiện:** TAV99 Development Team  

---

## PHẦN 1: TỔNG QUAN HỆ THỐNG

Website được xây dựng trên nền tảng công nghệ **Next.js 15** (phiên bản mới nhất), tập trung giải quyết hai bài toán cốt lõi của ngành phế liệu: **Tốc độ truy cập tức thì** và **Tối ưu hóa tỷ lệ gọi điện (Chuyển đổi)**. Hệ thống được thiết kế để vận hành ổn định, bảo mật cao và cực kỳ dễ sử dụng cho người không chuyên về công nghệ.

### Thông Tin Dự Án

| Thông tin | Chi tiết |
|-----------|----------|
| Tên dự án | VietLoi Web |
| Loại dự án | Website One-Page |
| Công nghệ | Next.js 15, React 18, CSS Modules |
| Repository | https://github.com/TAV99/VietLoi_web |
| Trạng thái | ✅ Hoàn thành & Bàn giao |

---

## PHẦN 2: CHIẾN LƯỢC TĂNG TRƯỞNG & TÍNH NĂNG ƯU VIỆT

Không chỉ là một trang web giới thiệu, hệ thống này là một **cỗ máy bán hàng tự động** với các tính năng đánh mạnh vào tâm lý người dùng:

### 1. Chiến lược "Bám đuổi & Chuyển đổi" (Conversion Rate Optimization)

Giao diện được lập trình dựa trên phân tích hành vi người dùng di động để tối đa hóa số lượng cuộc gọi về công ty:

- **Nút Gọi Nổi (Floating Button) - "Salesman 24/7":**
  - *Vị trí vàng:* Nút Gọi & Zalo được ghim cố định ở góc dưới bên phải - vị trí thuận tiện nhất cho ngón tay cái khi cầm điện thoại một tay.
  - *Hiệu ứng thị giác:* Nút không đứng yên mà có hiệu ứng toả sóng (pulsing) liên tục, âm thầm thôi thúc khách hàng bấm vào ngay khi phát sinh nhu cầu.
  - *Luôn hiện diện:* Dù khách hàng cuộn trang đi đâu, nút gọi vẫn luôn neo lại, đảm bảo khách không cần lội ngược lên đầu trang để tìm số điện thoại.

- **Bảng Giá "Tự Động Mời Chào" (Auto-Expand):**
  - Khi khách hàng bấm vào menu hoặc cuộn tới khu vực Bảng giá, danh mục tương ứng sẽ tự động trượt mở ra một cách mượt mà.
  - Hành động này giống như một lời mời: "Mời xem giá chi tiết", giữ chân khách hàng lại xem giá và tăng khả năng chốt đơn.

- **Trải nghiệm mượt mà (Smooth Scroll):**
  - Mọi thao tác cuộn, chuyển trang đều được xử lý giảm xóc, tạo cảm giác cao cấp, uy tín cho thương hiệu.

### 2. Quản trị thông minh: Cập nhật giá bằng Google Sheets

- **Đơn giản hóa:** Loại bỏ hoàn toàn trang quản trị phức tạp. Người quản lý chỉ cần mở file Google Sheets (Excel Online) trên điện thoại hoặc máy tính để sửa giá.
- **Tiện lợi:** Sửa giá phế liệu nhanh như sửa tin nhắn, có thể giao cho nhân viên văn phòng làm mà không cần đào tạo kỹ thuật.

### 3. Tốc độ "Thần tốc" & Chuẩn SEO

- **Công nghệ ISR (Incremental Static Regeneration):** Web tải nhanh dưới 0.5 giây (như mở một tấm ảnh), giúp giữ chân khách hàng thiếu kiên nhẫn.
- **SEO Tự động:** Hệ thống tự động tạo Sơ đồ trang (Sitemap) và khai báo với Google, giúp các từ khóa như "giá sắt vụn", "thu mua đồng" dễ dàng lên Top tìm kiếm.
- **Bảo mật:** Chạy trên giao thức HTTPS (ổ khóa xanh) an toàn tuyệt đối.

### 4. Tối ưu hóa Địa phương (Local SEO)

- **Bản đồ chính xác:** Footer tích hợp bản đồ GPS định vị chính xác kho bãi tại TP. Hồ Chí Minh.
- **Thông tin nhất quán:** Đã lọc và hiển thị thống nhất địa chỉ trụ sở chính, tránh gây nhiễu thông tin cho khách hàng.

---

## PHẦN 3: HƯỚNG DẪN VẬN HÀNH

Quy trình cập nhật giá trên website được thực hiện qua **3 bước đơn giản:**

### Bước 1: Truy cập File Quản lý
- Mở đường link Google Sheets đã được chia sẻ (Khuyến khích cài app Google Sheets trên điện thoại để thao tác nhanh hơn).

### Bước 2: Thay đổi Giá
- Tìm dòng tên loại phế liệu cần sửa (Sắt, Đồng, Nhôm...).
- Nhập giá mới vào ô giá tiền.
- Hệ thống Google tự động lưu lại (không cần bấm nút Save).

### Bước 3: Đồng bộ lên Website
- **Cơ chế:** Website sẽ tự động cập nhật dữ liệu mới sau mỗi **60 phút** (1 tiếng) để đảm bảo tốc độ tải trang luôn nhanh nhất.
- **Lưu ý:** Sau khi sửa giá trong file Excel, vui lòng đợi khoảng 1 tiếng để giá mới hiển thị trên web. Đây là tính năng kỹ thuật giúp website chịu tải được hàng ngàn người truy cập cùng lúc mà không bị sập.

---

## PHẦN 4: THÔNG SỐ KỸ THUẬT (Dành cho bộ phận IT/Lưu trữ)

Dưới đây là các thông tin kỹ thuật chi tiết của dự án để lưu hồ sơ:

| Hạng mục | Chi tiết | Ghi chú |
|-----------|----------|---------|
| **Framework** | Next.js 15 (App Router) | Công nghệ React mới nhất |
| **Database** | Google Sheets API | Headless CMS (Không tốn phí database) |
| **Hosting** | Vercel Edge Network | Hạ tầng máy chủ toàn cầu |
| **Domain** | phelieuvietloi.com | Đã cấu hình Redirect www/non-www |
| **Styling** | CSS Modules | Thiết kế Responsive Mobile-First |
| **SEO Tech** | Dynamic Sitemap, JSON-LD Schema | Tối ưu Rich Snippets |
| **Security** | SSL/TLS (HTTPS) | Chứng chỉ bảo mật tự động gia hạn |

### Cấu Trúc Mã Nguồn

```
VietLoi_web/
├── app/                    # Next.js App Router
├── components/            # 16 React Components
├── lib/                   # Utilities (getPricing.js)
├── public/               # Static assets
├── package.json
├── next.config.js
└── README.md             # Tài liệu kỹ thuật
```

---

## PHẦN 5: DANH MỤC PHẾ LIỆU THU MUA

Website hỗ trợ cập nhật giá cho các loại phế liệu:

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

---

## PHẦN 6: THÔNG TIN LIÊN HỆ

| Thông tin | Chi tiết |
|-----------|----------|
| **Tên công ty** | Công Ty TNHH KD TM DV Việt Lợi |
| **Hotline** | 0979065588 |
| **Email** | ducongthao168@gmail.com |
| **MST** | 3702541855 |
| **Địa chỉ** | Số 10/3, khu phố Bình Phước B, Phường An Phú, TP Hồ Chí Minh |

---

## CAM KẾT BÀN GIAO

1. ✅ **Mã nguồn (Source Code):** Bàn giao toàn bộ quyền sở hữu mã nguồn.
2. ✅ **Tài khoản:** Bàn giao quyền quản trị Hosting (Vercel) và Domain.
3. ✅ **Hỗ trợ:** Đơn vị phát triển cam kết bảo hành kỹ thuật, đảm bảo website hoạt động ổn định với các tính năng đã mô tả.
4. ✅ **Tài liệu:** Bàn giao đầy đủ README.md và file này.

---

## TÀI LIỆU ĐÍNH KÈM

- 📄 README.md - Tài liệu kỹ thuật chi tiết
- 📂 Source code trên GitHub: https://github.com/TAV99/VietLoi_web
- 📂 Tài liệu trên Drive: https://drive.google.com/drive/folders/1BdLGjsVygG426ywZlv3aK1KgK9q63JwO

---

**Ngày bàn giao:** 25/02/2026

**Đại diện đơn vị thực hiện:**  
TAV99 Development Team

**(Ký tên xác nhận bàn giao)**

---
