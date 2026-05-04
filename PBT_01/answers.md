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

## Phần C

### Câu C1 — Thiết kế cấu trúc
Bạn được giao thiết kế cấu trúc HTML cho trang chi tiết sản phẩm (giống trang sản phẩm Shopee/Tiki). Trang bao gồm:  
Header + Navigation  
Breadcrumb (Trang chủ > Điện thoại > iPhone 16)  
Khu vực ảnh sản phẩm (5 ảnh)  
Thông tin sản phẩm (tên, giá, đánh giá sao, mô tả)  
Bảng thông số kỹ thuật  
Khu vực đánh giá/bình luận  
Sidebar: Sản phẩm tương tự  
Footer  
Yêu cầu: Viết chỉ phần cấu trúc HTML (không cần nội dung thật, chỉ cần đúng thẻ và nesting). Mỗi thẻ phải có comment giải thích tại sao bạn chọn thẻ đó.  

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8"> <!-- hỗ trợ tiếng Việt -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- responsive -->
    <title>Chi tiết sản phẩm</title>
</head>

<body>

    <!-- HEADER -->
    <header> <!-- header: phần đầu trang -->
        <div class="logo">ShopTLU</div> <!-- logo -->
        
        <nav> <!-- nav: khu vực điều hướng chính -->
            <ul> <!-- ul: danh sách menu -->
                <li><a href="/">Trang chủ</a></li>
                <li><a href="/products">Sản phẩm</a></li>
            </ul>
        </nav>
    </header>

    <!-- BREADCRUMB -->
    <nav aria-label="breadcrumb"> <!-- nav: điều hướng -->
        <ol> <!-- ol: có thứ tự -->
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/phones">Điện thoại</a></li>
            <li>iPhone 16</li> <!-- item hiện tại -->
        </ol>
    </nav>

    <!-- MAIN CONTENT -->
    <main> <!-- main: nội dung chính của trang -->

        <!-- KHU VỰC SẢN PHẨM -->
        <section class="product-detail"> <!-- section: nhóm nội dung sản phẩm -->

            <!-- ẢNH SẢN PHẨM -->
            <section class="product-images"> <!-- section: nhóm ảnh -->
                <h2>Hình ảnh sản phẩm</h2> <!-- heading cho SEO -->
                
                <figure> <!-- figure: chứa ảnh -->
                    <img src="img1.jpg" alt="Ảnh 1"> <!-- alt: SEO + accessibility -->
                </figure>

                <figure>
                    <img src="img2.jpg" alt="Ảnh 2">
                </figure>

                <figure>
                    <img src="img3.jpg" alt="Ảnh 3">
                </figure>

                <figure>
                    <img src="img4.jpg" alt="Ảnh 4">
                </figure>

                <figure>
                    <img src="img5.jpg" alt="Ảnh 5">
                </figure>
            </section>

            <!-- THÔNG TIN SẢN PHẨM -->
            <article class="product-info"> <!-- article: nội dung độc lập (1 sản phẩm) -->
                
                <h1>iPhone 16 Pro</h1> <!-- h1: tiêu đề chính -->

                <p class="price">25.990.000đ</p> <!-- p: văn bản -->

                <div class="rating"> <!-- div: nhóm đánh giá -->
                    ★★★★☆ (100 đánh giá)
                </div>

                <section class="description"> <!-- section: mô tả -->
                    <h2>Mô tả sản phẩm</h2>
                    <p>...</p>
                </section>

            </article>

        </section>

        <!-- BẢNG THÔNG SỐ -->
        <section class="specs"> <!-- section: nhóm thông số -->
            <h2>Thông số kỹ thuật</h2>

            <table> <!-- table: dữ liệu dạng bảng -->
                <thead> <!-- thead: tiêu đề bảng -->
                    <tr>
                        <th>Thông số</th>
                        <th>Chi tiết</th>
                    </tr>
                </thead>

                <tbody> <!-- tbody: dữ liệu chính -->
                    <tr>
                        <td>Màn hình</td>
                        <td>...</td>
                    </tr>
                </tbody>

                <tfoot> <!-- tfoot: tổng kết -->
                    <tr>
                        <td colspan="2">Thông tin chỉ mang tính tham khảo</td>
                    </tr>
                </tfoot>
            </table>
        </section>

        <!-- ĐÁNH GIÁ / BÌNH LUẬN -->
        <section class="reviews"> <!-- section: nhóm đánh giá -->
            <h2>Đánh giá khách hàng</h2>

            <article class="review"> <!-- article: mỗi review độc lập -->
                <p>Người dùng A: Sản phẩm rất tốt</p>
            </article>

            <article class="review">
                <p>Người dùng B: Đáng mua</p>
            </article>
        </section>

    </main>

    <!-- SIDEBAR -->
    <aside> <!-- aside: nội dung phụ (sản phẩm liên quan) -->
        <h2>Sản phẩm tương tự</h2>

        <article class="related-product"> <!-- mỗi sản phẩm -->
            <p>iPhone 15</p>
        </article>

        <article class="related-product">
            <p>Samsung S24</p>
        </article>
    </aside>

    <!-- FOOTER -->
    <footer> <!-- footer: chân trang -->
        <p>© 2026 ShopTLU</p>
    </footer>

</body>
</html>
```


### Câu C2: Một đồng nghiệp nói: "Dùng ```<div>``` cho mọi thứ rồi thêm class là được, không cần semantic HTML. Tốn thời gian học thêm thẻ mới." Viết 1 đoạn phản biện (200-300 từ), phải bao gồm: Ít nhất 2 lý do kỹ thuật (SEO, Accessibility) 1 ví dụ cụ thể chứng minh semantic HTML giúp ích 1 trường hợp thực tế mà ```<div>``` vẫn phù hợp

- Ý kiến “dùng div cho mọi thứ rồi thêm class là được” nghe có vẻ nhanh nhưng về lâu dài là không hợp lý. Thứ nhất là về SEO. Công cụ tìm kiếm như Google không nhìn giao diện mà đọc cấu trúc HTML. Khi sử dụng các thẻ semantic như header, main, article, h1, Google có thể hiểu đâu là nội dung chính, đâu là tiêu đề quan trọng. Nếu chỉ dùng div, trang web sẽ thiếu ý nghĩa về mặt cấu trúc và dễ bị đánh giá thấp hơn.

- Thứ hai là về khả năng truy cập. Các công cụ hỗ trợ như screen reader cho người khiếm thị dựa vào semantic HTML để đọc trang. Ví dụ, thẻ nav giúp người dùng di chuyển nhanh giữa các menu, thẻ main giúp bỏ qua phần header để vào nội dung chính. Nếu toàn bộ chỉ là div thì trải nghiệm sử dụng sẽ kém hơn rất nhiều.

- Một ví dụ cụ thể là trang chi tiết sản phẩm. Nếu tiêu đề dùng h1 và nội dung nằm trong article, Google sẽ hiểu đây là phần quan trọng của trang và ưu tiên hiển thị khi tìm kiếm. Đồng thời người dùng sử dụng screen reader cũng dễ dàng nắm được cấu trúc nội dung.

- Tuy nhiên, div vẫn có vai trò riêng. Nó phù hợp khi cần nhóm các phần tử để phục vụ cho việc layout hoặc styling bằng CSS, đặc biệt khi không có thẻ semantic nào mô tả chính xác mục đích đó.

- Tóm lại, semantic HTML không phải là tốn thời gian mà là cách viết code rõ ràng, dễ hiểu và thân thiện hơn với cả công cụ tìm kiếm lẫn người dùng.

Link video: 
# Link video thuyết trình của phần D:https://drive.google.com/file/d/18u9hGzeRzkrSzM8MmZ1ZqhgFd8eu5kPw/view?usp=drive_link