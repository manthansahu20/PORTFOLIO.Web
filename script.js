// 1. Init Animations
if (typeof AOS !== 'undefined') { AOS.init({ duration: 1000, once: false }); }

// 2. Typing Effect (Home Page)
if (document.querySelector('.typing-text')) {
    new Typed('.typing-text', {
        strings: ['Software Solutions 💻', 'C++ Logic ⚙️', 'Scalable Apps 🚀'],
        typeSpeed: 80, backSpeed: 50, loop: true
    });
}

// 3. Particles Background
if (document.getElementById('particles-js')) {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 50 },
            "color": { "value": "#64ffda" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5 },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#64ffda", "opacity": 0.2, "width": 1 },
            "move": { "enable": true, "speed": 1.5 }
        },
        "interactivity": {
            "events": { "onhover": { "enable": true, "mode": "grab" } }
        }
    });
}

// 4. Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '90px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = '#0a192f';
            navLinks.style.padding = '20px';
            navLinks.style.borderBottom = '1px solid #64ffda';
        }
    });
}
