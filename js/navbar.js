document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".navbar__toggle");
    const navbarLinks = document.querySelector(".navbar__links");

    toggleButton.addEventListener("click", () => {
        if (navbarLinks.style.maxHeight) {
            navbarLinks.style.maxHeight = null;
        } else {
            navbarLinks.style.maxHeight = navbarLinks.scrollHeight + "px";
        }
    });
});