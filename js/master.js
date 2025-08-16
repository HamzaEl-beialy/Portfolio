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
const themeBtn = document.querySelector('.theme-btn');
themeBtn?.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themeBtn.querySelector('span.sun')?.classList.toggle('active');
  themeBtn.querySelector('span.moon')?.classList.toggle('active');
});

// ========== Observe Element Once ==========
function observeElementOnce(element, className, threshold = 0.5) {
  if (!element) return;
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          element.classList.add(className);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold },
  );
  observer.observe(element);
}

// ========== Observe General Sections ==========
observeElementOnce(document.getElementById('home'), 'active1', 0.3);
observeElementOnce(document.getElementById('tiltWrapper'), 'active2', 0.3);
observeElementOnce(document.getElementById('infoBox'), 'active1', 0.4);
observeElementOnce(document.getElementById('aboutImg'), 'active2', 0.4);

// ========== Contact Section ==========
const contactSection = document.getElementById('contact');
const contactForm = document.getElementById('contact-form');

if (contactSection && contactForm) {
  const contactObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contactForm.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );
  contactObserver.observe(contactSection);
}
// ========== Work Section (each project + delay) ==========
document.addEventListener('DOMContentLoaded', () => {
  const workProjects = document.querySelectorAll('#work .project');

  if (workProjects.length > 0) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(workProjects).indexOf(entry.target);
            setTimeout(() => {
              entry.target.classList.add('active');
            }, index * 300);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    // Observe each project
    workProjects.forEach((project) => observer.observe(project));
  }
});

// ========== Experience Cards ==========
const experienceCards = [
  { id: 'cont1', className: 'active1' },
  { id: 'cont2', className: 'active2' },
  { id: 'cont3', className: 'active3' },
  { id: 'cont4', className: 'active4' },
  { id: 'cont5', className: 'active5' },
  { id: 'cont6', className: 'active6' },
];
experienceCards.forEach(({ id, className }) => {
  observeElementOnce(document.getElementById(id), className, 0.5);
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

let i = 0; // Current text index
let j = 0; // Character index
let isDeleting = false;
let speed = 120; // Typing speed

function typeEffect() {
  const typingElement = document.getElementById('typing');
  const currentText = textArray[i];

  if (!isDeleting) {
    typingElement.textContent = currentText.substring(0, j++);
    if (j > currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1800); // Pause before deleting
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
setTimeout(() => {
  document.querySelector('.tilt-wrapper').classList.add('animated-tilt');
}, 1000);
particlesJS('particles-js', {
  particles: {
    number: { value: 60 },
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
