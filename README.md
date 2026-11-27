# Thư viện Nghiệp vụ Viettel Telecom – Landing page

Website tĩnh giới thiệu Cổng Tri thức / Thư viện Nghiệp vụ (HTML + CSS + JS thuần, không cần build).

## Cấu trúc

```
index.html        Trang chính
404.html          Trang báo lỗi đường dẫn
config.js         Tên trợ lý AI và các đường link nút bấm  ← sửa ở đây
assets/style.css  Kiểu chữ, hiển thị trên điện thoại
assets/main.js    Gắn tên trợ lý, gắn link, thông báo "Sắp ra mắt"
assets/favicon.svg
vercel.json       Cấu hình Vercel (header bảo mật, chặn công cụ tìm kiếm)
robots.txt        Chặn công cụ tìm kiếm (trang nội bộ)
```

## Xem thử trên máy

Mở thẳng `index.html` bằng trình duyệt, hoặc chạy `npx serve .` rồi mở http://localhost:3000.

## Đưa lên GitHub

1. Tạo repository mới trên GitHub (nên để **Private**), ví dụ `thu-vien-nghiep-vu-viettel`.
2. Tải toàn bộ các file trong thư mục này lên (Add file → Upload files), hoặc dùng lệnh:

```bash
git init
git add .
git commit -m "Landing page Thư viện Nghiệp vụ Viettel"
git branch -M main
git remote add origin https://github.com/<tai-khoan>/thu-vien-nghiep-vu-viettel.git
git push -u origin main
```

## Dựng website trên Vercel

1. Vào https://vercel.com → **Add New… → Project** → chọn repository vừa tạo (Import).
2. Framework Preset: **Other**. Build Command: để trống. Output Directory: để trống (thư mục gốc).
3. Bấm **Deploy**. Sau khoảng 1 phút sẽ có link dạng `https://thu-vien-nghiep-vu-viettel.vercel.app`.
4. Mỗi lần sửa và push lên nhánh `main`, Vercel tự dựng lại.

## Chỉnh nội dung thường gặp

- **Đổi tên trợ lý** (Tammi → KIRA): sửa `assistantName` trong `config.js`.
- **Gắn link thật cho các nút**: điền `links.web`, `links.mbccs`, `links.zalo` trong `config.js`. Để trống thì nút hiện "Sắp ra mắt".
- **Cho phép Google tìm thấy trang**: xoá thẻ `robots` trong `index.html`, dòng `X-Robots-Tag` trong `vercel.json` và file `robots.txt`.

## Lưu ý

Số liệu trên trang (kho 198, SLA, lộ trình, tham chiếu quốc tế) lấy từ đề án nội bộ, cần được đơn vị chủ trì xác nhận trước khi công bố rộng.
