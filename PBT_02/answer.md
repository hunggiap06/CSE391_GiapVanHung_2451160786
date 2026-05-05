# Bài tập
## Phần A: Kiểm Tra đọc hiểu
### Câu A1
1. type="email" → Trường nhập dành riêng cho địa chỉ email, trình duyệt sẽ tự kiểm tra định dạng hợp lệ (phải có ký tự @)=> Thường sử dụng khi tạo tài khoản hoặc nhập email nhận thông tin đơn hàng
2. type="password" => Ô nhập mật khẩu, nội dung được che bằng dấu chấm hoặc dấu sao để bảo mật.
3. type="text" → Trường nhập văn bản thông thường, không có kiểm tra dữ liệu đặc biệt.
4. type="number" → Ô nhập số, có thể giới hạn min/max → Dùng cho số lượng sản phẩm trong giỏ hàng
5. type="tel" → Ô nhập số điện thoại, không bắt buộc format nhưng hỗ trợ mobile keypad → Dùng cho nhập số liên hệ giao hàng
6. type="date" → Ô chọn ngày dạng calendar → Dùng cho chọn ngày giao hàng hoặc đặt lịch giao
7. type="checkbox" → Ô chọn dạng tick (có/không), không validation bắt buộc → Dùng cho chọn đồng ý điều khoản hoặc chọn nhiều sản phẩm phụ
8. type="radio" → Ô chọn một trong nhiều lựa chọn → Dùng cho chọn phương thức thanh toán (COD, thẻ, ví điện tử)
9. type="file" → Cho phép upload file từ máy tính → Dùng cho upload ảnh sản phẩm hoặc ảnh xác nhận thanh toán
10. type="search" → Ô nhập tìm kiếm, có thể có nút xóa nhanh → Dùng cho thanh tìm kiếm sản phẩm trên trang E-Commerce

### Câu A2
```
<!-- Trường hợp 1 -->
<input type="text" required value="">   <!-- User để trống -->
```
Trường hợp này sẽ không submit được vì required bắt buộc phải nhập ô dữ liệu. Ô trống nên trình duyệt chặn submit và báo “Please fill out this field”.  
![TH1](screenshots\th1.png.png)

```
<!-- Trường hợp 2 -->
<input type="email" value="abc">        <!-- User gõ "abc" -->
```
Trường hợp này không submit được vì type là email nên phải có định dạng của email
![TH2](screenshots\th2.png.png)
```
<!-- Trường hợp 3 -->
<input type="number" min="1" max="10" value="15"> <!-- User gõ 15 -->
```
Không submit được vì giá trị nhập vào là 15 lớn hơn max=10
![TH3](screenshots\th3.png.png)
```
<!-- Trường hợp 4 -->
<input type="text" pattern="[0-9]{10}" value="abc123"> <!-- User gõ "abc123" -->
```
Không submit được vì pattern yêu cầu nhập đủ 10 kí tự và kí tự là số từ 0->9  
![TH4](screenshots\th4.png.png)
```
<!-- Trường hợp 5 -->
<input type="password" minlength="8" value="123">  <!-- User gõ "123" -->

```
Không submit được vì yêu cầu tối thiểu 8 kí tự
![TH5](screenshots\th5.png.png)

### Câu A3
1. Vì sao `<label for="email">` quan trọng với screen reader?

`<label>` giúp liên kết tên mô tả với ô nhập liệu.

Khi thuộc tính for trùng với id của input:
```html
<label for="email">Email</label>
<input id="email" type="email">
```

2. Khi nào dùng ```<fieldset>``` + ```<legend>```?  
Dùng khi nhóm các input liên quan đến nhau  
Ví dụ:  
```html
<fieldset>
  <legend>Giới tính</legend>

  <input type="radio" id="male" name="gender">
  <label for="male">Nam</label>

  <input type="radio" id="female" name="gender">
  <label for="female">Nữ</label>
</fieldset>
```
3. aria-label dùng khi nào? Vì sao không nên lạm dụng?  
Dùng khi không có label hiển thị  
Không nên dùng khi đã có ```<label>``` vì aria-label sẽ ghi đè nội dung mà screen reader đọc,Có thể gây hiểu nhầm

### Câu A4: 
1. Thuộc tính loading="lazy" trên thẻ `<img>`

**Khái niệm:**
 `loading="lazy"` dùng để trì hoãn việc tải ảnh cho đến khi ảnh gần xuất hiện trong viewport (màn hình người dùng).

**Nó cải thiện gì?**
 Giúp trang web hiển thị nhanh hơn khi tải lần đầu
 Giảm lượng dữ liệu phải tải ngay từ đầu
 Tăng hiệu năng, đặc biệt với trang có nhiều ảnh (ví dụ: trang thương mại điện tử)

**Khi nào KHÔNG nên dùng?**
 Ảnh ở phía trên cùng (above-the-fold), vì cần hiển thị ngay
 Logo hoặc banner chính cần xuất hiện tức thời
 Những ảnh quan trọng ảnh hưởng trực tiếp đến trải nghiệm ban đầu của người dùng
---

 2. Tại sao nên cung cấp nhiều `<source>` trong thẻ `<video>`?

**Lý do:**
 Không phải trình duyệt nào cũng hỗ trợ cùng một định dạng video
 Đảm bảo video có thể phát trên nhiều trình duyệt và thiết bị khác nhau
 Trình duyệt sẽ tự chọn định dạng mà nó hỗ trợ

**Ví dụ:**
```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <source src="video.ogg" type="video/ogg">
</video>
```

Ít nhất 3 format video phổ biến:    
MP4 (phổ biến nhất, hỗ trợ rộng)
WebM (tối ưu cho web, mã nguồn mở)
OGG (ít phổ biến hơn nhưng vẫn được hỗ trợ) 

3. thuộc tính alt trên ```<img>```
- Thuộc tính alt cung cấp mô tả thay thế cho hình ảnh trong các trường hợp:
    - người dùng sử dụng screen reader
    - hình ảnh tải lỗi
    - hỗ trợ tối ưu SEO
    alt cho các trường hợp:  
    ```<img src="iphone16.jpg" alt="iPhone 16 màu đen, thiết kế hiện đại với camera kép">```
    ```<img src="decor.png" alt="trang trí phòng">```
    ```<img src="chart.png" alt="Biểu đồ doanh thu quý 1 năm 2026 tăng dần từ tháng 1 đến tháng 3">```
### Câu A5
***Cách 1 — dùng <img>***
`<img src="product.jpg" alt="iPhone">`

- Dùng <img> đơn lẻ khi:

  - Ảnh chỉ mang tính minh họa
  - Không cần chú thích riêng
  - Nội dung ảnh đã được mô tả trong text xung quanh
- Ví dụ 1: Logo website

```
  <header>
    <img src="logo.png" alt="Logo cửa hàng">
  </header> ```

→ Logo chỉ để nhận diện thương hiệu.
- Ví dụ 2 — Icon minh họa bài viết
```
```
<p>
    <img src="icon-check.png" alt="check"> Thanh toán nhanh chóng
</p>
```
→ Ảnh chỉ hỗ trợ nội dung văn bản.

***Cách 2 — dùng `<figure> `+ `<figcaption>`***
```
<figure>
    <img src="product.jpg" alt="iPhone 16 Pro Max 256GB Titan">
    <figcaption>iPhone 16 Pro Max — 25.990.000đ</figcaption>
</figure>
```
Dùng `<figure>` khi:

Ảnh là nội dung quan trọng
Cần chú thích riêng
Ảnh + caption tạo thành một khối nội dung độc lập
Có thể được tham chiếu trong bài viết (Hình 1, Hình 2…)

- Ví dụ 1 — Sản phẩm bán hàng
```
<figure>
    <img src="laptop.jpg" alt="MacBook Air M3">
    <figcaption>MacBook Air M3 — 28.990.000đ</figcaption>
</figure>
```
- Ví dụ 2 — Ảnh minh họa trong blog
```
<figure>
    <img src="sunset.jpg" alt="Hoàng hôn Đà Nẵng">
    <figcaption>Hình 1: Hoàng hôn tại biển Mỹ Khê</figcaption>
</figure>
```

## Phần B
### Câu B1
***Tại sao HTML không validate confirm password ?***
- HTML chỉ kiểm tra giá trị của từng input riêng lẻ.
Nó không thể so sánh giá trị giữa hai input khác nhau
(password và confirm password).
- Việc kiểm tra hai mật khẩu trùng nhau cần JavaScript
hoặc validation phía server.

## Phần C
### Câu C1 — Debug Form

Lỗi 1: Dòng 2 — Input "Tên" không có ```<label for="...">```, vi phạm accessibility  
Sửa:
```html
<label for="name">Tên:</label>
<input type="text" id="name" name="name" required>
```


Lỗi 2: Dòng 4 — Input email thiếu label và name, chỉ dùng placeholder (không tốt cho accessibility)  
Sửa:
```html
<label for="email">Email:</label>
<input type="email" id="email" name="email" required>
```


Lỗi 3: Dòng 6–7 — Hai input password không có label và không phân biệt rõ ràng  
Sửa:
```html
<label for="password">Mật khẩu:</label>
<input type="password" id="password" name="password" required>

<label for="confirm-password">Nhập lại mật khẩu:</label>
<input type="password" id="confirm-password" name="confirm_password" required>
```


Lỗi 4: Dòng 9 — Input "Phone" dùng type="text" không đúng semantic  
Sửa:
```html
<label for="phone">Phone:</label>
<input type="tel" id="phone" name="phone" required>
```


Lỗi 5: Dòng 9 — Không nên dùng value cố định cho số điện thoại  
Sửa:
```html
<input type="tel" id="phone" name="phone" placeholder="Nhập số điện thoại" required>
```


Lỗi 6: Dòng 11 — ```<select>``` không có label  
Sửa:
```html
<label for="city">Thành phố:</label>
<select id="city" name="city" required>
    <option value="">--Chọn--</option>
    <option value="hn">Hà Nội</option>
    <option value="hcm">TP.HCM</option>
</select>
```


Lỗi 7: Dòng 16 — Checkbox "đồng ý điều khoản" thiếu input checkbox  
Sửa:
```html
<input type="checkbox" id="terms" name="terms" required>
<label for="terms">Tôi đồng ý điều khoản</label>
```


Lỗi 8: Dòng 19 — ```<form>``` thiếu action và method (best practice)  
Sửa:
```html
<form action="/submit" method="post">
```


Form hoàn chỉnh sau khi sửa:

```html
<form action="/submit" method="post">
    <label for="name">Tên:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="password">Mật khẩu:</label>
    <input type="password" id="password" name="password" required>

    <label for="confirm-password">Nhập lại mật khẩu:</label>
    <input type="password" id="confirm-password" name="confirm_password" required>

    <label for="phone">Phone:</label>
    <input type="tel" id="phone" name="phone" placeholder="Nhập số điện thoại" required>

    <label for="city">Thành phố:</label>
    <select id="city" name="city" required>
        <option value="">--Chọn--</option>
        <option value="hn">Hà Nội</option>
        <option value="hcm">TP.HCM</option>
    </select>

    <input type="checkbox" id="terms" name="terms" required>
    <label for="terms">Tôi đồng ý điều khoản</label>

    <input type="submit" value="Gửi">
</form>
```

## Câu C2 — Thiết kế chiến lược Validation

1. Pattern regex

CMND/CCCD (đúng 12 chữ số):
```html
<input type="text" name="cccd" pattern="^\d{12}$" required>
```

Số tài khoản (10–15 chữ số):
```html
<input type="text" name="account" pattern="^\d{10,15}$" required>
```

Email:
```html
<input type="email" name="email" required>
```

PIN (6 chữ số, không hiển thị):
```html
<input type="password" name="pin" pattern="^\d{6}$" required>
```
2. HTML5 validation có đủ an toàn cho ứng dụng ngân hàng không?
- Không đủ an toàn.

- Giải thích:
  - HTML5 validation chỉ hoạt động trên trình duyệt phía người dùng nên không thể đảm bảo dữ liệu gửi lên là hợp lệ.

  - Người dùng hoặc kẻ tấn công có thể:

  - vô hiệu hóa validation của trình duyệt,
chỉnh sửa mã HTML bằng Developer Tools,
hoặc gửi request trực tiếp tới server mà không đi qua form.

  - Vì vậy, HTML5 validation chỉ giúp cải thiện trải nghiệm nhập liệu, chứ không phải cơ chế bảo mật cho hệ thống ngân hàng.
=> Hệ thống cần kiểm tra lại dữ liệu ở backend trước khi xử lý.

3. Ba loại validation HTML5 không thực hiện được (cần JavaScript)
- Kiểm tra sự liên quan giữa nhiều input
Ví dụ: mật khẩu nhập lại phải trùng với mật khẩu ban đầu.
- Xác thực dữ liệu với hệ thống
Ví dụ: kiểm tra số CCCD hoặc email đã tồn tại trong database chưa.
- Validation phụ thuộc điều kiện lựa chọn
Ví dụ: chọn loại tài khoản doanh nghiệp thì phải nhập thêm mã số thuế.
4. Hai rủi ro bảo mật nếu chỉ kiểm tra ở frontend
- Nhận dữ liệu nguy hiểm hoặc sai cấu trúc
Người dùng có thể chèn mã độc hoặc dữ liệu bất thường gây lỗi hệ thống hoặc tấn công XSS.
- Bỏ qua toàn bộ bước kiểm tra form
Hacker gửi request trực tiếp đến server với thông tin giả → có thể làm sai lệch dữ liệu hoặc khai thác lỗ hổng bảo mật.

=> Kết luận: Validation phía client chỉ mang tính hỗ trợ, còn việc kiểm tra cuối cùng luôn phải thực hiện ở server-side.

