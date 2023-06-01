// script.js
function downloadFile() {
  var link = document.createElement("a");
  link.href = "https://prizma8870-my.sharepoint.com/:u:/r/personal/druwel_mauro_1507_student_prizma_be/Documents/mOS/ubuntu-23.04-desktop-amd64.iso?download=1";
  //link.download = "ubuntu-23.04-desktop-amd64.iso";
  link.click();
}
/*
var firstsec = document.getElementById('home');
var secondsec = document.getElementById('download');
document.onscroll = function scroll() {
  secondsec.scrollIntoView({behavior: ""});
 }

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-items a');

  function scrollToNextSection() {
    let currentSection = null;
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();
      if (rect.top > 0 && rect.top < window.innerHeight) {
        currentSection = sections[i];
        break;
      }
    }

    if (currentSection) {
      const nextSection = currentSection.nextElementSibling;
      if (nextSection && nextSection.classList.contains('section')) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
      // Scrolling down
      scrollToNextSection();
    }
  });

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
*/