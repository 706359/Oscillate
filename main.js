const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
	// Check if the 'data-visible' attribute is present
	if (primaryNav.hasAttribute("data-visible")) {
		// Set 'aria-expanded' attribute to false
		navToggle.setAttribute("aria-expanded", "false");
		// Remove 'data-visible' attribute
		primaryNav.removeAttribute("data-visible");
		// Remove 'data-overlay' attribute
		primaryHeader.removeAttribute("data-overlay");
	} else {
		// Set 'aria-expanded' attribute to true
		navToggle.setAttribute("aria-expanded", "true");
		// Add 'data-visible' attribute
		primaryNav.setAttribute("data-visible", "true");
		// Add 'data-overlay' attribute
		primaryHeader.setAttribute("data-overlay", "true");
	}
});

// Initialize A11YSlider
const slider = new A11YSlider(document.querySelector(".slider"), {
	adaptiveHeight: false,
	dots: true,
	centerMode: true,
	arrows: false,
	responsive: {
		480: {
			dots: false, // dots enabled 1280px and up
		},
	},
});

let imgBx = document.querySelectorAll(".imgBx");
let contentBx = document.querySelectorAll(".contentBx");

for (let i = 0; i < imgBx.length; i++) {
	imgBx[i].addEventListener("mouseover", function () {
		for (let i = 0; i < contentBx.length; i++) {
			contentBx[i].className = "contentBx";
		}
		document.getElementById(this.dataset.id).className = "contentBx active";

		for (let i = 0; i < imgBx.length; i++) {
			imgBx[i].className = "imgBx";
		}
		this.className = "imgBx active";
	});
}
