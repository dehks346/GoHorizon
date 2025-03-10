document.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    let earth = document.getElementById("earth");

    // Rotate Earth based on scroll position
    earth.style.transform = `rotate(${scrollY * 0.1}deg)`;
});
