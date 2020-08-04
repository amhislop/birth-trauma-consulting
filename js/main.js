const navigationLinks = document.querySelectorAll("header nav a[href^='/#']");
const sections = document.querySelectorAll('section');
const hamburgerButton = document.querySelector('.nav-open-hamburger');

let navOpen = false;
let activeSection;

// Mobile button
hamburgerButton.addEventListener('click', function (e) {
  e.preventDefault();
  hamburgerButton.classList.toggle('open');
});

// Smooth scroll
// Navigation Links
navigationLinks.forEach((link) =>
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetLink = e.target.href.match(/.*\/#(.*)/)[1];
    const targetElement = document.getElementById(targetLink);
    if (!!targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  })
);

// Seciton observers
// const observables = [...navigationLinks].map((link) =>
//   document.getElementById(link.href.match(/.*\/#(.*)/)[1])
// );

// const observer = new IntersectionObserver(handleIntersect, {
//   // If the image gets within 500px in the Y axis, start the download.
//   rootMargin: '-50px 50px',
//   threshold: 0.01,
// });
// observables.forEach((item) => {
//   observer.observe(item);
// });
// // observer.observe(observables);

// function handleIntersect(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.intersectionRatio > 0) {
//       // remove active nav item
//       // if(activeSection) activeSection
//       // set active nav item
//       console.log(entry.target);
//     } else if (entry.intersectionRatio < 0) {
//       console.log(entry.target, 'yeah');
//     }
//   });
// }
