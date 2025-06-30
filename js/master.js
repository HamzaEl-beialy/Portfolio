const allLinks = document.querySelectorAll('.links a');
const toggleBtn = document.querySelector('.header-area .toggle-menu');
const linksContainer = document.querySelector('.header-area .links-container');

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

// ========== Global Section Activation ==========

function observeElement(element, className) {
  if (!element) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const isVisible = entry.intersectionRatio > 0;
        entry.target.classList.toggle(className, isVisible);
      });
    },
    {
      threshold: 0, // Trigger immediately on enter and leave
    },
  );

  observer.observe(element);
}

// Observe sections and elements
observeElement(document.getElementById('home'), 'active1');
observeElement(document.getElementById('tiltContainer'), 'active2');
observeElement(document.getElementById('infoBox'), 'active1');
observeElement(document.getElementById('aboutImg'), 'active2');
observeElement(document.getElementById('workContainer'), 'active');
observeElement(document.getElementById('contactLeft'), 'active');
observeElement(document.getElementById('contact-form'), 'active');

// Experience items with unique classes
[
  { id: 'cont1', className: 'active1' },
  { id: 'cont2', className: 'active2' },
  { id: 'cont3', className: 'active3' },
  { id: 'cont4', className: 'active4' },
  { id: 'cont5', className: 'active5' },
  { id: 'cont6', className: 'active6' },
].forEach(({ id, className }) => {
  observeElement(document.getElementById(id), className);
});

// ========== Mobile Menu Toggle ==========

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  linksContainer.classList.toggle('active');
});
