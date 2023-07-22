const navbarHamburger = document.querySelector(".detik-hamburger-icon");
const mobileNavbar = document.querySelector(".detik-mobile-navbar");

navbarHamburger.addEventListener("click", () => {
    mobileNavbar.classList.toggle("d-none");
});

const mobileNavbarLink = document.querySelectorAll(".detik-mobile-nav-link");

mobileNavbarLink.forEach((mnl) => {
    mnl.addEventListener("click", () => {
        mobileNavbar.classList.add("d-none");
    });
});