// ===== UTILITY FUNCTIONS =====

// Hàm hiển thị thông báo
function showMessage(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} fade-in`;
    alertDiv.textContent = message;
    
    // Thêm vào đầu container hoặc body
    const container = document.querySelector('.container') || document.body;
    container.insertBefore(alertDiv, container.firstChild);
    
    // Tự động xóa sau 5 giây
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

// Hàm validate email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Hàm validate password (ít nhất 8 ký tự, có chữ hoa, chữ thường, số)
function validatePassword(password) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const isLengthValid = password.length >= 8;
    
    return hasUpperCase && hasLowerCase && hasNumber && isLengthValid;
}

// Hàm sanitize input để tránh XSS
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

// Hàm format thời gian MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Hàm highlight active nav
function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Chạy khi DOM load xong
document.addEventListener('DOMContentLoaded', () => {
    highlightActiveNav();
});

// ===== BAITAP01: PRODUCT SEARCH =====
function initProductSearch() {
    const products = [
        { id: 1, name: 'Laptop Dell XPS 13', price: 25000000, category: 'Laptop', image: 'https://via.placeholder.com/200x150?text=Laptop+Dell' },
        { id: 2, name: 'iPhone 15 Pro Max', price: 30000000, category: 'Điện thoại', image: 'https://via.placeholder.com/200x150?text=iPhone+15' },
        { id: 3, name: 'Samsung Galaxy S24', price: 22000000, category: 'Điện thoại', image: 'https://via.placeholder.com/200x150?text=Samsung+S24' },
        { id: 4, name: 'MacBook Pro M3', price: 45000000, category: 'Laptop', image: 'https://via.placeholder.com/200x150?text=MacBook+Pro' },
        { id: 5, name: 'iPad Air 2024', price: 18000000, category: 'Máy tính bảng', image: 'https://via.placeholder.com/200x150?text=iPad+Air' },
        { id: 6, name: 'AirPods Pro 2', price: 6000000, category: 'Phụ kiện', image: 'https://via.placeholder.com/200x150?text=AirPods+Pro' },
        { id: 7, name: 'Sony WH-1000XM5', price: 8000000, category: 'Phụ kiện', image: 'https://via.placeholder.com/200x150?text=Sony+Headphone' }
    ];

    return products;
}

// ===== BAITAP02: FORM VALIDATION =====
function initFormValidation() {
    // Code sẽ được viết trong baitap02.html
}

// ===== BAITAP03: COUNTDOWN TIMER =====
function initCountdownTimer() {
    // Code sẽ được viết trong baitap03.html
}
