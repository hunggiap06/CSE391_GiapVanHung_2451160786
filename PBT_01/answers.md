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
     
![Ảnh chụp màn hình tab network](./screenshots/Cau1_A1.png)

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
┌─────────────────────────────┐
│         Hộp 1 (div)         │  + `<div>`:  block,full width
└─────────────────────────────┘
 Text A │ Text B                 + inline: cùng dòng
┌─────────────────────────────┐
│         Hộp 2 (div)         │  + `<div>`: block,xuống dòng mới
└─────────────────────────────┘
 Text C │ Text D                 + `<span>` và strong đều inline, Text D in đậm
┌─────────────────────────────┐
│         Hộp 3 (div)         │  + `<div>`: block,dòng riêng
└─────────────────────────────┘

### Câu A4
>Tài liệu tham chiếu: `tuan_1_html5/05_tables_hyperlinks.md`

- `<thead></thead>` (phần đầu của bảng): tiêu đề cột, dùng<th>, in đậm, screen reader đọc trước
- `<tbody></tbody>`: (Phần thân bảng): dữ liệu chính- có nhiều `<tbody>`trong 1 bảng
- `<tfoot>`: (Phần cuối bảng): Tổng kết , trình duyệt render sau cùng 

** Tại sao không nên dùng table để layout **
1. Sai ngữ nghĩa(semantic)
  - `<table></table>`: Sinh ra để chứa dữ liệu bảng ,Không phải để sắp xếp giao diện
2. Cứng ngắt ,không responsive 
- Table mặc định có chiều rộng cố định theo nội dung. Trên màn hình điện thoại, layout table vỡ hoặc tràn ngang — rất khó fix.
3. Code rất khó để bảo trì
- Để layout bằng table, bạn phải lồng `<table>` trong `<table>` (nested tables). Thêm một cột = sửa hàng chục dòng HTML. CSS Grid làm điều tương tự chỉ với vài dòng CSS, dễ đọc và dễ sửa hơn nhiều.
 
## Phần B
### Liệt kê lỗi của bài B3
Lỗi 1: Dòng 1 — <!DOCTYPE> sai chuẩn — Sửa thành `<!DOCTYPE html> `
Lỗi 2: Dòng 3 — Thiếu đóng thẻ `<title>` — Thêm `</title>`  
Lỗi 3: Dòng 4 — charset viết sai "utf8" — Sửa thành "UTF-8"  
Lỗi 4: Thiếu meta viewport — Thêm:  
`<meta name="viewport" content="width=device-width, initial-scale=1.0">`  
Lỗi 5: Dòng 8 — `<h1>` không đóng đúng — Sửa thành `<h1>...</h1>`
Lỗi 6: Dòng 12 — Thẻ `<a>` không đóng — Sửa thành `</a>`  
Lỗi 7: href="home" sai semantic link nội bộ — Sửa thành href="#home"  
Lỗi 8: Dòng 19 — `<img>` thiếu dấu ngoặc kép và alt — Sửa:  
`<img src="iphone.jpg" alt="iPhone 16 Pro">`  
Lỗi 9: Dòng 21 — Sai thứ tự đóng thẻ ```<b>``` — Sửa thành:  
`<strong>25.990.000đ</strong>`  
Lỗi 10: Không dùng thẻ semantic cho ảnh — Bọc bằng:  
`<figure> + <figcaption>`
Lỗi 11: Bảng thiếu `<thead>` và `<tbody>` — Thêm vào  
Lỗi 12: Dùng `<td>` thay vì `<th>` cho header — Sửa thành <th>  
Lỗi 13: Có 2 thẻ `<main` — Sai semantic — Đổi cái thứ 2 thành `<aside>`  
Lỗi 14: Dòng cuối — `<p>` không đóng — Thêm `</p>`  
Lỗi 15: Thiếu thuộc tính lang trong` <html>` — Thêm lang="vi"

### Bài B4: Phân tích Shopee.com
1. 
Thẻ Senmatic header
![Thẻ header](screenshots\theSemanticHeader.png.png)

Thẻ Senmatic section
![Thẻ section](screenshots\TheSemanticSection.png.png)

Thẻ Senmatic footer
![Thẻ footer](screenshots\TheSemanticFooter.png.png)

2. 
Thẻ form 
![Thẻ form](screenshots\TheForm.png.png)
