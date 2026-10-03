// ========== Smooth Scroll for Links ==========
const allLinks = document.querySelectorAll(".links a");

function scrollToSomewhere(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      const targetSelector =
        e.target.dataset.section || e.target.getAttribute("href");
      const target = document.querySelector(targetSelector);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      toggleBtn?.classList.remove("active");
      linksContainer?.classList.remove("active");
      allLinks.forEach((link) => link.classList.remove("active"));
      e.target.classList.add("active");
    });
  });
}
scrollToSomewhere(allLinks);
// ========== Scroll To Top Button ==========
const scrollTopBtn = document.getElementById("scroll-top");
window.addEventListener("scroll", () => {
  scrollTopBtn.classList.toggle("active", window.scrollY > 100);
});
// Theme Toggle

const themeBtn = document.querySelector(".theme-btn");
const themeIcon = themeBtn?.querySelector("i");

// Apply saved theme on load
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  themeIcon?.classList.replace("fa-moon", "fa-sun");
}

// Toggle theme
themeBtn?.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-theme");

  if (isDark) {
    localStorage.setItem("theme", "dark");
    themeIcon?.classList.replace("fa-moon", "fa-sun");
  } else {
    localStorage.setItem("theme", "light");
    themeIcon?.classList.replace("fa-sun", "fa-moon");
  }
});
// ========== Mobile Menu ==========
const toggleBtn = document.querySelector(".header-area .toggle-menu");
const linksContainer = document.querySelector(".header-area .links-container");
if (toggleBtn && linksContainer) {
  toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    linksContainer.classList.toggle("active");
  });
}
// animation for typing effect
const textArray = [
  "Web Design & Development",
  "Modern Frameworks & Libraries",
  "Creative & Visual Design",
  "AI Tools & Technologies",
];

let i = 0;
let j = 0;
let isDeleting = false;
let speed = 100;

function typeEffect() {
  const typingElement = document.getElementById("typing");
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
VanillaTilt.init(document.querySelector(".hero-img"), {
  max: 10,
  speed: 300,
  glare: false,
});
particlesJS("particles-js", {
  particles: {
    number: {
      value: 40,
    },
    color: { value: "#1d7ddd" },
    shape: { type: "circle" },
    opacity: { value: 0.8 },
    size: { value: 4, random: true },
    move: { enable: true, speed: 1.5 },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
    },
  },
});
function updateAOS() {
  if (window.innerWidth <= 867) {
    for (let i = 1; i <= 6; i++) {
      const el = document.getElementById(`cont${i}`);
      if (el) {
        el.setAttribute("data-aos", "fade-down-right");
      }
    }
  } else {
    document
      .getElementById("cont1")
      ?.setAttribute("data-aos", "fade-down-right");
    document
      .getElementById("cont2")
      ?.setAttribute("data-aos", "fade-down-left");
    document
      .getElementById("cont3")
      ?.setAttribute("data-aos", "fade-down-right");
    document
      .getElementById("cont4")
      ?.setAttribute("data-aos", "fade-down-left");
    document
      .getElementById("cont5")
      ?.setAttribute("data-aos", "fade-down-right");
    document
      .getElementById("cont6")
      ?.setAttribute("data-aos", "fade-down-left");
  }

  AOS.refresh();
}
window.addEventListener("load", updateAOS);
window.addEventListener("resize", updateAOS);
