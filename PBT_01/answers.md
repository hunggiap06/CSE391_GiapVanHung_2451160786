# Bài tập
## Phần A: Đọc hiểu
### Câu A1
>Tài liệu tham chiếu: `tuan_1_html5/01_introduction_html_universe.md`
- khi gõ https://shopee.vn vào trình duyệt, Các bước xảy ra như sau:
     - Bước 1: DNS lookup
     - Bước 2:TCP handshake
     - Bước 3: TLS handshake
     - Bước 4: HTTP request được gửi yêu cầu đi
     - Bước 5: Server response 
     - Bước 6: Parse HTML -> Dom/CSSOM
     - Bước 7: Render layout & paint

![alt text](181543.png)

### Câu A2
>Tài liệu tham chiếu:`tuan_1_html5/04_visible_part_html.md`
#### Trang web bị Google đánh giá SEO thấp bởi vì không dùng các thẻ Semantic, khiến cho các bot khó hiểu được cấu trúc và nội dung trang.
#### Các lỗi có trong Source code và sửa lại:
**Lỗi 1:** `<div class = "header">` (thẻ này làm cho Google không biết đây là phần đầu trang)
**Fix lỗi 1:** Dùng thẻ `<header>`

**Lỗi 2:** `<div class = "menu>`+`<div` (Đây không phải navigation, screen reader sẽ không đọc được)

 **Fix lỗi 2:** Dùng `<nav><ul><li><a>...</nav></ul></li></a>`

 **Lỗi 3:** `<div class="title">iPhone 16 Pro</div>` (Google không thể nhận diện được tiêu đề)

**Fix lỗi 3:** Sửa thành `<h2>iPhone 16 Pro</h2>`

 **Lỗi 4:** `<div class = "main">` lỗi này làm cho trang không thể xác định nội dung chính

 **Fix lỗi 4:** dùng thẻ `<main>`

 ### Câu A3
 > Tài liệu tham chiếu
 

