const themeButton = document.querySelector("#theme-btn");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "☀️ Light Mode";

    } else {

        themeButton.textContent = "🌙 Dark Mode";

    }

});


const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert("Thanks for reaching out! I'll get back to you soon.");

    contactForm.reset();

});


const menuButton = document.querySelector("#menu-btn");

const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});