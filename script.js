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

    origin: 'right',

    distance: '40px',

    duration: 1200,

    reset: false

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

            const activeLink =
                document.querySelector('header a[href*=' + id + ']');

            if(activeLink) {

                activeLink.classList.add('active');

            }
        }

    });

};

// ================= APPLE NAVBAR EFFECT =================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50) {

        navbar.classList.add('scrolled');

    } else {

        navbar.classList.remove('scrolled');

    }

});

// ================= PARTICLES BACKGROUND =================

// ================= PARTICLES BACKGROUND =================

if (window.tsParticles) {

    tsParticles.load("particles-js", {

        background: {
            color: "transparent"
        },

        particles: {

            number: {
                value: 45
            },

            color: {
                value: "#3b82f6"
            },

            links: {
                enable: true,

                color: "#3b82f6",

                distance: 150,

                opacity: 0.2
            },

            move: {
                enable: true,

                speed: 1
            },

            opacity: {
                value: 0.3
            },

            size: {
                value: {
                    min: 1,
                    max: 4
                }
            }

        }

    });

}

// ================= CUSTOM GLOW CURSOR =================

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {

    cursor.style.left = e.clientX + 'px';

    cursor.style.top = e.clientY + 'px';

});

// Cursor Expand on Hover

const hoverElements = document.querySelectorAll(
    'a, button, .btn, .project-card, .skill-card'
);

hoverElements.forEach(el => {

    el.addEventListener('mouseenter', () => {

        cursor.style.width = '45px';
        cursor.style.height = '45px';

        cursor.style.background =
            'rgba(139, 92, 246, 0.8)';

    });

    el.addEventListener('mouseleave', () => {

        cursor.style.width = '22px';
        cursor.style.height = '22px';

        cursor.style.background =
            'rgba(59, 130, 246, 0.9)';

    });

});

// ================= LOADER =================

window.addEventListener('load', () => {

    const loader =
        document.querySelector('.loader-wrapper');

    setTimeout(() => {

        loader.classList.add('hidden');

    }, 1800);

});

// ================= THEME TOGGLE =================

const themeToggle =
    document.querySelector('.theme-toggle');

themeToggle.addEventListener('click', () => {

    document.body.classList.toggle('light-mode');

    // Save Theme

    if(document.body.classList.contains('light-mode')) {

        localStorage.setItem('theme', 'light');

    } else {

        localStorage.setItem('theme', 'dark');

    }

});

// Load Saved Theme

if(localStorage.getItem('theme') === 'light') {

    document.body.classList.add('light-mode');

}

// ================= EMAILJS CONTACT FORM =================

(function () {

    emailjs.init("sjOWIOHYFDYJhYBq_");

})();

const contactForm =
    document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {

    e.preventDefault();

    emailjs.sendForm(
        'service_utmv4o4',
        'template_9b7rddb',
        this
    )

    .then(() => {

        alert("Message Sent Successfully!");

        contactForm.reset();

    })

    .catch((error) => {

        alert("Failed to Send Message");

        console.log("EMAILJS ERROR:", error);

    });

});

// ================= MOBILE MENU =================

const menuToggle =
    document.querySelector('.menu-toggle');

const navMenu =
    document.querySelector('.nav-links');

if(menuToggle) {

    menuToggle.addEventListener('click', () => {

        navMenu.classList.toggle('active');

    });

}

// Close Menu on Link Click

document.querySelectorAll('.nav-links a')
.forEach(link => {

    link.addEventListener('click', () => {

        navMenu.classList.remove('active');

    });

});

// ================= IMAGE MODAL =================

const projectImages =
    document.querySelectorAll('.project-card img');

const imageModal =
    document.querySelector('.image-modal');

const modalImage =
    document.querySelector('.modal-image');

const closeModal =
    document.querySelector('.close-modal');

// Open Modal

projectImages.forEach(img => {

    img.addEventListener('click', () => {

        imageModal.classList.add('active');

        modalImage.src = img.src;

    });

});

// Close Modal

if(closeModal) {

    closeModal.addEventListener('click', () => {

        imageModal.classList.remove('active');

    });

}

// Close on Background Click

if(imageModal) {

    imageModal.addEventListener('click', (e) => {

        if(e.target === imageModal) {

            imageModal.classList.remove('active');

        }

    });

}

// ================= AI CHATBOT =================

const chatbotToggle =
    document.querySelector('.chatbot-toggle');

const chatbotContainer =
    document.querySelector('.chatbot-container');

const closeChat =
    document.querySelector('.close-chat');

const sendBtn =
    document.getElementById('send-btn');

const chatInput =
    document.getElementById('chat-input');

const chatbotBody =
    document.querySelector('.chatbot-body');

// Open Chat

if(chatbotToggle) {

    chatbotToggle.addEventListener('click', () => {

        chatbotContainer.classList.toggle('active');

    });

}

// Close Chat

if(closeChat) {

    closeChat.addEventListener('click', () => {

        chatbotContainer.classList.remove('active');

    });

}

// Send Message

if(sendBtn) {

    sendBtn.addEventListener('click', sendMessage);

}

if(chatInput) {

    chatInput.addEventListener('keypress', (e) => {

        if(e.key === 'Enter') {

            sendMessage();

        }

    });

}

function sendMessage() {

    const message =
        chatInput.value.trim();

    if(message === '') return;

    // User Message

    const userMsg =
        document.createElement('div');

    userMsg.classList.add('user-message');

    userMsg.innerHTML = message;

    chatbotBody.appendChild(userMsg);

    // Bot Reply

    const botMsg =
        document.createElement('div');

    botMsg.classList.add('bot-message');

    botMsg.innerHTML =
        getBotReply(message);

    setTimeout(() => {

        chatbotBody.appendChild(botMsg);

        chatbotBody.scrollTop =
            chatbotBody.scrollHeight;

    }, 600);

    chatInput.value = '';
}

// AI Replies

function getBotReply(message) {

    message = message.toLowerCase();

    if(message.includes('skills')) {

        return 'Siddharth works with HTML, CSS, JavaScript, UI/UX Design, Responsive Design, GitHub, and frontend technologies.';

    }

    if(message.includes('projects')) {

        return 'Main projects include VAHANAVEDHIKA, SAMVAAD AI, and Digital Banking Management Solution.';

    }

    if(message.includes('contact')) {

        return 'You can contact Siddharth via email at bksiddhartha05@gmail.com';

    }

    if(message.includes('who')) {

        return 'Siddharth is a Frontend Developer and AIML student passionate about futuristic web experiences.';

    }

    return 'Thanks for your message 👋';
}

// ================= GSAP HERO ANIMATION =================

gsap.from('.logo', {

    y: -50,
    opacity: 0,
    duration: 1,

});

gsap.from('.navbar a', {

    y: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.1

});

gsap.from('.hero-content h1', {

    x: -100,
    opacity: 0,
    duration: 1.2

});

gsap.from('.hero-content h3', {

    x: -80,
    opacity: 0,
    duration: 1.2,
    delay: 0.3

});

gsap.from('.hero-content p', {

    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5

});

gsap.from('.hero-buttons .btn', {

    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    delay: 0.7

});

// ================= 3D PROJECT CARD EFFECT =================

const projectCards =
    document.querySelectorAll('.project-card');

projectCards.forEach(card => {

    card.addEventListener('mousemove', (e) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -8;

        const rotateY =
            ((x - centerX) / centerX) * 8;

        card.style.transform =
            `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.03)
            `;

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform =
            `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
            `;

    });

});

// ================= MAGNETIC BUTTON EFFECT =================

const magneticButtons =
    document.querySelectorAll('.btn');

magneticButtons.forEach(btn => {

    btn.addEventListener('mousemove', (e) => {

        const rect =
            btn.getBoundingClientRect();

        const x =
            e.clientX - rect.left - rect.width / 2;

        const y =
            e.clientY - rect.top - rect.height / 2;

        btn.style.transform =
            `translate(${x * 0.2}px, ${y * 0.2}px)`;

    });

    btn.addEventListener('mouseleave', () => {

        btn.style.transform =
            'translate(0px, 0px)';

    });

});

