const toggleButton = document.querySelector('.navbar__toggle');
const navbarLinks = document.querySelector('.navbar__links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});