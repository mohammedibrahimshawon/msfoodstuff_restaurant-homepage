console.log("Hello world!");

const myName = "Jonas Schmedtmann";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

h1.addEventListener("click", function () {
  h1.textContent = myName;
  h1.style.backgroundColor = "red";
  h1.style.padding = "5rem";
});

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Mobile navigation functionality
// const btnMobileNav = document.querySelector('.btn-mobile-nav');
// const navList = document.querySelector('.main-nav-list');

// btnMobileNav.addEventListener('click', function () {
//   navList.classList.toggle('nav-open');
//   const menuIcon = document.querySelector('.icon-mobile-nav[name="menu-outline"]');
//   const closeIcon = document.querySelector('.icon-mobile-nav[name="close-outline"]');

//   menuIcon.style.display = menuIcon.style.display === 'none' ? 'block' : 'none';
//   closeIcon.style.display = closeIcon.style.display === 'block' ? 'none' : 'block';
// });

// const btnMobileNav = document.querySelector('.btn-mobile-nav');
// const navList = document.querySelector('.main-nav-list');

// // Toggle mobile navigation
// btnMobileNav.addEventListener('click', function (event) {
//   navList.classList.toggle('nav-open');
//   const menuIcon = document.querySelector('.icon-mobile-nav[name="menu-outline"]');
//   const closeIcon = document.querySelector('.icon-mobile-nav[name="close-outline"]');
  
//   // Toggle between menu and close icons
//   menuIcon.style.display = menuIcon.style.display === 'none' ? 'block' : 'none';
//   closeIcon.style.display = closeIcon.style.display === 'block' ? 'none' : 'block';
// });

// // Make sure no link behavior is blocked
// document.querySelectorAll('.main-nav-link').forEach(link => {
//   link.addEventListener('click', function(event) {
//     // Remove event.preventDefault() to allow links to work normally
//     if (navList.classList.contains('nav-open')) {
//       navList.classList.remove('nav-open');
//       document.querySelector('.icon-mobile-nav[name="menu-outline"]').style.display = 'block';
//       document.querySelector('.icon-mobile-nav[name="close-outline"]').style.display = 'none';
//     }
//   });
// });


///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
