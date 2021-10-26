let crewMembers = [];

// icon

const icon = document.querySelector(".hamburger");
let iconImg = document.querySelector(".hamburger img");
let header = document.querySelector("header");
icon.addEventListener("click", () => {
  if (header.classList.contains("show-nav")) {
    header.classList.remove("show-nav");
    iconImg.src = "./assets/shared/icon-hamburger.svg";
  } else {
    header.classList.add("show-nav");
    iconImg.src = "./assets/shared/icon-close.svg";
  }
});
