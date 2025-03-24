const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
if (window.scrollY > 10) {
    header.classList.add('scrolled');
} else {
    header.classList.remove('scrolled');
}
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
menuToggle.classList.toggle('active');
mobileMenu.classList.toggle('active');
document.body.classList.toggle('menu-open');
});