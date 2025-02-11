document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar");
    const closeMenuBtn = document.getElementById("close-menu");
    const themeToggle = document.getElementById("theme-toggle");

    // Mở menu
    menuBtn.addEventListener("click", function() {
        sidebar.classList.add("active");
    });

    // Đóng menu
    closeMenuBtn.addEventListener("click", function() {
        sidebar.classList.remove("active");
    });

    // Chuyển chế độ sáng/tối
    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("light-mode");

        // Đổi biểu tượng nút
        if (document.body.classList.contains("light-mode")) {
            themeToggle.textContent = "🌞";
        } else {
            themeToggle.textContent = "🌙";
        }
    });
});

// Hiển thị section được chọn
function showSection(id) {
    document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(id).classList.add("active");

    // Đóng menu sau khi chọn
    document.getElementById("sidebar").classList.remove("active");
}
