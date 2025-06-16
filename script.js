/* script.js */

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add a class to the navbar on scroll for a subtle effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Adjust scroll threshold as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add a CSS rule for the 'scrolled' class in your style.css
// .navbar.scrolled {
//     background-color: rgba(33, 37, 41, 0.95) !important; /* Slightly more opaque */
//     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
// }