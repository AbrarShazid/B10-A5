// on scroll blur effect added
document.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const navBar = document.getElementById("nav-Bar");

  if (window.scrollY) {
    header.classList.add("scrolling", "bg-transparent", "backdrop-blur-xl");
    navBar.classList.add("scrolling", "bg-transparent", "backdrop-blur-xl");
  } else {
    header.classList.remove("scrolling", "bg-transparent", "backdrop-blur-xl");
    navBar.classList.remove("scrolling", "bg-transparent", "backdrop-blur-xl");
  }
});

// blog button functionality

const blogButton = document.getElementById("blog-button");
blogButton.addEventListener("click", function () {
  window.location.href = "Other-Page/blog.html";
});

// donation and history button toggle

const donationBtn = document.getElementById("donation");
const historyBtn = document.getElementById("history");
const donationSection = document.getElementById("donation-section");
const historySec = document.getElementById("historySection");

// If historyBtn is clicked
historyBtn.addEventListener("click", function () {
  donationBtn.classList.remove("bg-[#B4F461]", "text-[#111]", "border-none");
  donationBtn.classList.add(
    "text-[#111111B3]",
    "border",
    "border-[#1111114D]",
    "bg-transparent",
    "hover:bg-gray-300"
  );

  historyBtn.classList.remove(
    "text-[#111111B3]",
    "border",
    "border-[#1111114D]",
    "bg-transparent",
    "hover:bg-gray-300"
  );
  historyBtn.classList.add("bg-[#B4F461]", "text-[#111]", "border-none");

  donationSection.classList.add("hidden");
  historySec.classList.remove("hidden");
});

// If donationBtn is clicked
donationBtn.addEventListener("click", function () {
  historyBtn.classList.remove("bg-[#B4F461]", "text-[#111]", "border-none");
  historyBtn.classList.add(
    "text-[#111111B3]",
    "border",
    "border-[#1111114D]",
    "bg-transparent",
    "hover:bg-gray-300"
  );

  donationBtn.classList.remove(
    "text-[#111111B3]",
    "border",
    "border-[#1111114D]",
    "bg-transparent",
    "hover:bg-gray-300"
  );
  donationBtn.classList.add("bg-[#B4F461]", "text-[#111]", "border-none");

  historySec.classList.add("hidden");
  donationSection.classList.remove("hidden");
});
