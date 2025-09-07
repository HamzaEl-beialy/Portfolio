// ========== Smooth Scroll for Links ==========
const allLinks = document.querySelectorAll('.links a');

function scrollToSomewhere(elements) {
  elements.forEach((ele) => {
    ele.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSelector =
        e.target.dataset.section || e.target.getAttribute('href');
      const target = document.querySelector(targetSelector);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      toggleBtn?.classList.remove('active');
      linksContainer?.classList.remove('active');
      allLinks.forEach((link) => link.classList.remove('active'));
      e.target.classList.add('active');
    });
  });
}
scrollToSomewhere(allLinks);
// ========== Scroll To Top Button ==========
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('active', window.scrollY > 100);
});
/* =========================================================
 * Theme Toggle Button
 * ========================================================= */
// const themeBtn = document.querySelector('.theme-btn');
// themeBtn?.addEventListener('click', () => {
//   document.body.classList.toggle('dark-theme');
//   themeBtn.querySelector('span.sun')?.classList.toggle('active');
//   themeBtn.querySelector('span.moon')?.classList.toggle('active');
// });
/* =========================================================
 * Theme Toggle Button with Local Storage
 * ========================================================= */
/* =========================================================
 * Theme Toggle Button with Local Storage (Corrected Icons)
 * ========================================================= */
const themeBtn = document.querySelector('.theme-btn');

// Check saved theme on load
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  // Dark mode → Moon active
  themeBtn?.querySelector('span.moon')?.classList.add('active');
  themeBtn?.querySelector('span.sun')?.classList.remove('active');
} else {
  document.body.classList.remove('dark-theme');
  // Light mode → Sun active
  themeBtn?.querySelector('span.sun')?.classList.add('active');
  themeBtn?.querySelector('span.moon')?.classList.remove('active');
}

// Toggle theme on button click
themeBtn?.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  const isDark = document.body.classList.contains('dark-theme');

  if (isDark) {
    localStorage.setItem('theme', 'dark');
    // Dark mode → Moon active
    themeBtn.querySelector('span.moon')?.classList.add('active');
    themeBtn.querySelector('span.sun')?.classList.remove('active');
  } else {
    localStorage.setItem('theme', 'light');
    // Light mode → Sun active
    themeBtn.querySelector('span.sun')?.classList.add('active');
    themeBtn.querySelector('span.moon')?.classList.remove('active');
  }
});

// ========== Mobile Menu ==========
const toggleBtn = document.querySelector('.header-area .toggle-menu');
const linksContainer = document.querySelector('.header-area .links-container');
if (toggleBtn && linksContainer) {
  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    linksContainer.classList.toggle('active');
  });
}
// animation for typing effect
const textArray = [
  'Creative Front-End Developer',
  'React.js & UI/UX Specialist',
  'HTML, CSS & JavaScript Expert',
  'Photoshop & Visual Design Pro',
  'Some Backend Development Skills',
];

let i = 0;
let j = 0;
let isDeleting = false;
let speed = 120;

function typeEffect() {
  const typingElement = document.getElementById('typing');
  const currentText = textArray[i];

  if (!isDeleting) {
    typingElement.textContent = currentText.substring(0, j++);
    if (j > currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1800);
      return;
    }
  } else {
    typingElement.textContent = currentText.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % textArray.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 60 : speed);
}
typeEffect();
VanillaTilt.init(document.querySelector('.hero-img'), {
  max: 10,
  speed: 300,
  glare: false,
});
particlesJS('particles-js', {
  particles: {
    number: {
      value: 50,
    },
    color: { value: '#1d7ddd' },
    shape: { type: 'circle' },
    opacity: { value: 0.8 },
    size: { value: 4, random: true },
    move: { enable: true, speed: 2 },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: 'repulse' },
    },
  },
});
function updateAOS() {
  if (window.innerWidth <= 867) {
    for (let i = 1; i <= 6; i++) {
      const el = document.getElementById(`cont${i}`);
      if (el) {
        el.setAttribute('data-aos', 'fade-down-right');
      }
    }
  } else {
    document
      .getElementById('cont1')
      ?.setAttribute('data-aos', 'fade-down-right');
    document
      .getElementById('cont2')
      ?.setAttribute('data-aos', 'fade-down-left');
    document
      .getElementById('cont3')
      ?.setAttribute('data-aos', 'fade-down-right');
    document
      .getElementById('cont4')
      ?.setAttribute('data-aos', 'fade-down-left');
    document
      .getElementById('cont5')
      ?.setAttribute('data-aos', 'fade-down-right');
    document
      .getElementById('cont6')
      ?.setAttribute('data-aos', 'fade-down-left');
  }

  AOS.refresh();
}
window.addEventListener('load', updateAOS);
window.addEventListener('resize', updateAOS);
