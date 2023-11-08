const menuButton = document.getElementById("menu-button");
/*const closeButton = document.getElementById("close-button");*/
const menu = document.getElementById("menu");
const headerMenuButton = document.getElementById("menu-button-2");
const closeMenuButton = document.getElementById("close-button");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("show");
    menuButton.classList.toggle("active");
});

headerMenuButton.addEventListener("click", () => {
    menu.classList.toggle("show");
    headerMenuButton.classList.toggle("active");
});

headerMenuButton.addEventListener("click", () => {
    menu.classList.toggle("show");
    headerMenuButton.classList.toggle("active");
});

/*
closeButton.addEventListener("click", () => {
    menu.classList.remove("show");
});
*/