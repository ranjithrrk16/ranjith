document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  function revealSections() {
      sections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top;
          const sectionBottom = section.getBoundingClientRect().bottom;
          const triggerPoint = window.innerHeight - 100;

          // Add class when section enters view
          if (sectionTop < triggerPoint && sectionBottom > 100) {
              section.classList.add("show");
          } 
          // Remove class when section leaves view, allowing re-trigger
          else {
              section.classList.remove("show");
          }
      });
  }

  window.addEventListener("scroll", revealSections);
  revealSections(); // Initial check
});
