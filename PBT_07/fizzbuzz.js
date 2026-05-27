// fizzbuzz.js

// ==========================================
// VERSION 1: Classic (In từ 1 đến 100)
// ==========================================
console.log("=== VERSION 1: CLASSIC FIZZBUZZ (1 - 100) ===");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// ==========================================
// VERSION 2: Custom (Hàm linh hoạt với bộ rules bất kỳ)
// ==========================================
console.log("\n=== VERSION 2: CUSTOM FIZZBUZZ ===");

function customFizzBuzz(n, rules) {
    for (let i = 1; i <= n; i++) {
        let resultWord = "";
        
        // Duyệt qua từng quy tắc (rule) trong mảng quy tắc được truyền vào
        for (let j = 0; j < rules.length; j++) {
            let currentRule = rules[j];
            
            // Nếu số hiện tại chia hết cho divisor của quy tắc, cộng dồn từ (word) đó vào chuỗi kết quả
            if (i % currentRule.divisor === 0) {
                resultWord += currentRule.word;
            }
        }
        
        // Nếu sau khi chạy hết các luật mà chuỗi từ vẫn rỗng (không chia hết cho số nào) 
        // thì ta in ra chính số đó, ngược lại thì in chuỗi chữ kết quả gộp được.
        if (resultWord === "") {
            console.log(i);
        } else {
            console.log(`${i} = "${resultWord}"`);
        }
    }
}

// Bộ quy tắc kiểm thử đề bài đưa ra (Divisor: 3 -> Fizz, 5 -> Buzz, 7 -> Jazz)
const testRules = [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
];

// Chạy thử nghiệm hàm custom đến số 30
customFizzBuzz(30, testRules);