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
      toggleBtn.classList.remove('active');
      linksContainer.classList.remove('active');
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
scrollTopBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== 3D Card Effect ==========
const card = document.getElementById('tiltCard');
const container = document.getElementById('tiltContainer');
if (card && container) {
  container.addEventListener('mousemove', (e) => {
    const bounds = container.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    const xRotation = ((e.clientY - centerY) / 20).toFixed(2);
    const yRotation = ((centerX - e.clientX) / 20).toFixed(2);
    card.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.08)`;
    card.style.transition = 'transform 0.1s ease';
  });

  container.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.2s ease';
  });

  container.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.5s ease';
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  });
}

// ========== Generic Observer ==========
function observeElement(element, className, threshold = 0.5) {
  if (!element) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        element.classList.toggle(className, entry.isIntersecting);
      });
    },
    { threshold },
  );
  observer.observe(element);
}

// Observe general sections
observeElement(document.getElementById('home'), 'active1', 0.3);
observeElement(document.getElementById('tiltContainer'), 'active2', 0.3);
observeElement(document.getElementById('infoBox'), 'active1', 0.4);
observeElement(document.getElementById('aboutImg'), 'active2', 0.4);

// ========== Contact Section ==========
const contactSection = document.getElementById('contact');
const contactLeft = document.getElementById('contactLeft');
const contactForm = document.getElementById('contact-form');

if (contactSection && contactLeft && contactForm) {
  const contactObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const visible = entry.isIntersecting;
        contactLeft.classList.toggle('active', visible);
        contactForm.classList.toggle('active', visible);
      });
    },
    { threshold: 0.5 },
  );
  contactObserver.observe(contactSection);
}

// ========== Work Section with Delays ==========
const workSection = document.getElementById('work');
const work1 = document.getElementById('work1');
const work2 = document.getElementById('work2');
const work3 = document.getElementById('work3');

if (workSection && work1 && work2 && work3) {
  const workObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When any part of #work is visible, activate children with delay
          work1.classList.add('active');
          setTimeout(() => work2.classList.add('active'), 500);
          setTimeout(() => work3.classList.add('active'), 1000);
        } else if (entry.intersectionRatio === 0) {
          // Only remove when #work is fully out of view
          work1.classList.remove('active');
          work2.classList.remove('active');
          work3.classList.remove('active');
        }
      });
    },
    {
      root: null,
      threshold: [0, 0.01],
    },
  );

  workObserver.observe(workSection);
}

// ========== Experience Items ==========
const experienceCards = [
  { id: 'cont1', className: 'active1' },
  { id: 'cont2', className: 'active2' },
  { id: 'cont3', className: 'active3' },
  { id: 'cont4', className: 'active4' },
  { id: 'cont5', className: 'active5' },
  { id: 'cont6', className: 'active6' },
];
experienceCards.forEach(({ id, className }) => {
  observeElement(document.getElementById(id), className, 0.5);
});

// ========== Mobile Menu ==========
const toggleBtn = document.querySelector('.header-area .toggle-menu');
const linksContainer = document.querySelector('.header-area .links-container');
toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  linksContainer.classList.toggle('active');
});
