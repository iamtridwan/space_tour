const imgFile = [
  "./assets/destination/image-moon.png",

  "./assets/destination/image-mars.png",
  "./assets/destination/image-europa.png",
  "./assets/destination/image-titan.png",
];
var appear = [{ opacity: "0" }, { opacity: "1" }];

var navTiming = {
  duration: 1000,
  easing: "ease",
};
window.addEventListener("DOMContentLoaded", () => {
  const ul = document.querySelector(".destination_list ul");
  const links = document.querySelectorAll(".destination_list ul li");
  let mainDestination = document.querySelector(".main_destination");
  let destinationImg = document.querySelector(".img img");
  ul.addEventListener("click", (e) => {
    let current = e.target;
    removeCurrent(links);
    addCurrent(current);
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        data["destinations"].forEach((d, index) => {
          if (parseInt(current.dataset.id) === index) {
            destinationImg.src = imgFile[index];
            mainDestination.innerHTML = `
    <div class="destination_detail">
              <h2>${d.name}</h2>
              <p class="story">${d.description}</p>
            </div>
            <div class="travel_log">
              <div class="distance">
                <p>Avg. distance</p>
                <h4>${d.distance}</h4>
              </div>
              <div class="time">
                <p>Est. travel time</p>
                <h4>${d.travel}</h4>
              </div>
            </div>

    `;
          }
        });
      })
      .catch((error) => console.log(error));

    mainDestination.animate(appear, navTiming);
    destinationImg.animate(appear, navTiming);
  });
});

function removeCurrent(links) {
  links.forEach((link) => {
    link.classList.remove("active");
  });
}

function addCurrent(target) {
  target.classList.add("active");
}
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

// const fetchData = (what) => {
//   fetch("./data.json")
//     .then((res) => res.json())
//     .then((data) => {
//       return data[what];
//     })
//     .catch((error) => {
//       return error;
//     });
// };
