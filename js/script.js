// the hamburger icon
const hamburger = document.querySelector(".hamburger");
// the ul
const navMenu = document.querySelector(".nav-menu");
// the li's
const navItem = document.querySelectorAll(".nav-item");

// when nav item is clicked, the closeMenu function runs and the nav disappears
navItem.forEach(n => n.addEventListener("click", closeMenu));
// function for when nav list item is clicked
function closeMenu() {
    // handles the animation of turning the x into a hamburger
    hamburger.classList.remove("active");
    // removes menu
    // navMenu.classList.remove("active");
    navMenu.classList.add("hide");
    // sets aria-expanded to false for screen readers
    hamburger.setAttribute('aria-expanded', 'false');
}

// function for when hamburger icon is clicked
hamburger.addEventListener('click', function () {
    if (hamburger.classList.contains('active')) {
        // switch from x to hamburger and remove nav
        this.setAttribute('aria-expanded', 'false');
        hamburger.classList.remove('active');
        navMenu.classList.remove("active");
        navMenu.classList.add("hide");
    } else {
        // switch from hamburger to x and add nav
        hamburger.classList.add('active');
        navMenu.classList.toggle("active");
        navMenu.classList.remove("hide");
        this.setAttribute('aria-expanded', 'true');
    }
});
