// Mobile menu functionality
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menuBar = document.querySelector("nav .container ul");

menuBtn.addEventListener("click", () => {
  menuBar.style.display = "block";
  menuBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
});

closeBtn.addEventListener("click", () => {
  menuBar.style.display = "none";
  menuBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
});

// Active link management
const navItems = menuBar.querySelectorAll("li");

const removeActiveClass = () => {
  navItems.forEach((item) => {
    const link = item.querySelector("a");
    link.classList.remove("active");
  });
};

navItems.forEach((item) => {
  const link = item.querySelector("a");
  link.addEventListener("click", () => {
    removeActiveClass();
    link.classList.add("active");
    // Close mobile menu on link click
    if (window.innerWidth <= 600) {
      menuBar.style.display = "none";
      menuBtn.style.display = "inline-block";
      closeBtn.style.display = "none";
    }
  });
});

// Read More functionality
const readBtn = document.querySelector(".read-more-link");
const readCont = document.querySelector(".read-more-content");

if (readBtn && readCont) {
  readBtn.addEventListener("click", (e) => {
    e.preventDefault();
    readCont.classList.toggle("show-content");
    readBtn.innerHTML = readCont.classList.contains("show-content")
      ? "Read Less"
      : "Read More";
  });
}

// Expandable skills
const skillItems = document.querySelectorAll("section.skill-section .skill");
skillItems.forEach((skill) => {
  skill.querySelector(".head").addEventListener("click", () => {
    skill.querySelector(".items").classList.toggle("show-items");
  });
});

// Nav shadow on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("show-box-shadow", window.scrollY > 100);
});

// Smooth scroll padding
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href !== "#" && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
