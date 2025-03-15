// popup.js

function showPopup() {
    document.getElementById("popupOverlay").style.display = "block";
    document.getElementById("popupBox").style.display = "block";
}

function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
    document.getElementById("popupBox").style.display = "none";
    
    // Store the current timestamp when the popup is dismissed
    localStorage.setItem("popupDismissed", Date.now());
}

function checkPopup() {
    let lastDismissed = localStorage.getItem("popupDismissed");

    if (lastDismissed) {
        let timePassed = (Date.now() - lastDismissed) / (1000 * 60 * 60); // Convert to hours
        if (timePassed < 0.00001) {
            return; // Less than 2 hours, don't show the popup
        }
    }

    // Show the popup if 2+ hours have passed
    showPopup();
}

document.addEventListener("DOMContentLoaded", checkPopup);

