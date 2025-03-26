const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.img');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
let currentIndex = 0;

// Function to update active dot
function updateActiveDot() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Function to show a slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    updateActiveDot();
}

// Next Slide
rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

// Previous Slide
leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

// Add event listeners to dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(index);
    });
});

// Initialize
showSlide(0);
