# Track A _ Bootstrap 5
# Phần A
## Phần A1
# Bảng phân tích kích thước và Layout

Nguyên lý hoạt động của Grid System ở đây là: Tổng số cột trong một hàng (`row`) tối đa là 12. Nếu tổng số cột của các phần tử vượt quá 12, phần tử thừa sẽ tự động bị đẩy xuống hàng tiếp theo.

- Kích thước < 768px (Mỗi box chiếm trọn 100% chiều rộng)|
[      Box 1      ] (100%)
[      Box 2      ] (100%)
[      Box 3      ] (100%)
[      Box 4      ] (100%)
- Kích thước 768px - 991px (Mỗi box chiếm 50% chiều rộng)
[   Box 1   ][   Box 2   ] (Mỗi box 50%)
[   Box 3   ][   Box 4   ] (Mỗi box 50%)

- Kích thước ≥ 992px (Mỗi box chiếm 25% chiều rộng)
[ Box 1 ][ Box 2 ][ Box 3 ][ Box 4 ] (Mỗi box 25%)

- col-md-6 nghĩa là gì?

    - col: Viết tắt của Column (Cột) trong hệ thống Grid.

    - md: Viết tắt của Medium (kích thước màn hình trung bình, thường là từ 768px đến dưới 992px).

    - 6: Số lượng cột mà phần tử đó sẽ chiếm trên tổng số 12 cột của một hàng.

=> Ý nghĩa: Khi màn hình có độ rộng từ 768px trở lên (kích thước md), phần tử này sẽ chiếm 6/12 cột (tức là 50% chiều rộng của hàng).

- Tại sao không cần viết col-sm-12?

    - Grid System hoạt động theo nguyên lý Mobile-First (ưu tiên thiết kế cho màn hình nhỏ trước, sau đó mở rộng dần lên màn hình lớn) kết hợp với tính chất kế thừa từ dưới lên.

    - Trong đoạn code của bạn đã có lớp col-12. Lớp này áp dụng cho kích thước mặc định nhỏ nhất (từ 0px trở lên).

    - Khi bạn không khai báo col-sm (kích thước Small, từ 576px đến dưới 768px), trình duyệt sẽ tự động kế thừa thuộc tính của kích thước nhỏ hơn liền kề trước đó, chính là col-12.

Do đó, ở kích thước sm, các box vẫn tự động hiểu là chiếm 12 cột. Việc viết thêm col-sm-12 là hoàn toàn dư thừa và làm code bị rối.

## phần A2— Utilities & Components


---

## 1. Giải thích class `d-none d-md-block`

Lớp này kết hợp hai thuộc tính thay đổi trạng thái hiển thị (`display`) dựa trên cơ chế **Mobile-First** (áp dụng cho màn hình nhỏ trước, kế thừa dần lên màn hình lớn).

*   **`d-none`**: Ẩn phần tử này hoàn toàn (tương đương `display: none;`). Do không gắn tiền tố kích thước, nó có hiệu lực ngay từ màn hình nhỏ nhất (từ `0px` trở lên).
*   **`d-md-block`**: Hiển thị phần tử dưới dạng khối (`display: block;`) khi màn hình đạt kích thước Trung bình (Medium - từ `768px` trở lên).

### Kết luận ẩn/hiển thị:
*   **Ẩn khi nào:** Khi màn hình có độ rộng **nhỏ hơn 768px** (Màn hình điện thoại/Mobile).
*   **Hiển thị khi nào:** Khi màn hình có độ rộng **từ 768px trở lên** (Màn hình Máy tính bảng/Tablet, Laptop, và Desktop).

---

## 2. Liệt kê 5 Spacing Utilities (Margin/Padding) và giải thích

Hệ thống khoảng cách trong CSS framework (như Bootstrap) sử dụng công thức quy đổi từ số sang đơn vị `rem` (thường là nhân với `0.25rem` cho mỗi đơn vị). Dưới đây là 5 ví dụ:

1.  **`mt-3` (Margin Top)**:
    *   *Giải thích:* Thêm khoảng cách căn lề **phía trên** (Top) của phần tử.
    *   *Giá trị:* Cấp độ 3 (thường tương đương với `1rem` hoặc `16px`).
2.  **`px-4` (Padding X-axis)**:
    *   *Giải thích:* Thêm khoảng cách đệm đồng thời ở cả hai bên **trái và phải** (Trục X) vào bên trong phần tử.
    *   *Giá trị:* Cấp độ 4 (thường tương đương với `1.5rem` hoặc `24px`).
3.  **`mb-auto` (Margin Bottom Auto)**:
    *   *Giải thích:* Tự động căn lề **phía dưới** (Bottom) để đẩy các phần tử khác ra xa hết mức có thể (thường dùng trong flexbox để dồn phần tử lên trên).
    *   *Giá trị:* Tương đương thuộc tính `margin-bottom: auto;`.
4.  **`py-2` (Padding Y-axis)**:
    *   *Giải thích:* Thêm khoảng cách đệm đồng thời ở cả hai bên **trên và dưới** (Trục Y) vào bên trong phần tử.
    *   *Giá trị:* Cấp độ 2 (thường tương đương với `0.5rem` hoặc `8px`).
5.  **`ms-5` (Margin Start)**:
    *   *Giải thích:* Thêm khoảng cách căn lề ở **phía bắt đầu** (bên Trái - Left, trong chế độ đọc từ trái sang phải).
    *   *Giá trị:* Cấp độ 5 (thường tương đương với `3rem` hoặc `48px`).

---

## 3. Sự khác nhau giữa `.container`, `.container-fluid`, và `.container-md`

Cả 3 class này đều dùng để bao bọc và căn giữa nội dung, nhưng cách chúng co giãn theo độ rộng màn hình (Responsive) lại hoàn toàn khác nhau:

| Tiêu chí | `.container` | `.container-fluid` | `.container-md` |
| :--- | :--- | :--- | :--- |
| **Đặc tính chiều rộng** | Chiều rộng **cố định** (Responsive Fixed-width). Chiều rộng thay đổi nhảy bậc theo từng cột mốc (breakpoint). | Chiều rộng **full 100%** (Full-width) ở mọi kích thước màn hình. | Kết hợp: **Full-width** ở màn hình nhỏ, và trở thành **Cố định** từ màn hình trung bình trở lên. |
| **Kích thước `< 768px`** | Chiều rộng chiếm `100%`. | Chiều rộng chiếm `100%`. | Chiều rộng chiếm `100%`. |
| **Kích thước `≥ 768px`** | Chiều rộng cố định (Ví dụ: `720px`). | Chiều rộng chiếm `100%`. | Chiều rộng bắt đầu cố định (Ví dụ: `720px`). |
| **Kích thước `≥ 1200px`** | Chiều rộng cố định (Ví dụ: `1140px`). | Chiều rộng chiếm `100%`. | Chiều rộng cố định (Ví dụ: `1140px`). |
| **Mục đích sử dụng** | Khi muốn nội dung hiển thị gom gọn gàng ở giữa màn hình lớn, tạo không gian trống 2 bên lề. | Khi làm các giao diện tràn màn hình (như bản đồ, thanh điều hướng navbar, banner lớn,...). | Khi muốn nội dung hiển thị tràn viền trên điện thoại để tiết kiệm không gian, nhưng vẫn gom gọn lại khi sang máy tính bảng/máy tính. |

# Phần C
### 2. Bảng so sánh chi tiết

| Tiêu chí | Viết bằng CSS Thuần | Sử dụng Bootstrap |
| :--- | :--- | :--- |
| **Số dòng CSS cần viết** | Rất nhiều. Phải tự tay viết từ layout, các trạng thái tương tác (hover, focus, active) cho đến các đoạn mã Media Queries để xử lý responsive. | Gần như bằng 0. Bạn chỉ cần gọi đúng tên các class tiện ích có sẵn như `card`, `d-flex`, `navbar-expand-lg`, `col-md-6` thẳng vào cấu trúc thẻ HTML. |
| **Thời gian phát triển** | Chậm. Lập trình viên phải tự tính toán khoảng cách (padding/margin), thiết kế hệ thống lưới và kiểm thử kỹ lưỡng sự vỡ khung hình trên nhiều kích thước màn hình. | Rất nhanh chóng. Nhờ hệ thống grid thông minh và các component được chuẩn hóa sẵn, bạn có thể hoàn thành giao diện một trang Dashboard hay Landing Page chỉ trong vài giờ. |
| **Khả năng tùy biến** | Tối đa (100%). Bạn có toàn quyền kiểm soát chi tiết đến từng pixel theo đúng ý đồ thiết kế mà không bị ràng buộc bởi bất kỳ quy tắc nào có sẵn. | Bị hạn chế hơn. Giao diện dễ bị "đại trà" nếu không custom sâu. Việc ép Bootstrap chạy theo một layout phá cách độc lạ đôi khi mất nhiều công sức hơn tự viết. |

### 3. Khi nào NÊN và KHÔNG NÊN dùng Bootstrap?

**NÊN dùng Bootstrap khi:**
* Cần xây dựng cực nhanh các sản phẩm mẫu (Prototype) hoặc các dự án khởi nghiệp tinh gọn (MVP) để kiểm thử thị trường.
* Phát triển các dự án thiên về quản trị hệ thống như Admin Dashboard, trang quản lý nội bộ – nơi cấu trúc rõ ràng, chuẩn chỉnh quan trọng hơn sự độc bản về giao diện.
* Làm việc trong các đội ngũ thiếu nhân sự chuyên trách về UI/UX, cần một bộ khung giao diện chuẩn để tất cả lập trình viên đều có thể phối hợp làm việc đồng bộ.

**KHÔNG NÊN dùng Bootstrap khi:**
* Dự án có bản thiết kế UI/UX độc quyền sáng tạo, mang tính nghệ thuật cao và không tuân theo hệ thống lưới 12 cột thông thường.
* Các ứng dụng cần tối ưu hóa dung lượng và tốc độ tải trang ở mức tuyệt đối, vì Bootstrap chứa sẵn rất nhiều file CSS/JS nền mà dự án có thể không dùng hết.
* Khi doanh nghiệp muốn tự xây dựng một hệ thống ngôn ngữ thiết kế (Design System) hoàn toàn riêng biệt để khẳng định bản sắc thương hiệu sâu sắc.