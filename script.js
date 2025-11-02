document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const header = document.getElementById('main-header');
    const sections = document.querySelectorAll('section');
    const footer = document.getElementById('main-footer');

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else {
        // Default to dark mode if no preference is saved
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }

    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });

    // Optional: Add scroll-based effects if desired
    // Example: Shrink header on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            header.style.fontSize = '0.9em';
        } else {
            header.style.padding = '1rem 0';
            header.style.fontSize = '1em';
        }

        // Example: Animate sections into view (requires more complex CSS/JS)
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            if (sectionTop < screenHeight * 0.75) { // When 75% of section is visible
                section.classList.add('is-visible'); // Add a class for CSS animations
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - header.offsetHeight, // Adjust for sticky header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact form submission (basic example, no backend)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message, seeker of shadows! We will be in touch soon.');
            contactForm.reset();
        });
    }
});