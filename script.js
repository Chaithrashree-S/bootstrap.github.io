document.addEventListener("DOMContentLoaded", function() {
    // Highlight active section in navbar
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar-nav a");

    window.addEventListener("scroll", function() {
      let current = "";
      sections.forEach(function(section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach(function(link) {
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });
    

    // Your existing JavaScript code goes here
    // For example, code for slider functionality, etc.
    // JavaScript for updating skill level value
document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll(".slider");
  
    sliders.forEach(function(slider) {
      const skillValue = document.getElementById(slider.id.replace("Range", "Value"));
      skillValue.textContent = slider.value + "%";
  
      slider.addEventListener("input", function() {
        skillValue.textContent = this.value + "%";
      });
    });
  });
  
  });

