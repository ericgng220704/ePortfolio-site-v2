/* Menu */
const mobileNav = document.querySelector(".mobile-nav");
const navList = document.querySelector(".nav-list");

mobileNav.addEventListener("click", () => {
     mobileNav.classList.toggle("active");
     navList.classList.toggle("mobile-active");
});

// Sticky navigation

const visualization = document.querySelector(".visualization");

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
obs.observe(visualization);
