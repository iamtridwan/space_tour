const imgFile = [
  "./assets/crew/image-douglas-hurley.png",
  "./assets/crew/image-mark-shuttleworth.png",
  "./assets/crew/image-victor-glover.png",
  "./assets/crew/image-anousheh-ansari.png",
];
var appear = [{ opacity: "0" }, { opacity: "1" }];

var navTiming = {
  duration: 1000,
  easing: "ease",
};
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

function removeCurrent(elems) {
  elems.forEach((elem) => {
    elem.classList.remove("btn-active");
  });
}

function addCurrent(target) {
  target.classList.add("btn-active");
}

//buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let current = e.currentTarget;
    let id = current.dataset.id;
    removeCurrent(buttons);
    addCurrent(current);
    let pics = document.querySelector(".pics img");
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => populateData(data.crew[id]));
    pics.src = imgFile[id];
    document.querySelector(".crew_detail").animate(appear, navTiming);
  });
});

function populateData(data) {
  let title = document.querySelector(".bio h4");
  let name = document.querySelector(".bio h1");
  let about = document.querySelector(".bio p");
  //   let pics = document.querySelector('.pics img')

  title.textContent = data.role;
  name.textContent = data.name;
  about.textContent = data.bio;
  //   pics.src = data.image
}
