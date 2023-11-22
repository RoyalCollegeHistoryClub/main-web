const next_section = document.getElementById("after-landing-page-div");
var home_nav = document.getElementById("home-nav");
var main_page_content = document.getElementById("main-page-content");
function navdivscroll() {
  const rect = next_section.getBoundingClientRect();
  
  if(rect.top <= 0){
    home_nav.style.boxShadow = "0px 0px 10px 1px black";
    home_nav.style.animation = "slideUpAnimation-main-nav 0.5s ease alternate";
    home_nav.style.position = "fixed";
    main_page_content.style.paddingTop = home_nav.offsetHeight + "px";

  }

  else{
    home_nav.style.boxShadow = "0px";
    home_nav.style.animation = "slideDownAnimation-main-nav 0s ease alternate";
    home_nav.style.position = "relative";
    main_page_content.style.paddingTop = "0px";
  }
}
    window.addEventListener("scroll", navdivscroll);

    
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
