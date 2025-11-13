// ================================
// Mobile Menu Toggle
// ================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when nav link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ================================
// Smooth Scroll Enhancement
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ================================
// Scroll Animation - Fade In On View
// ================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe skill categories and project cards
const animatedElements = document.querySelectorAll('.skill-category, .project-card, .education-item');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ================================
// Active Navigation Link on Scroll
// ================================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ================================
// Add Active Link Styling
// ================================

const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
        border-bottom: 2px solid var(--primary-color);
        padding-bottom: 5px;
    }
`;
document.head.appendChild(style);

// ================================
// Navbar Background on Scroll
// ================================

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// ================================
// Skill Tags Animation on Hover
// ================================

const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ================================
// Project Tags Animation
// ================================

const projectTags = document.querySelectorAll('.tag');
projectTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(-2deg)';
    });
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// ================================
// Contact Email Links
// ================================

const contactItems = document.querySelectorAll('.contact-item');
contactItems.forEach(item => {
    item.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('mailto:')) {
            // Email links will work natively
            return;
        }
        e.preventDefault();
    });
});

// ================================
// Page Load Animation
// ================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Set initial opacity
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease-in';

// Trigger animation
setTimeout(() => {
    document.body.style.opacity = '1';
}, 100);

// ================================
// Utility: Debounce Function
// ================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ================================
// Window Resize Handler
// ================================

const handleResize = debounce(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}, 250);

window.addEventListener('resize', handleResize);

// ================================
// Accessibility: Keyboard Navigation
// ================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ================================
// Console Welcome Message
// ================================

console.log('%c Welcome to Bandi Manideep\'s Portfolio!', 'color: #10b981; font-size: 16px; font-weight: bold;');
console.log('%c Feel free to explore the website and reach out for opportunities.', 'color: #14b8a6; font-size: 14px;');
