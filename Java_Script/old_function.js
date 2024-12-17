document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".hover-image-container");
    const body = document.getElementById("wrapper");
    const backbutton = document.getElementById("backbtn");

    images.forEach((image) => {
        image.addEventListener("click", () => {
            if (!image.classList.contains("enlarged")) {
                image.classList.add("enlarged");
                body.classList.add("blur"); // Apply blur to the background
                backbutton.classList.add("blur");
            } else {
                image.classList.remove("enlarged");
                body.classList.remove("blur"); // Remove blur
                backbutton.classList.remove("blur");
            }
        });
    });
});
