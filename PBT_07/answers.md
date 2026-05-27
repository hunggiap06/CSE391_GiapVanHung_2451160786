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