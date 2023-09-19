const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");
const popup = document.getElementById("popup");
const images = document.querySelectorAll(".popup img");
const backButton = document.getElementById("backButton");
const continueButton = document.getElementById("continueButton");
const description = document.querySelectorAll(".description p");
let currentIndex = 0;

openPopupButton.addEventListener("click", () => {
    popup.style.display = "block";
    showImage(currentIndex);
});

closePopupButton.addEventListener("click", () => {
    closePopup();
});

// Close the popup when clicking outside of it
popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        closePopup();
    }
});

// Close the popup when pressing the "Escape" key
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closePopup();
    }
});

backButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

continueButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

function showImage(index) {
    images.forEach((img, i) => {
        if (i === index) {
            img.style.display = "block";
            description[i].style.display = "block";
        } else {
            img.style.display = "none";
            description[i].style.display = "none";
        }
    });
}

function closePopup() {
    console.log("Closing popup");
    popup.style.display = "none";
    currentIndex = 0;
    images.forEach((img, i) => {
        img.style.display = "none";
        description[i].style.display = "none";
    });
}