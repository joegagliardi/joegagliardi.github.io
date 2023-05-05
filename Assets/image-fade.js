var imageFadeWrapper = document.querySelector(".homepage-wrapper");

imageFadeWrapper.addEventListener("scroll", function() {
    var scroll = imageFadeWrapper.scrollTop;
    var windowHeight = imageFadeWrapper.clientHeight;
    console.log(windowHeight);
    $(".fade-in-image").each(function() {
        var imagePos = $(this).offset().top - imageFadeWrapper.offsetTop;
        var imageHeight = $(this).outerHeight();

        if (scroll + windowHeight > imagePos && scroll < imagePos + imageHeight) {
            $(this).css({
                opacity: 1,
                transform: "translateX(0)",
            });
        }
    });
});