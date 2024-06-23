// MENU MOBILE
function menu() {
  const menuMobile = document.getElementById("menu-mobile");

  menuMobile.addEventListener("click", function () {
    const menuMobileOptions = document.getElementById("menu-mobile-options");
    menuMobileOptions.classList.toggle("active-menu");
    menuMobile.classList.toggle("animationTransform");
    document.body.classList.toggle("overflow-body");
  });
}

// Export the function to be used in other files
window.menu = menu;

// ACCORDION
function accordion() {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
}

// Export the function to be used in other files
window.accordion = accordion;

// MAIN
document.addEventListener("DOMContentLoaded", (event) => {
  // Select all spans within the accordions
  const spans = document.querySelectorAll(".accordion span");

  // Add click event listener to each span
  spans.forEach((span) => {
    span.addEventListener("click", function () {
      // Find the next sibling element with the class "panel"
      const panel = this.parentElement.parentElement.nextElementSibling;

      // Toggle the "active" class on the panel
      panel.classList.toggle("active");
    });
  });
});
