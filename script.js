// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Add a slight delay to the outline for a smooth trailing effect
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Cursor hover effects on interactable elements
const interactables = document.querySelectorAll('a, button, input, textarea');

interactables.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.style.width = '50px';
        cursorOutline.style.height = '50px';
        cursorOutline.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursorOutline.style.width = '30px';
        cursorOutline.style.height = '30px';
        cursorOutline.style.backgroundColor = 'transparent';
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Text Scramble effect removed as per user request

// Scroll Reveal Animation using Intersection Observer
const reveals = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('active');
            // Stop observing once revealed to keep the state
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

reveals.forEach(reveal => {
    revealOnScroll.observe(reveal);
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').substring(1) === current) {
            item.classList.add('active');
        }
    });
});

// Remove cursor effects on mobile devices where hover isn't natural
if (window.matchMedia("(max-width: 768px)").matches) {
    cursorDot.style.display = 'none';
    cursorOutline.style.display = 'none';
}

// Typewriter effect for Hero section
document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        // Read text and clear it
        const nameText = nameElement.textContent;
        nameElement.textContent = "";
        
        // Add cursor style
        nameElement.style.borderRight = "2px solid var(--text-main)";
        nameElement.style.paddingRight = "8px";
        nameElement.style.width = "fit-content";
        nameElement.style.animation = "blinkCursor 0.8s infinite step-end";

        let currentI = 0;
        function typeWriter() {
            if (currentI < nameText.length) {
                nameElement.textContent += nameText.charAt(currentI);
                currentI++;
                // Randomize typing speed for realism
                const randomTime = Math.random() * (120 - 40) + 40;
                setTimeout(typeWriter, randomTime);
            }
        }
        
        // Start typing after a short delay
        setTimeout(typeWriter, 600);
    }
});
