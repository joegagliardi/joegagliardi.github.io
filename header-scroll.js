const navbar = document.getElementById("navbar");
let lastScrollTop = 0;

function handleScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.classList.add("slide-up");
        navbar.classList.remove("slide-down");
    } else {
        navbar.classList.add("slide-down");
        navbar.classList.remove("slide-up");
    }
    lastScrollTop = scrollTop;
}

function addScrollListener() {
    if (window.innerWidth <= 480) {
        window.addEventListener("scroll", handleScroll);
    } else {
        window.removeEventListener("scroll", handleScroll);
    }
}

window.addEventListener("resize", addScrollListener);
addScrollListener();