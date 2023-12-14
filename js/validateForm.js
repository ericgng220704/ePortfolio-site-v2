document.addEventListener("DOMContentLoaded", () => {
     const form = document.getElementById("contactForm");
     form.addEventListener("submit", function (event) {
          event.preventDefault();
          let isValid = true;

          // Validate Name
          const name = document.getElementById("name");
          if (name.value.trim() === "") {
               showError(name, "nameError");
               isValid = false;
          }

          // Validate Phone Number
          const phone = document.getElementById("phone");
          if (!phone.value.match(/^\d{10}$/)) {
               showError(phone, "phoneError");
               isValid = false;
          }

          // Validate Email
          const email = document.getElementById("email");
          if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
               showError(email, "emailError");
               isValid = false;
          }

          if (!isValid) {
               event.preventDefault();
          }

          if (isValid) {
               document.getElementById("thankYouOverlay").style.display =
                    "flex";
          }
     });

     function showError(input, errorId) {
          const errorDiv = document.getElementById(errorId);
          errorDiv.toggleAttribute("show");
          input.focus();
          input.select();
     }
});

function closeOverlay() {
     document.getElementById("thankYouOverlay").style.display = "none";
     document.getElementById("contactForm").reset();
}

/* Menu */
const mobileNav = document.querySelector(".mobile-nav");
const navList = document.querySelector(".nav-list");

mobileNav.addEventListener("click", () => {
     mobileNav.classList.toggle("active");
     navList.classList.toggle("mobile-active");
});
