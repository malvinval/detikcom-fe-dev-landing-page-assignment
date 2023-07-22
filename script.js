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

// carousel
let items = document.querySelectorAll('.carousel .carousel-item')
		items.forEach((el) => {
			const minPerSlide = 4
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})