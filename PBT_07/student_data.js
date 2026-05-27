// student_data.js

const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

// Các biến lưu trữ thống kê
let gradesCount = { "Giỏi": 0, "Khá": 0, "Trung bình": 0, "Yếu": 0 };
let maxAvg = -1;
let minAvg = 11;
let bestStudent = "";
let worstStudent = "";

let totalMath = 0, totalPhysics = 0, totalCs = 0;
let maleTotal = 0, maleCount = 0;
let femaleTotal = 0, femaleCount = 0;

// In tiêu đề bảng
console.log("| STT | Tên    | TB   | Xếp loại    |");
console.log("|-----|--------|------|-------------|");

// Vòng lặp chính để xử lý dữ liệu
for (let i = 0; i < students.length; i++) {
    let s = students[i];
    
    // 1. Tính điểm trung bình (công thức đề bài)
    let avg = s.math * 0.4 + s.physics * 0.3 + s.cs * 0.3;
    avg = Number(avg.toFixed(1)); // Làm tròn 1 chữ số thập phân
    
    // 2. Xếp loại
    let grade = "";
    if (avg >= 8.0) {
        grade = "Giỏi";
    } else if (avg >= 6.5) {
        grade = "Khá";
    } else if (avg >= 5.0) {
        grade = "Trung bình";
    } else {
        grade = "Yếu";
    }
    
    // 3. In từng dòng của bảng (Dùng padEnd để căn lề đẹp)
    let sttStr = String(i + 1).padEnd(3, " ");
    let nameStr = s.name.padEnd(6, " ");
    let avgStr = avg.toFixed(1).padEnd(4, " ");
    let gradeStr = grade.padEnd(11, " ");
    console.log(`| ${sttStr} | ${nameStr} | ${avgStr} | ${gradeStr} |`);
    
    // --- BẮT ĐẦU TÍNH THỐNG KÊ ---

    // 4. Đếm số lượng theo xếp loại
    gradesCount[grade]++;
    
    // 5. Tìm SV điểm cao nhất, thấp nhất
    if (avg > maxAvg) {
        maxAvg = avg;
        bestStudent = s.name;
    }
    if (avg < minAvg) {
        minAvg = avg;
        worstStudent = s.name;
    }
    
    // 6. Cộng dồn tổng điểm từng môn
    totalMath += s.math;
    totalPhysics += s.physics;
    totalCs += s.cs;
    
    // 7. Bonus: Phân loại điểm theo giới tính
    if (s.gender === "M") {
        maleTotal += avg;
        maleCount++;
    } else if (s.gender === "F") {
        femaleTotal += avg;
        femaleCount++;
    }
}

// In phần thống kê ra màn hình
console.log("\n--- THỐNG KÊ CHI TIẾT ---");

console.log("1. Số SV mỗi xếp loại:");
console.log(`   - Giỏi: ${gradesCount["Giỏi"]}`);
console.log(`   - Khá: ${gradesCount["Khá"]}`);
console.log(`   - Trung bình: ${gradesCount["Trung bình"]}`);
console.log(`   - Yếu: ${gradesCount["Yếu"]}`);

console.log("\n2. Sinh viên xuất sắc & yếu nhất:");
console.log(`   - Điểm cao nhất: ${bestStudent} (${maxAvg.toFixed(1)})`);
console.log(`   - Điểm thấp nhất: ${worstStudent} (${minAvg.toFixed(1)})`);

let totalStudents = students.length;
console.log("\n3. Điểm TB toàn lớp theo môn:");
console.log(`   - Toán (Math): ${(totalMath / totalStudents).toFixed(2)}`);
console.log(`   - Lý (Physics): ${(totalPhysics / totalStudents).toFixed(2)}`);
console.log(`   - Tin (CS): ${(totalCs / totalStudents).toFixed(2)}`);

console.log("\n4. [Bonus] Điểm TB theo giới tính:");
let maleAvg = maleCount > 0 ? (maleTotal / maleCount).toFixed(2) : 0;
let femaleAvg = femaleCount > 0 ? (femaleTotal / femaleCount).toFixed(2) : 0;
console.log(`   - Nam (M): ${maleAvg}`);
console.log(`   - Nữ (F): ${femaleAvg}`);