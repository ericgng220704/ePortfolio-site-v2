// Sticky navigation

const portfolioNav = document.querySelector(".portfolioP-projects");

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
obs.observe(portfolioNav);

// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link:not(.external)");

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
     });
});

/* Menu */
const mobileNav = document.querySelector(".mobile-nav");
const navList = document.querySelector(".nav-list");

mobileNav.addEventListener("click", () => {
     mobileNav.classList.toggle("active");
     navList.classList.toggle("mobile-active");
});
