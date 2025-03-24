// popup.js

function showPopup() {
    document.getElementById("popupOverlay").style.display = "block";
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
    document.getElementById("popup").style.display = "none";
    
    // Store the current timestamp when the popup is dismissed
    localStorage.setItem("popupDismissed", Date.now());
}

function checkPopup() {
    let lastDismissed = localStorage.getItem("popupDismissed");

    if (lastDismissed) {
        let timePassed = (Date.now() - lastDismissed) / (1000 * 60 * 60); // Convert to hours
        if (timePassed < 1) {
            return; // Less than 2 hours, don't show the popup
        }
    }

    // Show the popup if 2+ hours have passed
    showPopup();
}

document.addEventListener("DOMContentLoaded", checkPopup);

document.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    let earth = document.getElementById("earth");

    // Rotate Earth based on scroll position
    earth.style.transform = `rotate(${scrollY * 0.1}deg)`;
});
