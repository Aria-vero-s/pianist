document.addEventListener('DOMContentLoaded', function() {
    const requestQuoteButtons = document.querySelectorAll('.request-quote-button');

    requestQuoteButtons.forEach(button => {
        button.addEventListener('click', () => {
            // You can implement a custom form or link to a contact form for requesting a quote
            // Example: window.location.href = 'contact.html';
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Add this event listener to close the mobile menu when a navigation link is clicked
    const navLinksList = document.querySelectorAll(".nav-links li");
    navLinksList.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            document.querySelector(".navbar").classList.add("active");
            document.querySelector(".nav-links").classList.add("active-bg");
        } else {
            document.querySelector(".navbar").classList.remove("active");
            document.querySelector(".nav-links").classList.remove("active-bg");
        }
    });
});
