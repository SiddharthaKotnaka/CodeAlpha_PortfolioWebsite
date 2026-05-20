// ================= SCROLL REVEAL ANIMATION =================

ScrollReveal({

    distance: '80px',
    duration: 2000,
    delay: 200,

});

// Hero Section

ScrollReveal().reveal('.hero-content', {
    origin: 'left'
});

ScrollReveal().reveal('.hero-image', {
    origin: 'right'
});

// About Section

ScrollReveal().reveal('.about-image', {
    origin: 'left'
});

ScrollReveal().reveal('.about-content', {
    origin: 'right'
});

// Skills

ScrollReveal().reveal('.skill-card', {
    interval: 200
});

// Projects

ScrollReveal().reveal('.project-card', {
    interval: 200
});

// Contact

ScrollReveal().reveal('.contact-info', {
    origin: 'left'
});

ScrollReveal().reveal('.contact-form', {
    origin: 'right'
});

// ================= TYPING ANIMATION =================

const typed = new Typed('.multiple-text', {

    strings: [
        'Frontend Developer',
        'AIML Student',
        'UI/UX Learner',
        'Content Creator'
    ],

    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,

    loop: true

});

// ================= ACTIVE NAVBAR =================

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    let top = window.scrollY;

    sections.forEach(sec => {

        let offset = sec.offsetTop - 150;

        let height = sec.offsetHeight;

        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            navLinks.forEach(links => {
                links.classList.remove('active');
            });

            document.querySelector('header nav a[href*=' + id + ']')
                .classList.add('active');
        }

    });

};