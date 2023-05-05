const wrapper = document.querySelector(".homepage-wrapper");
var lastScrollTop = 0;
navbar = document.getElementById("navbar");
wrapper.addEventListener("scroll", function() {
    var scrollTop = wrapper.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-168px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});