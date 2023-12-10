const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");
const popup = document.getElementById("popup");
const popupOverlay = document.getElementById("popupOverlay");
const images = document.querySelectorAll(".popup img");
const backButton = document.getElementById("backButton");
const continueButton = document.getElementById("continueButton");
const description = document.querySelectorAll(".description p");
let currentIndex = 0;

openPopupButton.addEventListener("click", () => {
    popup.style.display = "block";
    popupOverlay.style.display = "block"; // Show the overlay when the popup is opened
    showImage(currentIndex);
});

closePopupButton.addEventListener("click", () => {
    closePopup();
});

// // Close the popup when clicking outside of it
// popup.addEventListener("click", (event) => {
//     if (event.target === popup) {
//         closePopup();
//     }
// });

popupOverlay.addEventListener("click", closePopup);

// Close the popup when pressing the "Escape" key
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closePopup();
    }
});

function continueSlideshow() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function handleDownload() {
    const pdfUrl =
        "https://drive.google.com/file/d/1_zBWkkhjBYHwUvTKlHVDm4ZDCzKz0XQU/view?usp=sharing"; // Replace this with your actual PDF URL

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank"; // Open in a new tab
    link.setAttribute("download", ""); // Add the download attribute

    // Simulate a click to trigger the download
    link.click();

    continueButton.textContent = "Continue";
    continueButton.removeEventListener("click", handleDownload);
    continueButton.addEventListener("click", continueSlideshow);
}

continueButton.addEventListener("click", continueSlideshow);

backButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);

    if (currentIndex !== images.length - 1) {
        continueButton.textContent = "Continue";
        continueButton.removeEventListener("click", handleDownload);
        continueButton.addEventListener("click", continueSlideshow);
    }
});

function continueSlideshow() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);

    if (currentIndex === images.length - 1) {
        continueButton.textContent = "Download";
        continueButton.removeEventListener("click", continueSlideshow);
        continueButton.addEventListener("click", handleDownload);
    }
}

function showImage(index) {
    currentIndex = index; // Update the currentIndex directly to the passed index
    images.forEach((img, i) => {
        if (i === index) {
            img.style.display = "block";
            description[i].style.display = "block";
        } else {
            img.style.display = "none";
            description[i].style.display = "none";
        }
    });

    // Adjust the button text if needed (for the last slide)
    if (currentIndex === images.length - 1) {
        continueButton.textContent = "Download";
        continueButton.removeEventListener("click", continueSlideshow);
        continueButton.addEventListener("click", handleDownload);
    } else {
        continueButton.textContent = "Continue";
        continueButton.removeEventListener("click", handleDownload);
        continueButton.addEventListener("click", continueSlideshow);
    }
}

function closePopup() {
    console.log("Closing popup");
    popup.style.display = "none";
    popupOverlay.style.display = "none";
    currentIndex = 0;
    images.forEach((img, i) => {
        img.style.display = "none";
        description[i].style.display = "none";
    });
    continueButton.textContent = "Continue";
    continueButton.removeEventListener("click", handleDownload);
    continueButton.addEventListener("click", continueSlideshow);
}