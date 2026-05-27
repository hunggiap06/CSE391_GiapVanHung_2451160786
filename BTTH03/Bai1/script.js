// Khởi tạo file script trống cho dự án
console.log("Project initialized!");
let students = JSON.parse(localStorage.getItem('students')) || [];

const studentList = document.getElementById('student-list');
const studentModal = document.getElementById('student-modal');
const studentForm = document.getElementById('student-form');
const btnOpenForm = document.getElementById('btn-open-form');
const btnCloseForm = document.getElementById('btn-close-form');
const modalTitle = document.getElementById('modal-title');
const btnSubmitForm = document.getElementById('btn-submit-form');

const formMode = document.getElementById('form-mode');
const inputId = document.getElementById('student-id');
const inputName = document.getElementById('student-name');
const inputDob = document.getElementById('student-dob');
const inputClass = document.getElementById('student-class');
const inputGpa = document.getElementById('student-gpa');
const inputEmail = document.getElementById('student-email');

function renderTable() {
    studentList.innerHTML = '';
    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.dob}</td>
            <td>${student.class}</td>
            <td>${student.gpa}</td>
            <td>${student.email}</td>
            <td>
                <button class="btn btn-success btn-sm btn-edit" data-id="${student.id}">Sửa</button>
                <button class="btn btn-danger btn-sm btn-delete" data-id="${student.id}">Xóa</button>
            </td>
        `;
        studentList.appendChild(row);
    });
}

btnOpenForm.addEventListener('click', () => {
    studentForm.reset();
    formMode.value = "";
    inputId.disabled = false;
    modalTitle.innerText = "Thêm Sinh Viên Mới";
    studentModal.classList.remove('hidden');
});

btnCloseForm.addEventListener('click', () => studentModal.classList.add('hidden'));

studentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const studentData = {
        id: inputId.value,
        name: inputName.value,
        dob: inputDob.value,
        class: inputClass.value,
        gpa: inputGpa.value,
        email: inputEmail.value
    };

    if (formMode.value === "") {
        students.push(studentData);
    } else {
        const index = students.findIndex(st => st.id === formMode.value);
        if (index !== -1) students[index] = studentData;
    }

    localStorage.setItem('students', JSON.stringify(students));
    renderTable();
    studentModal.classList.add('hidden');
});

studentList.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-edit')) {
        const id = e.target.getAttribute('data-id');
        const st = students.find(s => s.id === id);
        if (st) {
            formMode.value = st.id;
            inputId.value = st.id;
            inputId.disabled = true;
            inputName.value = st.name;
            inputDob.value = st.dob;
            inputClass.value = st.class;
            inputGpa.value = st.gpa;
            inputEmail.value = st.email;
            modalTitle.innerText = "Sửa Sinh Viên";
            studentModal.classList.remove('hidden');
        }
    }
    if (e.target.classList.contains('btn-delete')) {
        const id = e.target.getAttribute('data-id');
        students = students.filter(s => s.id !== id);
        localStorage.setItem('students', JSON.stringify(students));
        renderTable();
    }
});

renderTable();