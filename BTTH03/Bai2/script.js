// --- GIAI ĐOẠN 2: LẤY CÁC PHẦN TỬ DOM ---
const taskModal = document.getElementById('task-modal');
const taskForm = document.getElementById('task-form');
const btnOpenAdd = document.getElementById('btn-open-add');
const btnCloseModal = document.getElementById('btn-close-modal');
const taskListElement = document.getElementById('task-list');
const notification = document.getElementById('notification');

// Mảng chứa dữ liệu công việc (Lấy từ localStorage nếu có, nếu không thì mảng rỗng)
let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];

// --- CÁC HÀM XỬ LÝ (TÁCH BIỆT NHƯ YÊU CẦU) ---

// 1. Lưu dữ liệu
function saveTasks() {
    localStorage.setItem('myTasks', JSON.stringify(tasks));
}

// 2. Cập nhật thống kê
function updateTaskSummary() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.isCompleted).length;
    const pending = total - completed;

    document.getElementById('total-tasks').innerText = total;
    document.getElementById('completed-tasks').innerText = completed;
    document.getElementById('pending-tasks').innerText = pending;
}

// 3. Hiển thị thông báo
function showMessage(msg) {
    notification.innerText = msg;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000); // Ẩn sau 3 giây
}

// 4. Render danh sách ra màn hình
function renderTasks() {
    taskListElement.innerHTML = ''; // Xóa sạch HTML cũ

    if (tasks.length === 0) {
        taskListElement.innerHTML = '<p style="text-align:center; color:#888;">Chưa có công việc nào.</p>';
    } else {
        tasks.forEach(task => {
            // Tạo một thẻ div (card) cho mỗi công việc
            const card = document.createElement('div');
            card.className = `task-card ${task.isCompleted ? 'completed' : ''}`;
            
            card.innerHTML = `
                <div class="task-info">
                    <h3>${task.title}</h3>
                    <p>${task.desc} | Hạn: ${task.date} | Ưu tiên: <strong>${task.priority}</strong></p>
                </div>
                <div class="task-actions">
                    <input type="checkbox" ${task.isCompleted ? 'checked' : ''} onchange="toggleStatus(${task.id})">
                    <button class="btn-edit" onclick="openEditForm(${task.id})">Sửa</button>
                    <button class="btn-delete" onclick="deleteTask(${task.id})">Xóa</button>
                </div>
            `;
            taskListElement.appendChild(card);
        });
    }
    updateTaskSummary(); // Nhớ cập nhật lại số liệu sau khi vẽ lại giao diện
}

// --- CÁC HÀM CRUD & SỰ KIỆN ---

// Bật/tắt trạng thái hoàn thành
function toggleStatus(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.isCompleted = !task.isCompleted;
        saveTasks();
        renderTasks();
        showMessage('Đã cập nhật trạng thái!');
    }
}

// Xóa công việc
function deleteTask(id) {
    if (confirm('Bạn có chắc chắn muốn xóa công việc này không?')) {
        // Lọc ra các task có id KHÁC với id cần xóa
        tasks = tasks.filter(t => t.id !== id);
        saveTasks();
        renderTasks();
        showMessage('Đã xóa công việc!');
    }
}

// Mở form (dùng chung cho cả Thêm và Sửa)
function openForm() {
    taskModal.style.display = 'flex';
}

// Đóng form và reset lỗi
function closeForm() {
    taskModal.style.display = 'none';
    taskForm.reset();
    document.getElementById('task-id').value = '';
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
}

// Mở form để Sửa
function openEditForm(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        document.getElementById('modal-title').innerText = 'Sửa công việc';
        document.getElementById('task-id').value = task.id;
        document.getElementById('task-title').value = task.title;
        document.getElementById('task-desc').value = task.desc;
        document.getElementById('task-date').value = task.date;
        document.getElementById('task-priority').value = task.priority;
        openForm();
    }
}

// --- BÀI TẬP VỀ NHÀ: FORM VALIDATION ---
function validateForm(title, date) {
    let isValid = true;
    
    // Check Tiêu đề (Bắt buộc, không để trống)
    if (title.trim() === '') {
        document.getElementById('err-title').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('err-title').style.display = 'none';
    }

    // Check Ngày (Bắt buộc)
    if (date === '') {
        document.getElementById('err-date').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('err-date').style.display = 'none';
    }

    return isValid;
}

// Xử lý sự kiện Submit Form (Thêm hoặc Sửa)
taskForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Ngăn trình duyệt load lại trang

    const idStr = document.getElementById('task-id').value;
    const title = document.getElementById('task-title').value;
    const desc = document.getElementById('task-desc').value;
    const date = document.getElementById('task-date').value;
    const priority = document.getElementById('task-priority').value;

    // Gọi hàm kiểm tra dữ liệu
    if (!validateForm(title, date)) {
        return; // Nếu không hợp lệ thì dừng lại, không chạy tiếp
    }

    if (idStr === '') {
        // TRƯỜNG HỢP: THÊM MỚI
        const newTask = {
            id: Date.now(), // Dùng thời gian thực làm ID duy nhất
            title: title,
            desc: desc,
            date: date,
            priority: priority,
            isCompleted: false
        };
        tasks.push(newTask);
        showMessage('Đã thêm công việc thành công!');
    } else {
        // TRƯỜNG HỢP: CẬP NHẬT (SỬA)
        const taskId = parseInt(idStr);
        const taskIndex = tasks.findIndex(t => t.id === taskId);
        if (taskIndex !== -1) {
            tasks[taskIndex].title = title;
            tasks[taskIndex].desc = desc;
            tasks[taskIndex].date = date;
            tasks[taskIndex].priority = priority;
            showMessage('Đã cập nhật công việc!');
        }
    }

    saveTasks();
    renderTasks();
    closeForm();
});

// --- GẮN CÁC SỰ KIỆN CLICK MỞ/ĐÓNG FORM ---
btnOpenAdd.addEventListener('click', () => {
    document.getElementById('modal-title').innerText = 'Thêm công việc';
    openForm();
});

btnCloseModal.addEventListener('click', closeForm);

// Chạy render lần đầu khi mở trang
renderTasks();