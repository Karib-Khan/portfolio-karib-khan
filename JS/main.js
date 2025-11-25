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

// Expandable skills with dynamic content panel and left slide animation
const skillItems = document.querySelectorAll("section.skill-section .skill");
const contentPanel = document.querySelector("section.skill-section .content-panel");
const skillsContainer = document.querySelector("section.skill-section .container");

const skillsData = {
  "Programming Languages": {
    icon: "uil-code-branch",
    tags: ["HTML", "CSS", "JavaScript", "C++", "Python", "SQL", "PHP"]
  },
  "Frameworks & Technologies": {
    icon: "uil-layer-group",
    tags: ["React.JS", "WordPress", "Streamlit", "ERPNext", "Node.js"]
  },
  "Tools & Software": {
    icon: "uil-tools",
    tags: ["VS Code", "WebStorm", "Git", "GitHub", "Jupyter", "Postman", "Docker"]
  }
};

let activeSkill = null;

skillItems.forEach((skill) => {
  skill.querySelector(".head").addEventListener("click", () => {
    const skillName = skill.querySelector(".head h4").textContent;
    
    // If clicking the same skill, toggle off
    if (activeSkill === skillName) {
      // Remove active class from all skills
      skillItems.forEach(s => s.classList.remove("active"));
      // Hide the panel
      contentPanel.classList.remove("active");
      skillsContainer.classList.remove("show-panel");
      activeSkill = null;
    } else {
      // Remove active class from all skills
      skillItems.forEach(s => s.classList.remove("active"));
      
      // Add active class to clicked skill
      skill.classList.add("active");
      
      // Show the panel and trigger left slide animation
      skillsContainer.classList.add("show-panel");
      
      // Update content panel
      const skillData = skillsData[skillName];
      
      if (skillData) {
        contentPanel.classList.add("active");
        contentPanel.innerHTML = `
          <h2><i class="uil ${skillData.icon}"></i>${skillName}</h2>
          <div class="skills-items">
            ${skillData.tags.map(tag => `<div class="skill-tag">${tag}</div>`).join('')}
          </div>
        `;
      }
      
      activeSkill = skillName;
    }
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
