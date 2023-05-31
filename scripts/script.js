// script.js

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-items a');

  function isSectionInView(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  function updateActiveSection() {
    sections.forEach((section) => {
      if (isSectionInView(section)) {
        section.classList.add('active-section');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${section.id}`) {
            link.classList.add('active-section');
          } else {
            link.classList.remove('active-section');
          }
        });
      } else {
        section.classList.remove('active-section');
      }
    });
  }

  window.addEventListener('scroll', updateActiveSection);
  window.addEventListener('load', updateActiveSection);
});
