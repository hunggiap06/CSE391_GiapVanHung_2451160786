// guess.js

// 1. Máy random một số nguyên từ 1 đến 100
const targetNumber = Math.floor(Math.random() * 100) + 1;

// Các biến quản lý trạng thái trò chơi
const maxAttempts = 7;
let attempts = 0;
let guessedNumbers = []; // Mảng dùng để lưu các số user đã đoán nhằm tránh đoán trùng
let hasWon = false;

alert("Chào mừng bạn đến với Game Đoán Số!\nMáy đã chọn ngẫu nhiên một số từ 1 đến 100. Bạn có tối đa 7 lượt đoán!");

// 2. Vòng lặp chính điều khiển trò chơi (chạy tối đa 7 lần)
while (attempts < maxAttempts) {
    let currentLeft = maxAttempts - attempts;
    let input = prompt(`[Lượt đoán ${attempts + 1}/${maxAttempts}] Nhập một số từ 1 đến 100:`);
    
    // Nếu bấm Cancel trên hộp thoại prompt thì kết thúc game luôn
    if (input === null) {
        alert("Bạn đã thoát trò chơi.");
        break;
    }
    
    // Chuyển dữ liệu nhập vào thành số nguyên
    let guess = parseInt(input.trim());
    
    // --- BẮT ĐẦU VALIDATE INPUT ---
    // Kiểm tra nếu input không phải là số hợp lệ hoặc nằm ngoài khoảng 1-100
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Cảnh báo: Chỉ chấp nhận số nguyên hợp lệ trong khoảng từ 1 đến 100!");
        continue; // Bỏ qua lượt này, yêu cầu nhập lại mà không bị trừ lượt đoán
    }
    
    // Kiểm tra xem số này đã từng đoán trước đây chưa
    let isDuplicated = false;
    for (let i = 0; i < guessedNumbers.length; i++) {
        if (guessedNumbers[i] === guess) {
            isDuplicated = true;
            break;
        }
    }
    
    if (isDuplicated) {
        alert(`Bạn đã đoán số ${guess} này rồi! Vui lòng chọn số khác.`);
        continue; // Bỏ qua lượt này, không trừ lượt đoán
    }
    
    // --- XỬ LÝ LƯỢT ĐOÁN HỢP LỆ ---
    attempts++; // Tăng số lần đoán hợp lệ lên 1
    guessedNumbers.push(guess); // Lưu số vừa đoán vào danh sách danh sách đã đoán
    
    // So sánh số đoán với đáp án của máy
    if (guess === targetNumber) {
        alert(`Đúng rồi!\nChúc mừng! Bạn đoán đúng sau ${attempts} lần!`);
        hasWon = true;
        break; // Đoán đúng -> Thoát khỏi vòng lặp và thắng game
    } else if (guess > targetNumber) {
        alert("Thấp hơn!");
    } else {
        alert("Cao hơn!");
    }
}

// 3. Kết quả khi hết 7 lượt mà chưa đoán đúng
if (!hasWon && attempts >= maxAttempts) {
    alert(`Bạn đã hết lượt đoán! Bạn thua cuộc.\nĐáp án chính xác là: ${targetNumber}`);
}