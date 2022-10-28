const mobileIcon = document.querySelector("#mobile-menu-icon");
const navbar = document.querySelector("#navbar");

mobileIcon.addEventListener("click", () => {
  let navbarPosition = navbar.offsetLeft;

  if (navbarPosition == 0) {
    navbar.style.marginLeft = "-320px";
  } else {
    navbar.style.marginLeft = "0px";
  }
});
