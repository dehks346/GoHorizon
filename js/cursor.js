const circle = document.querySelector('.circle');

// Mouse movement tracking to follow cursor
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Adjust the circle's position, accounting for scroll
  circle.style.left = `${mouseX - circle.offsetWidth / 2}px`;
  circle.style.top = `${mouseY + window.scrollY - circle.offsetHeight / 2}px`; // Adjusted for scrolling
});
