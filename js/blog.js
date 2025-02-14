// home button functionallity

const homeBtn = document.getElementById("home-button");
homeBtn.addEventListener("click", function () {
  window.location.href = "../index.html";
});
// on scroll blur effect added
document.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const navBar = document.getElementById("nav-Bar");

  if (window.scrollY > 50) {
    header.classList.add("scrolling", "bg-transparent", "backdrop-blur-xl");
    navBar.classList.add("scrolling", "bg-transparent", "backdrop-blur-xl");
  } else {
    header.classList.remove("scrolling", "bg-transparent", "backdrop-blur-xl");
    navBar.classList.remove("scrolling", "bg-transparent", "backdrop-blur-xl");
  }
});
