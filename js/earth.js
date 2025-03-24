document.addEventListener("DOMContentLoaded", checkPopup);

let lastKnownScrollPosition = 0;
let ticking = false;

function rotateEarth(scrollPos) {
    let earth = document.getElementById("earth");
    if (earth) {
        // Rotate Earth based on scroll position
        earth.style.transform = `rotate(${scrollPos * 0.1}deg)`;
    }
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const handleScroll = debounce(() => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            rotateEarth(lastKnownScrollPosition);
            ticking = false;
        });

        ticking = true;
    }
}, 10); // Adjust the debounce delay as needed

document.addEventListener("scroll", handleScroll);