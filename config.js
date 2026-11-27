/*
 * Cấu hình nhanh cho landing page – sửa file này, không cần đụng vào index.html.
 * Để trống một link ("") thì nút đó hiện thông báo "Sắp ra mắt" thay vì mở trang.
 */
window.SITE_CONFIG = {
  // Tên trợ lý AI hiển thị trên toàn trang (ví dụ: "Tammi" hoặc "KIRA")
  assistantName: "Tammi",

  links: {
    // Nút "Vào thư viện", "Xem bản web", "Vào bản web" và ô "Web"
    web: "",
    // Nút "Mở trên mBCCS" và ô "mBCCS" (deep link hoặc trang tải app)
    mbccs: "",
    // Ô "Zalo OA" dành cho đại lý, điểm bán
    zalo: ""
  }
};
