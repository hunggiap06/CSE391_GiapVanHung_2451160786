# PHẦN A — KIỂM TRA ĐỌC HIỂU: JAVASCRIPT FUNDAMENTALS

## Câu A1 (5đ) — var / let / const

**Dưới đây là kết quả và giải thích khi chạy các đoạn code:**

* **Đoạn 1:** Output là `undefined`.
  * *Giải thích:* Vì `var` có cơ chế Hoisting. Khai báo `var x` được đẩy lên đầu scope, nhưng phần gán giá trị `x = 5` vẫn giữ nguyên ở dòng cũ. Lúc gọi `console.log(x)`, `x` đã tồn tại nhưng chưa có giá trị.

* **Đoạn 2:** Output là báo lỗi `ReferenceError: Cannot access 'y' before initialization`.
  * *Giải thích:* `let` cũng được hoisting, nhưng nó bị đưa vào "Vùng chết tạm thời" (Temporal Dead Zone - TDZ). Bạn không thể truy cập biến `let` trước khi dòng khởi tạo của nó được chạy.

* **Đoạn 3:** Output là báo lỗi `TypeError: Assignment to constant variable`.
  * *Giải thích:* `const` là hằng số. Khi đã gán giá trị khởi tạo, bạn không thể dùng dấu `=` để gán lại cho nó một giá trị mới.

* **Đoạn 4:** Output là `[1, 2, 3, 4]`.
  * *Giải thích (Bất ngờ):* `const` cấm bạn gán lại vùng nhớ (binding) của biến `arr`. Tức là `arr = [5, 6]` sẽ lỗi. Nhưng bản thân mảng là một kiểu dữ liệu tham chiếu (Reference Type), bạn hoàn toàn có thể thêm/xóa/sửa các phần tử bên trong mảng đó.

* **Đoạn 5:** Output là `Trong block: 2` sau đó là `Ngoài block: 1`.
  * *Giải thích:* `let` có Block Scope (phạm vi khối – tính trong cặp ngoặc nhọn `{}`). Biến `a` bằng 2 chỉ tồn tại và có tác dụng bên trong cặp ngoặc nhọn. Biến `a` bằng 1 ở bên ngoài là một biến hoàn toàn độc lập.

---

## Câu A2 (5đ) — Data Types & Coercion (Ép kiểu)

**Dự đoán kết quả:**

```javascript
console.log(typeof null);         // "object" (Đây là một lỗi lịch sử của JS từ xa xưa không thể sửa)
console.log(typeof undefined);    // "undefined"
console.log(typeof NaN);          // "number" (NaN nghĩa là Not-a-Number, nhưng kiểu dữ liệu của nó lại là số!)
console.log("5" + 3);             // "53"
console.log("5" - 3);             // 2
console.log("5" * "3");           // 15
console.log(true + true);         // 2 (true bị ép kiểu thành 1)
console.log([] + []);             // "" (Mảng rỗng ép thành chuỗi rỗng "")
console.log([] + {});             // "[object Object]"
console.log({} + []);             // "[object Object]" (Hoặc 0 nếu chạy trực tiếp trên console trình duyệt do {} bị coi là block)
```

**Giải thích sự khác biệt giữa `"5" + 3` và `"5" - 3`:**
* Dấu `+` trong JS có 2 nhiệm vụ: **Cộng số** hoặc **Nối chuỗi**. Nếu có bất kỳ toán hạng nào là chuỗi (string), JS sẽ ưu tiên ép kiểu toán hạng còn lại thành chuỗi và nối chúng lại với nhau. Do đó, `"5"` và `"3"` thành `"53"`.
* Dấu `-` (và `*`, `/`) chỉ có duy nhất 1 nhiệm vụ: **Phép toán số học**. Do đó, JS sẽ buộc phải ép kiểu ngược lại, biến chuỗi `"5"` thành số nguyên `5` rồi mới làm toán. Kết quả là `2`.

---

## Câu A3 (5đ) — So sánh == vs ===

**Dự đoán:**

```javascript
console.log(5 == "5");            // true  (Chỉ so sánh giá trị, đã ép kiểu)
console.log(5 === "5");           // false (So sánh cả giá trị và kiểu dữ liệu: Number khác String)
console.log(null == undefined);   // true  (Quy tắc đặc biệt của JS)
console.log(null === undefined);  // false (Kiểu object và kiểu undefined)
console.log(NaN == NaN);          // false (Quy tắc đặc biệt: NaN không bao giờ bằng bất cứ thứ gì, kể cả chính nó)
console.log(0 == false);          // true  (false ép kiểu về số là 0)
console.log(0 === false);         // false (Number khác Boolean)
console.log("" == false);         // true  (Cả 2 đều ép kiểu về 0)
```

**Quy tắc rút ra:**
Từ giờ trở đi, bạn **LUÔN LUÔN nên dùng `===`** (Strict Equality) và `!==`.
* **Tại sao?** Vì `==` tự động ép kiểu (Type Coercion) ngầm, gây ra những kết quả vô lý và khó lường (như `"" == false` ra `true`). Dùng `===` giúp code minh bạch, an toàn, dễ debug và tránh được các lỗi logic nghiêm trọng.

---

## Câu A4 (5đ) — Truthy & Falsy

**Tất cả các giá trị Falsy trong JS:** (Chỉ có 8 giá trị này là Falsy, còn lại đều là Truthy)
1. `false`
2. `0`
3. `-0`
4. `0n` (BigInt zero)
5. `""`, `''`, ` `` ` (Chuỗi rỗng)
6. `null`
7. `undefined`
8. `NaN`

**Dự đoán kết quả điều kiện (if):**

```javascript
if ("0") console.log("A");        // In (Chuỗi có chứa nội dung -> Truthy)
if ("") console.log("B");         // Không in (Chuỗi rỗng -> Falsy)
if ([]) console.log("C");         // In (Mảng là object, object luôn Truthy)
if ({}) console.log("D");         // In (Object luôn Truthy)
if (null) console.log("E");       // Không in (Falsy)
if (0) console.log("F");          // Không in (Falsy)
if (-1) console.log("G");         // In (Số khác không -> Truthy)
if (" ") console.log("H");        // In (Chuỗi chứa dấu cách không phải rỗng -> Truthy)
```

---

## Câu A5 (5đ) — Template Literals

Chuyển đổi nối chuỗi cũ sang cú pháp Template Literal (sử dụng dấu Backtick `` ` `` và nội suy `${}`):

```javascript
// Cách 1:
const greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

// Cách 2:
const url = `https://api.example.com/users/${userId}/orders?page=${page}`;

// Cách 3: Template literals hỗ trợ xuống dòng tự nhiên cực kỳ tiện lợi
const html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;
```

# Phần C
## Câu C1: Debug JavaScript
Đoạn code trên có khá nhiều vấn đề từ cú pháp cơ bản đến logic. Dưới đây là 6 lỗi mình đã tìm ra, kèm theo giải thích và cách sửa:

Lỗi cú pháp (Syntax Error) do viết gộp dòng:

Lỗi: return giaSauGiam}// Testconst gia = ...

Giải thích: Code viết liền tù tì không có dấu xuống dòng hoặc dấu chấm phẩy (;), khiến trình duyệt/Node.js không thể hiểu đâu là kết thúc hàm và đâu là bắt đầu khai báo biến mới. Nó sẽ báo lỗi ngay lập tức.

Cách sửa: Thêm dấu xuống dòng sau dấu ngoặc nhọn } và thêm ; ở cuối các câu lệnh.

Lỗi gán giá trị thay vì so sánh (Rất phổ biến với người mới):

Lỗi: if (giaSauGiam = 0)

Giải thích: Dấu = là phép gán (đặt giá trị giaSauGiam bằng 0). Câu lệnh này luôn trả về 0 (tương đương false), nên khối lệnh bên trong if sẽ không bao giờ chạy. Để so sánh bằng, trong JavaScript phải dùng == hoặc ===.

Cách sửa: Sửa thành if (giaSauGiam === 0) (nên dùng === để so sánh cả kiểu dữ liệu).

Sai kiểu dữ liệu đầu vào (Type Coercion):

Lỗi: tinhGiaGiamGia("100000", 20)

Giải thích: Bạn đang truyền vào một chuỗi (String) "100000" thay vì một số (Number). Dù JavaScript tự động ép kiểu để tính toán phép trừ/nhân, nhưng đây là một thói quen không tốt và có thể gây lỗi nghiêm trọng nếu bạn dùng phép cộng (+).

Cách sửa: Truyền số thực sự: tinhGiaGiamGia(100000, 20).

Lỗi logic khi xử lý kết quả trả về không hợp lệ:

Lỗi: Khi tinhGiaGiamGia(50000, 110), hàm trả về chuỗi thông báo lỗi. Nhưng dòng dưới lại lấy chuỗi đó cộng trực tiếp: console.log("Giá: " + gia2).

Giải thích: Màn hình sẽ in ra một câu rất vô lý: "Giá: Phần trăm giảm không hợp lệ". Đáng lẽ chúng ta cần kiểm tra xem hàm tính toán thành công hay thất bại trước khi in.

Cách sửa: Hàm nên ném ra một lỗi (Throw Error) hoặc kiểm tra biến gia2 trước khi in.

Thiếu kiểm tra tính hợp lệ của giaBan:

Lỗi: Chỉ kiểm tra phanTramGiam mà quên kiểm tra giaBan.

Giải thích: Chuyện gì xảy ra nếu người dùng truyền vào giá bán âm (-50000)? Kết quả sẽ bị sai logic hoàn toàn.

Cách sửa: Bổ sung điều kiện kiểm tra giaBan < 0.

Lỗi "ẩn" kinh điển: var trong vòng lặp for chứa setTimeout:

Lỗi: Dùng var i = 0 trong vòng lặp với hàm bất đồng bộ.

Giải thích: Từ khóa var có phạm vi (scope) toàn cục hoặc phạm vi hàm, không có phạm vi khối (block scope). Vòng lặp for chạy rất nhanh từ 0 đến 5. Khi setTimeout hết thời gian chờ 1 giây và bắt đầu chạy hàm console.log, thì vòng lặp đã kết thúc từ lâu và biến i lúc này đã tăng lên 5. Kết quả là nó in ra "Item 5" liên tục 5 lần!

Cách sửa: Đổi var thành let. Từ khóa let tạo ra một phạm vi khối (block scope) mới cho mỗi vòng lặp. Tức là mỗi lần lặp, nó "chụp" lại giá trị của i ngay tại thời điểm đó để dùng cho setTimeout. Nó sẽ in đúng: 0, 1, 2, 3, 4.

## Câu C2
JavaScript
// Dữ liệu đầu vào: Danh sách món ăn
const danhSachMon = [
    { ten: "Phở bò", soLuong: 2, gia: 65000 },
    { ten: "Trà đá", soLuong: 3, gia: 5000 },
    { ten: "Bún chả", soLuong: 1, gia: 55000 }
];

function tinhHoaDon(monAn, laNgayWednesday, coTip) {
    let tongTien = 0;
    
    // 1. Tính tổng tiền các món
    for (let i = 0; i < monAn.length; i++) {
        tongTien += monAn[i].gia * monAn[i].soLuong;
    }

    // 2. Xét phần trăm giảm giá theo quy tắc
    let phanTramGiam = 0;
    if (tongTien > 1000000) {
        phanTramGiam += 15;
    } else if (tongTien > 500000) {
        phanTramGiam += 10;
    }

    if (laNgayWednesday) {
        phanTramGiam += 5;
    }

    // 3. Tính toán các con số
    let tienGiam = (tongTien * phanTramGiam) / 100;
    let tienSauGiam = tongTien - tienGiam;
    let vat = (tienSauGiam * 8) / 100; // VAT 8% tính trên giá đã giảm
    let tip = coTip ? (tienSauGiam * 5) / 100 : 0; // Tip 5% (nếu có)
    
    let thanhToan = tienSauGiam + vat + tip;

    // 4. In ra hóa đơn chi tiết (Dùng thủ thuật in cơ bản)
    console.log("╔══════════════════════════════════════╗");
    console.log("║        HÓA ĐƠN NHÀ HÀNG              ║");
    console.log("╠══════════════════════════════════════╣");
    
    // In từng món ăn
    for (let i = 0; i < monAn.length; i++) {
        let mon = monAn[i];
        let tongMon = mon.gia * mon.soLuong;
        
        // Căn chỉnh bằng padEnd (Thêm khoảng trắng cho đủ độ dài)
        let sttVaTen = `║ ${i + 1}. ${mon.ten}`.padEnd(17, " ");
        let sl = `x${mon.soLuong}`.padEnd(6, " ");
        let giaTien = `@${mon.gia/1000}k`.padEnd(6, " ");
        let tongTienMon = `= ${tongMon/1000}k`.padEnd(9, " ");
        
        console.log(`${sttVaTen}${sl}${giaTien}${tongTienMon}║`);
    }

    console.log("╠══════════════════════════════════════╣");
    
    // In tổng kết (hàm toLocaleString() giúp thêm dấu chấm vào số tiền 200.000)
    console.log(`║ Tổng cộng:              ${tongTien.toLocaleString("vi-VN").padStart(10, " ")}đ   ║`);
    console.log(`║ Giảm giá (${phanTramGiam}%):           ${tienGiam.toLocaleString("vi-VN").padStart(10, " ")}đ   ║`);
    console.log(`║ VAT (8%):               ${vat.toLocaleString("vi-VN").padStart(10, " ")}đ   ║`);
    console.log(`║ Tip (5%):               ${tip.toLocaleString("vi-VN").padStart(10, " ")}đ   ║`);
    console.log("╠══════════════════════════════════════╣");
    console.log(`║ THANH TOÁN:             ${thanhToan.toLocaleString("vi-VN").padStart(10, " ")}đ   ║`);
    console.log("╚══════════════════════════════════════╝");
}

// Chạy thử hàm: Tính hóa đơn, không phải thứ 4 (false), có Tip (true)
tinhHoaDon(danhSachMon, false, true);