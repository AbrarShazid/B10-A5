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


