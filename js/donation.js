// on scroll blur effect added 
document.addEventListener("scroll", function() {
  const header = document.getElementById("header");
  const navBar = document.getElementById("nav-Bar");

  if (window.scrollY > 50) {
    header.classList.add("scrolling","bg-transparent","backdrop-blur-md");
    navBar.classList.add("scrolling","bg-transparent","backdrop-blur-md");
  } else {
    header.classList.remove("scrolling","bg-transparent","backdrop-blur-md");
    navBar.classList.remove("scrolling","bg-transparent","backdrop-blur-md");
  }
});


// blog button functionality 

const blogButton=document.getElementById('blog-button')
blogButton.addEventListener('click',function(){

  window.location.href = "Other-Page/blog.html"; 

})

// donation and history button toggle 

const donationBtn = document.getElementById('donation');
const historyBtn = document.getElementById('history');
const donationSection=document.getElementById('donation-section')
const historySection=document.getElementById('history-section')

// If historyBtn is clicked
historyBtn.addEventListener('click', function() {
  donationBtn.classList.remove("bg-[#B4F461]", "text-[#111]", "border-none");
  donationBtn.classList.add("text-[#111111B3]", "border", "border-[#1111114D]", "bg-transparent");

  historyBtn.classList.remove("text-[#111111B3]", "border", "border-[#1111114D]", "bg-transparent");
  historyBtn.classList.add("bg-[#B4F461]", "text-[#111]", "border-none");

  donationSection.classList.add("hidden")
  historySection.classList.remove("hidden")



});

// If donationBtn is clicked
donationBtn.addEventListener('click', function() {

  historyBtn.classList.remove("bg-[#B4F461]", "text-[#111]", "border-none");
  historyBtn.classList.add("text-[#111111B3]", "border", "border-[#1111114D]", "bg-transparent");

  donationBtn.classList.remove("text-[#111111B3]", "border", "border-[#1111114D]", "bg-transparent");
  donationBtn.classList.add("bg-[#B4F461]", "text-[#111]", "border-none");

  historySection.classList.add("hidden")
  donationSection.classList.remove("hidden")

});






