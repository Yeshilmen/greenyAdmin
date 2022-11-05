function ShowPageFilters() {
  const showFilters = document.querySelector("#show-filters");
  const filters = document.querySelector("#filters");

  showFilters.addEventListener("click", () => {
    filters.classList.toggle("hidden");
  });
}

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

addEventListener("resize", () => {
  navbar.removeAttribute("style");
});

window.addEventListener("load", () => {
  let pagename = document.getElementById("pagename").dataset.name;
  let datalink = document.querySelector('[data-link="' + pagename + '"]');
  datalink.classList.add("active-nav-link");
  console.log(datalink);
});
