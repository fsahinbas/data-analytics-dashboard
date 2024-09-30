// javascript

const btnMenu = document.querySelector(".btn-menu");
const btnBack = document.querySelector(".btn-back");
const aside = document.querySelector("aside");

btnMenu.addEventListener("click", () => {
  aside.style.transform = "translateX(0)";
});

btnBack.addEventListener("click", () => {
  aside.style.transform = "translateX(-100%)";
});

//If we do not use a property that is related to the translateX with important keyword in the media query following code will work
// window.addEventListener("resize", (e) => {
//   if (document.body.clientWidth > 1000) {
//     aside.style.transform = "translateX(0)";
//   } else {
//     aside.style.transform = "translateX(-100%)";
//   }
// });
