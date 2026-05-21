# PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)

# Câu A1 (5đ) — Viewport & Mobile-First

## 1. Thẻ `<meta viewport>` chuẩn

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## 2. Giải thích từng thuộc tính

### `width=device-width`
- Đặt chiều rộng của trang web bằng đúng chiều rộng màn hình thiết bị.
- Ví dụ:
  - iPhone có màn hình rộng 390px → website cũng được tính là 390px.

### `initial-scale=1.0`
- Thiết lập mức zoom ban đầu là 100%.
- Trang web sẽ không bị tự động zoom quá to hoặc quá nhỏ khi mở.

---

## 3. Nếu thiếu thẻ viewport thì chuyện gì xảy ra?

Nếu KHÔNG có thẻ viewport:

- iPhone và trình duyệt mobile sẽ giả lập website như màn hình desktop (~980px).
- Website sẽ bị thu nhỏ toàn bộ để nhét vừa màn hình điện thoại.
- Chữ rất nhỏ.
- Người dùng phải zoom mới đọc được.

Ví dụ:
- Một trang desktop rộng 980px trên điện thoại 390px sẽ bị co nhỏ lại.

---

## 4. Mobile-First vs Desktop-First

| Mobile-First | Desktop-First |
|---|---|
| Viết CSS cho mobile trước | Viết CSS cho desktop trước |
| Dùng `min-width` | Dùng `max-width` |
| Mở rộng dần cho màn hình lớn | Thu nhỏ dần cho màn hình nhỏ |
| Hiệu năng tốt hơn trên mobile | Dễ dư CSS |
| Được khuyên dùng hiện nay | Ít được khuyên hơn |

---

## 5. Ví dụ CSS Mobile-First (Breakpoint 768px)

```css
/* Mobile trước */
.container {
    width: 100%;
    background: lightblue;
}

/* Tablet/Desktop */
@media (min-width: 768px) {
    .container {
        width: 750px;
        background: lightgreen;
    }
}
```

### Ý nghĩa
- Mặc định áp dụng cho mobile.
- Khi màn hình >= 768px thì đổi giao diện.

---

## 6. Ví dụ CSS Desktop-First

```css
/* Desktop trước */
.container {
    width: 750px;
    background: lightgreen;
}

/* Mobile */
@media (max-width: 767px) {
    .container {
        width: 100%;
        background: lightblue;
    }
}
```

---

## 7. Tại sao Mobile-First được khuyên dùng?

### Vì:
- Người dùng mobile hiện nay nhiều hơn desktop.
- CSS nhẹ hơn cho điện thoại.
- Tối ưu hiệu năng.
- Responsive dễ mở rộng hơn.
- Phù hợp chuẩn hiện đại của Bootstrap và nhiều framework khác.

---
# Câu A2 (5đ) — Breakpoints

## Breakpoints chuẩn (Bootstrap)

| Breakpoint | Kích thước | Thiết bị đại diện | Ví dụ lưới sản phẩm |
|---|---|---|---|
| Extra Small | `<576px` | Điện thoại nhỏ | 1 cột |
| Small (sm) | `>=576px` | Điện thoại lớn | 2 cột |
| Medium (md) | `>=768px` | Tablet | 2–3 cột |
| Large (lg) | `>=992px` | Laptop | 3–4 cột |
| Extra Large (xl) | `>=1200px` | Desktop lớn | 4 cột |
| XXL | `>=1400px` | Màn hình cực lớn | 5–6 cột |

---

## Ví dụ Responsive Grid

### Mobile
```css
grid-template-columns: 1fr;
```

### Tablet
```css
grid-template-columns: repeat(2, 1fr);
```

### Desktop
```css
grid-template-columns: repeat(4, 1fr);
```

---
# Câu A3 (5đ) — Media Queries

## CSS đề bài

```css
.container { width: 100%; padding: 10px; }

@media (min-width: 576px) {
    .container { width: 540px; }
}

@media (min-width: 768px) {
    .container { width: 720px; }
}

@media (min-width: 992px) {
    .container { width: 960px; }
}

@media (min-width: 1200px) {
    .container { width: 1140px; }
}
```

---

## Bảng kết quả

| Chiều rộng màn hình | `.container width` |
|---|---|
| 375px (iPhone SE) | 100% |
| 600px | 540px |
| 800px | 720px |
| 1000px | 960px |
| 1400px | 1140px |

---

## Giải thích

### 375px
- Chưa đạt `576px`
- Dùng:
```css
width: 100%;
```

### 600px
- Đạt `576px`
- Width = `540px`

### 800px
- Đạt `768px`
- Width = `720px`

### 1000px
- Đạt `992px`
- Width = `960px`

### 1400px
- Đạt `1200px`
- Width = `1140px`

---

# Câu A4 (5đ) — SCSS Basics

## 1. Variables (Biến)

### Dùng để:
- Lưu màu sắc
- Font
- Kích thước
- Giá trị dùng nhiều lần

### Ví dụ

```scss
$primary-color: blue;
$padding-size: 20px;

.button {
    background: $primary-color;
    padding: $padding-size;
}
```

### Lợi ích
- Dễ sửa toàn bộ giao diện.
- Chỉ cần đổi 1 chỗ.

---

## 2. Nesting (CSS lồng nhau)

### Ví dụ

```scss
.navbar {
    background: black;

    ul {
        list-style: none;

        li {
            display: inline-block;

            a {
                color: white;
            }
        }
    }
}
```

### Sau khi compile thành CSS

```css
.navbar {
    background: black;
}

.navbar ul {
    list-style: none;
}

.navbar ul li {
    display: inline-block;
}

.navbar ul li a {
    color: white;
}
```

### Lợi ích
- Code gọn hơn.
- Dễ đọc hơn.
- Giống cấu trúc HTML.

---

## 3. Mixins (`@mixin`, `@include`)

### Dùng để:
Tái sử dụng nhiều đoạn CSS.

### Ví dụ

```scss
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    @include flex-center;
    height: 200px;
}
```

### CSS tạo ra

```css
.box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
}
```

### Lợi ích
- Tránh lặp code.
- Viết nhanh hơn.

---

## 4. `@extend` / Inheritance

### Dùng để:
Kế thừa CSS từ class khác.

### Ví dụ

```scss
.button {
    padding: 10px;
    border-radius: 5px;
}

.success-button {
    @extend .button;
    background: green;
}
```

### CSS sau compile

```css
.button, .success-button {
    padding: 10px;
    border-radius: 5px;
}

.success-button {
    background: green;
}
```

### Lợi ích
- Tái sử dụng style.
- Giảm lặp CSS.

---

# 5. Tại sao trình duyệt KHÔNG đọc được `.scss`?

Vì:
- `.scss` không phải CSS chuẩn.
- Nó là ngôn ngữ mở rộng của CSS.
- Trình duyệt chỉ hiểu `.css`.

---

# 6. Cần bước gì để chuyển SCSS → CSS?

Cần dùng trình biên dịch (SCSS Compiler).

Ví dụ:
- Sass CLI
- Live Sass Compiler (VS Code)
- Webpack
- Vite

---

## Ví dụ compile bằng Sass

```bash
sass style.scss style.css
```

### Kết quả
- File `style.scss`
→ được chuyển thành
- File `style.css`

Trình duyệt sẽ đọc file `.css`.
# Phần C
# BÁO CÁO PHÂN TÍCH RESPONSIVE TRANG WEB THỰC (C1 - 10đ)

**Đối tượng phân tích:** Shopee.vn

---

## 1. Hình ảnh minh họa (Screenshots)



## 2. Bảng phân tích chi tiết

| Đặc điểm | Mobile (375px) | Tablet (768px) | Desktop (1440px) |
| :--- | :--- | :--- | :--- |
| **Navigation** | Sử dụng **Bottom Navigation** (thanh điều hướng dưới cùng) và biểu tượng Chat/Giỏ hàng tối giản ở phía trên. | Thanh tìm kiếm được mở rộng hơn, menu điều hướng phía trên thu gọn lại để tiết kiệm không gian. | Thanh **Top-bar đầy đủ**: Hiển thị Kênh người bán, Kết nối, Tải ứng dụng, Thông báo, Giỏ hàng, Tài khoản. |
| **Lưới Content** | Chia làm **2 cột** sản phẩm để tối ưu diện tích hiển thị theo chiều dọc của điện thoại. | Tăng lên thành **3 đến 4 cột** sản phẩm tùy theo danh mục và độ rộng màn hình. | Hiển thị đầy đủ từ **5 đến 6 cột** sản phẩm trên một hàng ngang. |
| **Phần tử bị ẩn** | Các banner phụ bên cánh, danh sách gợi ý dài và phần chân trang (footer) chi tiết bị ẩn hoặc gom vào menu rút gọn. | Các mục lọc sản phẩm (Sidebar Filter) bên trái thường bị ẩn và thay thế bằng nút bấm "Bộ lọc". | **Hiển thị tất cả**: Bộ lọc bên trái cố định, banner sidebar hai bên, chân trang hiển thị đầy đủ 5 cột thông tin. |
| **Font Size** | Giảm nhẹ (thường từ **12px - 13px**) để tránh tràn dòng và phù hợp với khoảng cách nhìn gần. | Kích thước trung bình (khoảng **14px**). | Kích thước chuẩn (**14px - 16px**) giúp đọc nội dung rõ ràng trên màn hình lớn. |

---

## 3. Phân tích Media Queries (DevTools)

Dưới đây là các quy tắc Media Queries quan trọng mà trang web sử dụng để thay đổi giao diện:

*   **@media (max-width: 767px):** Được dùng để định nghĩa giao diện Mobile. Tại đây, Shopee ẩn thanh Sidebar điều hướng và chuyển lưới sản phẩm về dạng 2 cột (`width: 50%`).
*   **@media (min-width: 1200px):** Được dùng cho màn hình Desktop. Shopee thiết lập độ rộng cố định cho container chính (khoảng 1200px) và căn giữa bằng `margin: 0 auto` để nội dung không bị trải quá rộng.

>