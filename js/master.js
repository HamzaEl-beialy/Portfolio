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

// ========== 3D Tilt Card Effect ==========
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

// ========== Observe Element Once ==========
function observeElementOnce(element, className, threshold = 0.5) {
  if (!element) return;
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          element.classList.add(className);
          observer.unobserve(entry.target); // Only once
        }
      });
    },
    { threshold },
  );
  observer.observe(element);
}

// ========== Observe General Sections ==========
observeElementOnce(document.getElementById('home'), 'active1', 0.3);
observeElementOnce(document.getElementById('tiltContainer'), 'active2', 0.3);
observeElementOnce(document.getElementById('infoBox'), 'active1', 0.4);
observeElementOnce(document.getElementById('aboutImg'), 'active2', 0.4);

// ========== Contact Section ==========
const contactSection = document.getElementById('contact');
const contactLeft = document.getElementById('contactLeft');
const contactForm = document.getElementById('contact-form');

if (contactSection && contactLeft && contactForm) {
  const contactObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contactLeft.classList.add('active');
          contactForm.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );
  contactObserver.observe(contactSection);
}

// ========== Work Section (with delay & once) ==========
document.addEventListener('DOMContentLoaded', () => {
  const workSection = document.getElementById('work');
  const workProjects = document.querySelectorAll('#work .project');

  if (workSection && workProjects.length > 0) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            workProjects.forEach((project, index) => {
              setTimeout(() => {
                project.classList.add('active');
              }, index * 300); // 300ms stagger
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(workSection);
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
toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  linksContainer.classList.toggle('active');
});
