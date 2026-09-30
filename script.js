// Online Exam System JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Welcome message
    console.log("Online Exam System loaded successfully.");

    // Start Exam button
    const startExam = document.querySelector(".btn-primary");

    if (startExam) {
        startExam.addEventListener("click", function (event) {
            event.preventDefault();

            alert("Please login to start the exam.");

            window.location.href = "login.html";
        });
    }

    // Register button
    const registerButton = document.querySelector(".btn-secondary");

    if (registerButton) {
        registerButton.addEventListener("click", function () {
            console.log("Opening registration page...");
        });
    }

    // Smooth scrolling for navigation links
    const featureLink = document.querySelector('a[href="#features"]');

    if (featureLink) {
        featureLink.addEventListener("click", function (event) {
            event.preventDefault();

            document.querySelector("#features").scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    // Feature card animation
    const cards = document.querySelectorAll(".feature-card");

    cards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {
            card.style.transform = "translateY(-8px)";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "translateY(0)";
        });

    });

});