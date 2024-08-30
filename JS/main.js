const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menuBar = document.querySelector("nav .container ul");
/*=======================Menu BTN=================================*/
menuBtn.addEventListener("click", () => {
  menuBar.style.display = "block";
  menuBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
});
/*=======================close BTN=================================*/
closeBtn.addEventListener("click", () => {
  menuBar.style.display = "none";
  menuBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
});

const navItems = menuBar.querySelectorAll("li");

/*=======================remove active class=================================*/
const chnageActive = () => {
  navItems.forEach((item) => {
    const link = item.querySelector("a");
    link.classList.remove("active");
  });
};
/*=======================Add active class=================================*/
navItems.forEach((item) => {
  const link = item.querySelector("a");
  link.addEventListener("click", () => {
    chnageActive();
    link.classList.add("active");
  });
});
