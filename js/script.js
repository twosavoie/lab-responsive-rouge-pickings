const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navItem = document.querySelectorAll(".nav-item");

navItem.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.add("hide");
    hamburger.setAttribute('aria-expanded', 'false');
}

hamburger.addEventListener('click', function () {
    if (hamburger.classList.contains('active')) {
        this.setAttribute('aria-expanded', 'false');
        hamburger.classList.remove('active');
        navMenu.classList.remove("active");
        navMenu.classList.add("hide");
    } else {
        hamburger.classList.add('active');
        navMenu.classList.toggle("active");
        navMenu.classList.remove("hide");
        this.setAttribute('aria-expanded', 'true');
    }
});
