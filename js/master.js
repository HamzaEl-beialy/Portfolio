// Select all navigation links
const allLinks = document.querySelectorAll('.links a');

// Smooth scroll to section on click
function scrollToSomewhere(elements) {
  elements.forEach((ele) => {
    ele.addEventListener('click', (e) => {
      e.preventDefault();

      // Scroll to section defined in data-section attribute or href
      const targetSelector =
        e.target.dataset.section || e.target.getAttribute('href');
      const target = document.querySelector(targetSelector);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
scrollToSomewhere(allLinks);

// Handle the 'active' class for navigation links
function handleActive(ev) {
  // Remove 'active' class from all siblings
  ev.target.parentElement.querySelectorAll('.active').forEach((element) => {
    element.classList.remove('active');
  });
}

allLinks.forEach((link) => link.addEventListener('click', handleActive));

// ========== Scroll To Top Button ==========

const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollTopBtn.classList.add('active');
  } else {
    scrollTopBtn.classList.remove('active');
  }
});

scrollTopBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== Tilt Card Effect on Mouse Move ==========

const card = document.getElementById('tiltCard');
const container = document.getElementById('tiltContainer');

container.addEventListener('mousemove', (e) => {
  const bounds = container.getBoundingClientRect();
  const centerX = bounds.left + bounds.width / 2;
  const centerY = bounds.top + bounds.height / 2;

  const xRotation = ((e.clientY - centerY) / 20).toFixed(2);
  const yRotation = ((centerX - e.clientX) / 20).toFixed(2);

  card.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.08)`;
});

container.addEventListener('mouseenter', () => {
  card.style.transition = 'transform 0.15s ease';
});
container.addEventListener('mouseleave', () => {
  card.style.transition = 'transform 0.3s ease';
  card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
});

// DOM elements
const showText = document.getElementById('home');
const tiltCard = document.getElementById('tiltContainer');
const aboutText = document.getElementById('infoBox');
const aboutImg = document.getElementById('aboutImg');
const contactLeft = document.getElementById('contactLeft');
const contactForm = document.getElementById('contact-form');

const experienceElementsLarge = [
  {
    el: document.getElementById('cont1'),
    min: 48 * 16,
    max: 117 * 16,
    class: 'active1',
  },
  {
    el: document.getElementById('cont2'),
    min: 55 * 16,
    max: 124 * 16,
    class: 'active2',
  },
  {
    el: document.getElementById('cont3'),
    min: 62 * 16,
    max: 131 * 16,
    class: 'active3',
  },
  {
    el: document.getElementById('cont4'),
    min: 69 * 16,
    max: 138 * 16,
    class: 'active4',
  },
  {
    el: document.getElementById('cont5'),
    min: 76 * 16,
    max: 145 * 16,
    class: 'active5',
  },
  {
    el: document.getElementById('cont6'),
    min: 83 * 16,
    max: 152 * 16,
    class: 'active6',
  },
];

const experienceElementsSmall = [
  {
    el: document.getElementById('cont1'),
    min: 54 * 16,
    max: 129 * 16,
    class: 'active1',
  },
  {
    el: document.getElementById('cont2'),
    min: 62 * 16,
    max: 131 * 16,
    class: 'active2',
  },
  {
    el: document.getElementById('cont3'),
    min: 70 * 16,
    max: 139 * 16,
    class: 'active3',
  },
  {
    el: document.getElementById('cont4'),
    min: 78 * 16,
    max: 147 * 16,
    class: 'active4',
  },
  {
    el: document.getElementById('cont5'),
    min: 86 * 16,
    max: 155 * 16,
    class: 'active5',
  },
  {
    el: document.getElementById('cont6'),
    min: 94 * 16,
    max: 163 * 16,
    class: 'active6',
  },
];

const contactTriggersLarge = [
  { el: contactLeft, min: 115 * 16, max: 185 * 16, class: 'active1' },
  { el: contactForm, min: 115 * 16, max: 185 * 16, class: 'active2' },
];

const contactTriggersSmall = [
  // { el: contactLeft, min: 145 * 16, max: 250 * 16, class: 'active1' },
  { el: contactForm, min: 110 * 16, max: 250 * 16, class: 'active2' },
];

// Trigger ranges
const textTriggerAtLarge = 27 * 16;
const cardTriggerAtLarge = 27 * 16;
const aboutMinTriggerLarge = 11 * 16;
const aboutMaxTriggerLarge = 65 * 16;

const textTriggerAtSmall = 35 * 16;
const cardTriggerAtSmall = 35 * 16;
const aboutMinTriggerSmall = 13 * 16;
const aboutMaxTriggerSmall = 90 * 16;

// On page load, activate home section animations
window.addEventListener('load', () => {
  showText.classList.add('active1');
  tiltCard.classList.add('active2');
});

// Scroll event with responsive behavior
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const isSmallScreen = window.innerWidth <= 870;

  if (!isSmallScreen) {
    // Large screen behavior
    showText.classList.toggle('active1', scrollY < textTriggerAtLarge);
    tiltCard.classList.toggle('active2', scrollY < cardTriggerAtLarge);

    const isInAboutRange =
      scrollY >= aboutMinTriggerLarge && scrollY <= aboutMaxTriggerLarge;
    aboutText.classList.toggle('active1', isInAboutRange);
    aboutImg.classList.toggle('active2', isInAboutRange);

    experienceElementsLarge.forEach(({ el, min, max, class: className }) => {
      const isInRange = scrollY >= min && scrollY < max;
      el.classList.toggle(className, isInRange);
    });

    contactTriggersLarge.forEach(({ el, min, max, class: className }) => {
      const isInRange = scrollY >= min && scrollY < max;
      el.classList.toggle(className, isInRange);
    });
  } else {
    // Small screen behavior: use different trigger ranges (customize here)
    showText.classList.toggle('active1', scrollY < textTriggerAtSmall);
    tiltCard.classList.toggle('active2', scrollY < cardTriggerAtSmall);

    const isInAboutRange =
      scrollY >= aboutMinTriggerSmall && scrollY <= aboutMaxTriggerSmall;
    aboutText.classList.toggle('active1', isInAboutRange);
    aboutImg.classList.toggle('active2', isInAboutRange);

    experienceElementsSmall.forEach(({ el, min, max, class: className }) => {
      const isInRange = scrollY >= min && scrollY < max;
      el.classList.toggle(className, isInRange);
    });

    contactTriggersSmall.forEach(({ el, min, max, class: className }) => {
      const isInRange = scrollY >= min && scrollY < max;
      el.classList.toggle(className, isInRange);
    });
  }
});

// Optional: Handle window resize to re-apply scroll logic correctly
window.addEventListener('resize', () => {
  window.dispatchEvent(new Event('scroll'));
});

// ========== Mobile Menu Toggle ==========

const toggleBtn = document.querySelector('.header-area .toggle-menu');
const linksContainer = document.querySelector('.header-area .links-container');

toggleBtn.onclick = () => {
  toggleBtn.classList.toggle('active');
  linksContainer.classList.toggle('active');
};

// Close mobile menu when a nav link is clicked
allLinks.forEach((link) => {
  link.addEventListener('click', () => {
    toggleBtn.classList.remove('active');
    linksContainer.classList.remove('active');
  });
});
