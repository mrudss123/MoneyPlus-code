function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    const sidebar = document.querySelector('.sidebar');
    const header = document.querySelector('.header');
    const mainContent = document.querySelector('.main-content');

    sidebar.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode");
    mainContent.classList.toggle("dark-mode");

    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        table.classList.toggle("dark-mode");
    });
}