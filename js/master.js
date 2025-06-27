// ========== Smooth Scroll & Active Links ==========

// Select all navigation links
const allLinks = document.querySelectorAll('.links a');

// Smooth scroll to section on click
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

      // Close mobile menu on link click
      toggleBtn.classList.remove('active');
      linksContainer.classList.remove('active');

      // Handle active class
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

container.addEventListener('mousemove', (e) => {
  const bounds = container.getBoundingClientRect();
  const centerX = bounds.left + bounds.width / 2;
  const centerY = bounds.top + bounds.height / 2;

  const xRotation = ((e.clientY - centerY) / 20).toFixed(2);
  const yRotation = ((centerX - e.clientX) / 20).toFixed(2);

  card.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.08)`;
  card.style.transition = 'transform 0.1s ease'; // Keep movement snappy during hover
});

container.addEventListener('mouseenter', () => {
  card.style.transition = 'transform 0.2s ease'; // Optional: fade in
});

container.addEventListener('mouseleave', () => {
  card.style.transition = 'transform 0.5s ease'; // Smooth reset
  card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
});

// ========== Section Activation on Scroll ==========
// // DOM elements
// const showText = document.getElementById('home');
// const tiltCard = document.getElementById('tiltContainer');
// const aboutText = document.getElementById('infoBox');
// const aboutImg = document.getElementById('aboutImg');
// const workContainer = document.getElementById('workContainer'); // Use class, not duplicate IDs

// const experienceElementsLarge = [
//   {
//     el: document.getElementById('cont1'),
//     min: 48 * 16,
//     max: 117 * 16,
//     class: 'active1',
//   },
//   {
//     el: document.getElementById('cont2'),
//     min: 54 * 16,
//     max: 124 * 16,
//     class: 'active2',
//   },
//   {
//     el: document.getElementById('cont3'),
//     min: 60 * 16,
//     max: 131 * 16,
//     class: 'active3',
//   },
//   {
//     el: document.getElementById('cont4'),
//     min: 66 * 16,
//     max: 138 * 16,
//     class: 'active4',
//   },
//   {
//     el: document.getElementById('cont5'),
//     min: 72 * 16,
//     max: 145 * 16,
//     class: 'active5',
//   },
//   {
//     el: document.getElementById('cont6'),
//     min: 78 * 16,
//     max: 152 * 16,
//     class: 'active6',
//   },
// ];

// const experienceElementsSmall = [
//   {
//     el: document.getElementById('cont1'),
//     min: 70 * 16,
//     max: 139 * 16,
//     class: 'active1',
//   },
//   {
//     el: document.getElementById('cont2'),
//     min: 78 * 16,
//     max: 147 * 16,
//     class: 'active2',
//   },
//   {
//     el: document.getElementById('cont3'),
//     min: 86 * 16,
//     max: 155 * 16,
//     class: 'active3',
//   },
//   {
//     el: document.getElementById('cont4'),
//     min: 94 * 16,
//     max: 163 * 16,
//     class: 'active4',
//   },
//   {
//     el: document.getElementById('cont5'),
//     min: 102 * 16,
//     max: 171 * 16,
//     class: 'active5',
//   },
//   {
//     el: document.getElementById('cont6'),
//     min: 110 * 16,
//     max: 179 * 16,
//     class: 'active6',
//   },
// ];

// // Triggers for large and small screens — each project card
// const contactTriggersLarge = Array.from(workContainer).map((el) => ({
//   el,
//   min: 100 * 16,
//   max: 200 * 16,
//   class: 'active',
// }));

// const contactTriggersSmall = Array.from(workContainer).map((el) => ({
//   el,
//   min: 126 * 16,
//   max: 230 * 16,
//   class: 'active',
// }));

// // Scroll trigger points
// const textTriggerAtLarge = 27 * 16;
// const cardTriggerAtLarge = 27 * 16;
// const aboutMinTriggerLarge = 11 * 16;
// const aboutMaxTriggerLarge = 73 * 16;

// const textTriggerAtSmall = 52 * 16;
// const cardTriggerAtSmall = 52 * 16;
// const aboutMinTriggerSmall = 13 * 16;
// const aboutMaxTriggerSmall = 115 * 16;

// // Main scroll update function
// function updateScrollEffects() {
//   const scrollY = window.scrollY;
//   const isSmallScreen = window.innerWidth <= 870;

//   if (!isSmallScreen) {
//     showText.classList.toggle('active1', scrollY < textTriggerAtLarge);
//     tiltCard.classList.toggle('active2', scrollY < cardTriggerAtLarge);

//     const isInAboutRange =
//       scrollY >= aboutMinTriggerLarge && scrollY <= aboutMaxTriggerLarge;
//     aboutText.classList.toggle('active1', isInAboutRange);
//     aboutImg.classList.toggle('active2', isInAboutRange);

//     experienceElementsLarge.forEach(({ el, min, max, class: className }) => {
//       el.classList.toggle(className, scrollY >= min && scrollY < max);
//     });

//     contactTriggersLarge.forEach(({ el, min, max, class: className }) => {
//       el.classList.toggle(className, scrollY >= min && scrollY < max);
//     });
//   } else {
//     showText.classList.toggle('active1', scrollY < textTriggerAtSmall);
//     tiltCard.classList.toggle('active2', scrollY < cardTriggerAtSmall);

//     const isInAboutRange =
//       scrollY >= aboutMinTriggerSmall && scrollY <= aboutMaxTriggerSmall;
//     aboutText.classList.toggle('active1', isInAboutRange);
//     aboutImg.classList.toggle('active2', isInAboutRange);

//     experienceElementsSmall.forEach(({ el, min, max, class: className }) => {
//       el.classList.toggle(className, scrollY >= min && scrollY < max);
//     });

//     contactTriggersSmall.forEach(({ el, min, max, class: className }) => {
//       el.classList.toggle(className, scrollY >= min && scrollY < max);
//     });
//   }
// }
// ========== Section Activation on Scroll ==========
// DOM elements
const showText = document.getElementById('home');
const tiltCard = document.getElementById('tiltContainer');
const aboutText = document.getElementById('infoBox');
const aboutImg = document.getElementById('aboutImg');
const workContainer = document.getElementById('workContainer'); // ✅ Single element by ID

// Experience elements for large screens
const experienceElementsLarge = [
  {
    el: document.getElementById('cont1'),
    min: 48 * 16,
    max: 117 * 16,
    class: 'active1',
  },
  {
    el: document.getElementById('cont2'),
    min: 54 * 16,
    max: 124 * 16,
    class: 'active2',
  },
  {
    el: document.getElementById('cont3'),
    min: 60 * 16,
    max: 131 * 16,
    class: 'active3',
  },
  {
    el: document.getElementById('cont4'),
    min: 66 * 16,
    max: 138 * 16,
    class: 'active4',
  },
  {
    el: document.getElementById('cont5'),
    min: 72 * 16,
    max: 145 * 16,
    class: 'active5',
  },
  {
    el: document.getElementById('cont6'),
    min: 78 * 16,
    max: 152 * 16,
    class: 'active6',
  },
];

// Experience elements for small screens
const experienceElementsSmall = [
  {
    el: document.getElementById('cont1'),
    min: 70 * 16,
    max: 139 * 16,
    class: 'active1',
  },
  {
    el: document.getElementById('cont2'),
    min: 78 * 16,
    max: 147 * 16,
    class: 'active2',
  },
  {
    el: document.getElementById('cont3'),
    min: 86 * 16,
    max: 155 * 16,
    class: 'active3',
  },
  {
    el: document.getElementById('cont4'),
    min: 94 * 16,
    max: 163 * 16,
    class: 'active4',
  },
  {
    el: document.getElementById('cont5'),
    min: 102 * 16,
    max: 171 * 16,
    class: 'active5',
  },
  {
    el: document.getElementById('cont6'),
    min: 110 * 16,
    max: 179 * 16,
    class: 'active6',
  },
];

// Scroll range triggers for #workContainer
const contactTriggersLarge = [
  {
    el: workContainer,
    min: 100 * 16,
    max: 200 * 16,
    class: 'active',
  },
];

const contactTriggersSmall = [
  {
    el: workContainer,
    min: 126 * 16,
    max: 230 * 16,
    class: 'active',
  },
];

// Scroll trigger points
const textTriggerAtLarge = 27 * 16;
const cardTriggerAtLarge = 27 * 16;
const aboutMinTriggerLarge = 11 * 16;
const aboutMaxTriggerLarge = 73 * 16;

const textTriggerAtSmall = 52 * 16;
const cardTriggerAtSmall = 52 * 16;
const aboutMinTriggerSmall = 13 * 16;
const aboutMaxTriggerSmall = 115 * 16;

// Main scroll update function
function updateScrollEffects() {
  const scrollY = window.scrollY;
  const isSmallScreen = window.innerWidth <= 870;

  if (!isSmallScreen) {
    showText.classList.toggle('active1', scrollY < textTriggerAtLarge);
    tiltCard.classList.toggle('active2', scrollY < cardTriggerAtLarge);

    const isInAboutRange =
      scrollY >= aboutMinTriggerLarge && scrollY <= aboutMaxTriggerLarge;
    aboutText.classList.toggle('active1', isInAboutRange);
    aboutImg.classList.toggle('active2', isInAboutRange);

    experienceElementsLarge.forEach(({ el, min, max, class: className }) => {
      el.classList.toggle(className, scrollY >= min && scrollY < max);
    });

    contactTriggersLarge.forEach(({ el, min, max, class: className }) => {
      el.classList.toggle(className, scrollY >= min && scrollY < max);
    });
  } else {
    showText.classList.toggle('active1', scrollY < textTriggerAtSmall);
    tiltCard.classList.toggle('active2', scrollY < cardTriggerAtSmall);

    const isInAboutRange =
      scrollY >= aboutMinTriggerSmall && scrollY <= aboutMaxTriggerSmall;
    aboutText.classList.toggle('active1', isInAboutRange);
    aboutImg.classList.toggle('active2', isInAboutRange);

    experienceElementsSmall.forEach(({ el, min, max, class: className }) => {
      el.classList.toggle(className, scrollY >= min && scrollY < max);
    });

    contactTriggersSmall.forEach(({ el, min, max, class: className }) => {
      el.classList.toggle(className, scrollY >= min && scrollY < max);
    });
  }
}

// Add scroll listener
window.addEventListener('scroll', updateScrollEffects);

// Initialize scroll-based effects
window.addEventListener('load', () => {
  showText.classList.add('active1');
  tiltCard.classList.add('active2');
  updateScrollEffects();
});

window.addEventListener('scroll', updateScrollEffects);
window.addEventListener('resize', updateScrollEffects);

// ========== Mobile Menu Toggle ==========

const toggleBtn = document.querySelector('.header-area .toggle-menu');
const linksContainer = document.querySelector('.header-area .links-container');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  linksContainer.classList.toggle('active');
});
