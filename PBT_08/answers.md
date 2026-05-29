
# PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)

## Câu A1 (5đ) — Function Declaration vs Expression vs Arrow

### 1. Viết hàm theo 3 cách

*(Lưu ý: Đề bài yêu cầu trả về object `{ thuong, thuc_nhan }`, mình giả định `thuong` là `thue` (thuế) do logic tính thuế, nên mình sẽ dùng tên biến `thue` cho hợp lý).*

**Cách 1: Function Declaration (Khai báo hàm truyền thống)**
```javascript
function tinhThueBaoHiem(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    const thuc_nhan = luong - thue;
    return { thue, thuc_nhan };
}
**Cách 2: Function Expression (Biểu thức hàm)**

const tinhThueBaoHiem = function(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    const thuc_nhan = luong - thue;
    return { thue, thuc_nhan };
};
**Cách 3: Arrow Function (Hàm mũi tên)**
const tinhThueBaoHiem = (luong) => {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    const thuc_nhan = luong - thue;
    return { thue, thuc_nhan };
};
- 2. Sự khác nhau về Hoisting
3 cách này CÓ khác nhau về cơ chế Hoisting (đưa phần khai báo lên đầu scope trước khi code chạy).

Function Declaration: Được hoisting toàn bộ (cả tên hàm và nội dung hàm). Bạn có thể gọi hàm trước khi viết code khai báo nó.

Function Expression & Arrow Function: Nếu dùng const/let để gán, hàm sẽ KHÔNG thể gọi được trước khi khai báo (bị kẹt trong Temporal Dead Zone - TDZ). Nó sẽ báo lỗi ReferenceError.

Ví dụ Code chứng minh:
// 1. Chạy bình thường
console.log(hamDeclaration(12000000)); 
function hamDeclaration(luong) { return luong; }

// 2. Báo lỗi: ReferenceError: Cannot access 'hamExpression' before initialization
console.log(hamExpression(12000000)); 
const hamExpression = function(luong) { return luong; }

// 3. Báo lỗi: ReferenceError: Cannot access 'hamArrow' before initialization
console.log(hamArrow(12000000)); 
const hamArrow = (luong) => { return luong; }

## Câu A2: Dự đoán Output Đoạn 1 (Closure)
console.log(c.increment());  // 1
console.log(c.increment());  // 2
console.log(c.increment());  // 3
console.log(c.decrement());  // 2
console.log(c.getCount());   // 2
- Giải thích: Hàm counter tạo ra một Closure. Biến count không bị hủy đi sau khi hàm counter chạy xong mà được "ghi nhớ" và bảo vệ, chỉ có thể thay đổi thông qua 3 phương thức increment, decrement, getCount.

- Dự đoán Output Đoạn 2 (setTimeout trong vòng lặp)
var: 3
var: 3
var: 3
let: 0
let: 1
let: 2

- Giải thích chi tiết sự khác nhau:

    - Vòng lặp var: var có phạm vi function/global (không có block scope). Vòng lặp chạy rất nhanh từ 0 đến 3, sau đó setTimeout mới hết 100ms và chạy callback. Lúc này, cả 3 callback đều nhìn vào cùng một biến i duy nhất trong bộ nhớ, mà i lúc này đã tăng lên 3.

    - Vòng lặp let: let có phạm vi block scope (phạm vi khối ngoặc nhọn {}). Mỗi khi vòng lặp lặp lại, let tạo ra một "bản sao" mới của biến j tại thời điểm đó và lưu riêng biệt cho từng hàm setTimeout. Do đó nó in đúng thứ tự 0, 1, 2

## Câu A3
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Lấy các số chẵn
const evens = nums.filter(n => n % 2 === 0);

// 2. Nhân mỗi số với 3
const multiplied = nums.map(n => n * 3);

// 3. Tính tổng tất cả
const sum = nums.reduce((acc, curr) => acc + curr, 0);

// 4. Tìm số đầu tiên > 7
const firstGreaterThan7 = nums.find(n => n > 7);

// 5. Kiểm tra CÓ số > 10 không
const hasGreaterThan10 = nums.some(n => n > 10);

// 6. Kiểm tra TẤT CẢ đều > 0
const allGreaterThan0 = nums.every(n => n > 0);

// 7. Tạo mảng "Số X là [chẵn/lẻ]"
const strArray = nums.map(n => `Số ${n} là ${n % 2 === 0 ? 'chẵn' : 'lẻ'}`);

// 8. Đảo ngược mảng (không mutate gốc)
const reversed = [...nums].reverse(); 
// Hoặc cú pháp mới ES2023: const reversed = nums.toReversed();

## Câu A4
const { name, price, specs: { ram, color } } = product;

console.log(name, price, ram, color);  
// Output: iPhone 16 25990000 8 Titan

console.log(specs);                     
// Output: Báo lỗi ReferenceError: specs is not defined
// (Vì khi bạn viết specs: { ram, color }, bạn chỉ đang bóc tách ram và color, chứ KHÔNG tạo ra biến specs).
2. Spread
const updated = { ...product, price: 23990000, sale: true };

console.log(updated.price);            
// Output: 23990000 (Đã bị ghi đè bởi giá trị mới ở đuôi)

console.log(updated.sale);             
// Output: true

console.log(product.price);            
// Output: 25990000 (Object gốc không bị thay đổi vì spread tạo ra object mới)
3. Spread gotcha (Cạm bẫy của Spread)
const copy = { ...product };
copy.specs.ram = 16;

console.log(product.specs.ram);        
// Output: 16