const menuToggle = document.getElementById('menu-toggle');
const menuHeader = document.querySelector('.menu-header');

menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('active');
    menuHeader.classList.toggle('menu-open');
});