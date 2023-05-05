const menuButton = document.getElementById("menu-button");
/*const closeButton = document.getElementById("close-button");*/
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("show");
    menuButton.classList.toggle("active");
});

/*
closeButton.addEventListener("click", () => {
    menu.classList.remove("show");
});
*/