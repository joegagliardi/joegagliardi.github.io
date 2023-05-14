const wrapper = document.querySelector(".homepage-wrapper");
const navbar = document.getElementById("navbar");
var lastScrollTop = 0;

wrapper.addEventListener("scroll", function() {
    var scrollTop = wrapper.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.classList.add("slide-up");
        navbar.classList.remove("slide-down");
    } else {
        navbar.classList.add("slide-down");
        navbar.classList.remove("slide-up");
    }
    lastScrollTop = scrollTop;
});