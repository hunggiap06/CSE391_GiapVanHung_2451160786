# PHẦN A — KIỂM TRA ĐỌC HIỂU

## Câu A1 — 5 Loại Positioning

| Position | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí (Mốc tọa độ) | Cuộn theo trang? | Use cases (Khi nào dùng?) |
| :--- | :--- | :--- | :--- | :--- |
| **static** | Có | Theo luồng tài liệu HTML mặc định (Normal flow). | Có | Mặc định cho mọi phần tử. Dùng khi muốn các thành phần hiển thị tuần tự bình thường từ trên xuống dưới. |
| **relative** | Có (Vẫn chiếm chỗ ở vị trí cũ trong luồng) | Vị trí ban đầu (gốc) của chính nó. | Có | Dịch chuyển nhẹ phần tử mà không làm ảnh hưởng xung quanh; hoặc làm "mỏ neo" (thẻ cha) cho thẻ con sử dụng `absolute`. |
| **absolute** | Không (Bị rút hoàn toàn khỏi luồng) | Thẻ tổ tiên gần nhất có thuộc tính `position` khác `static`. | Có | Căn chỉnh phần tử tự do (Ví dụ: nút "X" đóng cửa sổ popup, dấu chấm đỏ thông báo trên icon quả chuông). |
| **fixed** | Không | Khung nhìn của trình duyệt (Viewport). | Không (Đứng im một góc khi cuộn trang) | Thanh menu header dính ở trên cùng, nút "Back to top", bong bóng chat hỗ trợ. |
| **sticky** | Có | Lai giữa `relative` và `fixed` (Tham chiếu theo viewport nhưng bị giới hạn trong ranh giới thẻ cha). | Vừa có vừa không (Cuộn cùng trang nhưng sẽ dính lại khi chạm mốc) | Tiêu đề hàng/cột của bảng giữ cố định khi cuộn dữ liệu, thanh mục lục dính trên sidebar khi đọc bài viết dài. |

---

### Câu hỏi phụ

#### 1. Khi nào `absolute` tham chiếu `body`? Khi nào tham chiếu `parent`?
* **Tham chiếu `body` (hoặc document):** Khi phần tử `absolute` đó không nằm bên trong bất kỳ một thẻ cha hay tổ tiên nào được cài đặt thuộc tính `position` (tức là tất cả các thẻ bao bọc nó đều ở trạng thái `static` mặc định). Lúc này, nó sẽ lấy mốc tọa độ theo toàn bộ trang web.
* **Tham chiếu `parent` (hoặc tổ tiên):** Khi thẻ cha trực tiếp (hoặc một thẻ tổ tiên xa hơn bao bọc nó) được cài đặt thuộc tính `position` mang giá trị khác `static` (như `relative`, `absolute`, `fixed`, hoặc `sticky`). Cách làm phổ biến nhất trong thực tế là đặt thẻ cha là `position: relative;` để làm gốc tọa độ cho thẻ con `absolute`.

#### 2. Giải thích khái niệm "nearest positioned ancestor" (Tổ tiên được định vị gần nhất)
* Đây là quy tắc mà trình duyệt dùng để tìm kiếm mốc tọa độ để căn chỉnh cho một thẻ đang dùng `position: absolute;`.
* **Quá trình tìm kiếm:** Trình duyệt sẽ đi ngược từ vị trí của thẻ `absolute` hiện tại lên các thẻ bọc ngoài nó (tìm từ cha trực tiếp, rồi lên ông, bà, cụ...):
  * **"Positioned"** nghĩa là thẻ tổ tiên đó phải được cài đặt thuộc tính `position` khác với giá trị `static` mặc định.
  * **"Nearest"** nghĩa là trình duyệt sẽ lấy thẻ **đầu tiên** thỏa mãn điều kiện trên để làm khung tham chiếu cho các thuộc tính định vị (`top`, `right`, `bottom`, `left`).
* Nếu dò ngược lên đến tận cùng (thẻ `<html>`) mà vẫn không tìm thấy thẻ nào thỏa mãn, trình duyệt sẽ mặc định lấy toàn bộ khung nhìn trang web làm mốc.
## Câu A2 — Flexbox vs Grid

---

### /* Trường hợp 1 */
```css
.container { display: flex; }
.item { flex: 1; } /* 4 items */
``` 
Dự đoán bố cục: 4 items sẽ nằm trên 1 hàng duy nhất. Do có thuộc tính flex: 1, cả 4 items sẽ tự động co giãn và chia đều khoảng trống để có kích thước rộng bằng nhau ($25\%$ độ rộng của container mỗi item), lấp đầy toàn bộ chiều ngang container.Sơ đồ bố cục (1 hàng, 4 cột đều nhau):
- 
### Bố cục:

![Th1](./screenshot/th1.png)

→ 1 hàng, 4 cột bằng nhau.


### /* Trường hợp 2 */
```css
.container { display: flex; flex-wrap: wrap; }
.item { width: 45%; margin: 2.5%; } /* 6 items */
```

- Mỗi item chiếm:
  - width = 45%
  - margin trái + phải = 5%
- Tổng = 50%

→ Mỗi hàng chứa được 2 item.

Có 6 item nên:

- 3 hàng
- 2 cột

### Bố cục:

![th2](./screenshot/th2.png)

### /* Trường hợp 3 */
```css
.container { display: flex; justify-content: space-between; align-items: center; } /* 3 items */
```
- `justify-content: space-between`
  → item đầu sát trái, item cuối sát phải, item giữa nằm giữa.
- `align-items: center`
  → các item căn giữa theo chiều dọc.

Có 3 item:


### Bố cục
![th3](./screenshot/th3.png)
 1 hàng ngang, khoảng cách đều nhau.

## Trường hợp 4

```css
.container {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    gap: 20px;
}
```

- Grid có 3 cột:
  - Cột 1 = 200px
  - Cột 2 = chiếm phần còn lại (`1fr`)
  - Cột 3 = 200px
- `gap: 20px` → khoảng cách giữa các cột.

Có 3 item nên mỗi item nằm trên 1 cột.

### Bố cục:

![Th4](./screenshot/th4.png)

→ 1 hàng, 3 cột.

---

## Trường hợp 5

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
```

- `repeat(3, 1fr)` → tạo 3 cột bằng nhau.
- Có 7 item.

Cách sắp xếp:

- Hàng 1: item 1 2 3
- Hàng 2: item 4 5 6
- Hàng 3: item 7

### Bố cục:

![Th5](./screenshot/th5.png)

→ Tổng cộng:
- 3 hàng
- 3 cột
- Item 7 nằm ở hàng cuối, cột đầu tiên.

# Phần C
## Câu C1  — Flexbox vs Grid: Khi nào dùng gì?
### 1. Navigation bar ngang (logo + menu + buttons)
* **Lựa chọn:** `Flexbox`
* **Giải thích ngắn gọn:** Thanh điều hướng (Navbar) là dạng bố cục **1 chiều (1D)** theo trục ngang. Flexbox xử lý cực tốt việc phân bổ khoảng cách các phần tử không có kích thước cố định bằng thuộc tính `justify-content` (như dùng `space-between` để tự động đẩy logo và cụm nút bấm ra 2 đầu) và căn giữa thẳng hàng hoàn hảo theo chiều dọc bằng `align-items: center` vô cùng đơn giản.

---

### 2. Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)
* **Lựa chọn:** `Grid`
* **Giải thích ngắn gọn:** Đây là bố cục **2 chiều (2D)** yêu cầu các hình ảnh phải thẳng hàng tăm tắp cả theo hàng ngang lẫn cột dọc. Với CSS Grid, bạn chỉ cần duy nhất một dòng lệnh `grid-template-columns: repeat(3, 1fr);` là toàn bộ ảnh tải lên (dù là 3 ảnh hay 300 ảnh) sẽ tự động căn đều vào đúng 3 cột bằng nhau mà không bao giờ lo bị lệch dòng.

---

### 3. Layout blog: main content + sidebar
* **Lựa chọn:** `Grid` *(hoặc Flexbox đều được, nhưng Grid tối ưu hơn khi làm khung chính)*
* **Giải thích ngắn gọn:** Đây là cấu trúc vĩ mô, định hình khung lớn cho toàn bộ trang web (Page Layout). Sử dụng CSS Grid với thuộc tính `grid-template-columns: minmax(0, 1fr) 300px;` giúp bạn cố định chắc chắn được độ rộng của `sidebar` (ví dụ: 300px) và cho phép phần `main content` tự động co giãn linh hoạt chiếm trọn phần diện tích còn lại (`1fr`), giữ cho bố cục tổng thể luôn ổn định.

---

### 4. Footer với 4 cột thông tin (Về chúng tôi, Liên kết, Hỗ trợ, Liên hệ)
* **Lựa chọn:** `Kết hợp cả hai` (Cả Grid và Flexbox)
* **Giải thích ngắn gọn:**
  * **Bên ngoài dùng Grid:** Để chia nhanh phần Footer lớn thành một lưới chứa 4 cột bằng nhau một cách chính xác nhất bằng cách dùng `grid-template-columns: repeat(4, 1fr);`.
  * **Bên trong mỗi cột dùng Flexbox:** Mỗi cột nhỏ này chứa một danh sách các đường link xếp theo chiều dọc. Việc thiết lập Flexbox hướng cột (`flex-direction: column;`) kết hợp với thuộc tính `gap` giúp kiểm soát và căn chỉnh khoảng cách giữa các thẻ liên kết đều, mượt mà hơn.

---

### 5. Card sản phẩm (ảnh trên, text giữa, nút dưới — nút luôn dính đáy)
* **Lựa chọn:** `Flexbox`
* **Giải thích ngắn gọn:** Bản thân từng thẻ card riêng lẻ là một cấu trúc hiển thị tuyến tính **1 chiều (1D)** theo trục dọc từ trên xuống dưới. Khi ta thiết lập cấu trúc card dạng `display: flex; flex-direction: column;`, ta có thể áp dụng một mẹo kinh điển là đặt `margin-top: auto;` riêng cho phần tử nút bấm. Lúc này, Flexbox sẽ tự động tính toán toàn bộ khoảng trống dư thừa còn lại ở giữa để đẩy nút bấm dính chặt xuống sát đáy card, bất kể phần văn bản mô tả ở giữa dài hay ngắn.
## Câu C2 (10đ) — Debug Flexbox

### Lỗi 1: Cards không đều chiều cao — nút "Mua" bị nhảy lên/xuống

#### 1. Nguyên nhân:
* Theo mặc định, các thành phần con trực tiếp của Flexbox Container (`.card-container`) sẽ tự động co giãn bằng chiều cao của nhau nhờ thuộc tính mặc định `align-items: stretch`. Tuy nhiên, bản thân từng `.card` lại **chưa được kích hoạt Flexbox**.
* Khi tên sản phẩm hoặc đoạn text mô tả của các card dài ngắn khác nhau, phần nội dung này sẽ chiếm diện tích khác nhau, trực tiếp đẩy nút `.btn` lên hoặc xuống không đồng đều.

#### 2. Code sửa lỗi (CSS):
```css
.card-container { 
    display: flex; 
    flex-wrap: wrap; 
}
.card { 
    width: 30%; 
    margin: 1.5%; 
    /* SỬA ĐỔI: Kích hoạt Flexbox theo chiều dọc cho từng card */
    display: flex;
    flex-direction: column;
}
.card img { width: 100%; }
.card h3 { font-size: 18px; }
.card .btn { 
    padding: 10px; 
    /* SỬA ĐỔI: Đẩy nút bấm luôn dính chặt xuống đáy card */
    margin-top: auto; 
}

[TRƯỚC KHI SỬA]                      [SAU KHI SỬA]
┌──────────────┐ ┌──────────────┐     ┌──────────────┐ ┌──────────────┐
│     Ảnh      │ │     Ảnh      │     │     Ảnh      │ │     Ảnh      │
│  Tên ngắn    │ │ Tên siêu dài │     │  Tên ngắn    │ │ Tên siêu dài │
│  [ Mua ]     │ │ dài dằng dặc │     │              │ │ dài dằng dặc │
└──────────────┘ │  [ Mua ]     │     │  [ Mua ]     │ │  [ Mua ]     │
                 └──────────────┘     └──────────────┘ └──────────────┘
               (Nút bị lệch nhau)                  (Nút thẳng hàng ở đáy)
```
### Lỗi 2: Muốn items nằm giữa cả ngang lẫn dọc trong container 100vh, nhưng item vẫn dính góc trái trên
1. Nguyên nhân:
- Việc thiết lập display: flex; tại khối .hero mới chỉ biến nó thành một Flex Container chứ chưa hề ra lệnh định vị cho các phần tử con bên trong.

- Thuộc tính text-align: center; ở .hero-content chỉ có tác dụng căn giữa các dòng chữ nội bộ bên trong khối đó (như thẻ h1, p) chứ không thể tự căn giữa chính khối .hero-content so với toàn bộ màn hình .hero.
```css
.hero {
    height: 100vh;
    display: flex;
    /* SỬA ĐỔI: Căn giữa phần tử con theo trục ngang */
    justify-content: center;
    /* SỬA ĐỔI: Căn giữa phần tử con theo trục dọc */
    align-items: center;
}
.hero-content {
    text-align: center;
}
[TRƯỚC KHI SỬA]                      [SAU KHI SỬA]
┌──────────────────────────────┐     ┌──────────────────────────────┐
│ [Nội dung nằm góc trái trên] │     │                              │
│                              │     │                              │
│                              │     │      [Nội dung đã được]      │
│                              │     │       [căn giữa chuẩn]       │
│                              │     │                              │
└──────────────────────────────┘     └──────────────────────────────┘
```
### Lỗi 3: Sidebar bị co lại khi content quá dài
1. Nguyên nhân:
- Trong Flexbox, thuộc tính mặc định của các phần tử con là flex-shrink: 1. Điều này có nghĩa là khi không gian hiển thị của hàng ngang bị thiếu (do nội dung bên khối .content quá dài và phình to ra), các phần tử khác như .sidebar sẽ bị ép co hẹp kích thước lại để nhường chỗ, dẫn đến việc độ rộng của nó bị nhỏ hơn mức 250px thiết lập ban đầu.
```css .layout { display: flex; }
.sidebar { 
    width: 250px; 
    /* SỬA ĐỔI: Chặn không cho sidebar bị co lại (giữ cố định 250px) */
    flex-shrink: 0; 
}
.content { 
    flex: 1; 
}
[TRƯỚC KHI SỬA]                      [SAU KHI SỬA]
┌─────────┬────────────────────┐     ┌───────────┬──────────────────┐
│ Sidebar │ Content quá dài... │     │  Sidebar  │ Content quá dài..│
│ (Bị ép) │                    │     │  (Cố định │                  │
│  180px  │                    │     │   250px)  │                  │
└─────────┴────────────────────┘     └───────────┴──────────────────┘
```
