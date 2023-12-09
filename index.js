// Created Click Function for Intro Image to Redirect to History Page

document.addEventListener("DOMContentLoaded", function() {
    const introImg = document.getElementById("introImg");
    if (introImg) {
        introImg.addEventListener("click", function() {
            window.location.href = "history.html";
        });
    }
});