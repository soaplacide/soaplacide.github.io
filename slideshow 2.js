let slideIndex = 1;
showSlides(slideIndex);

// flèches
document.querySelector(".prev").addEventListener("click", () => {
    showSlides(slideIndex += -1);
});

document.querySelector(".next").addEventListener("click", () => {
    showSlides(slideIndex += 1);
});

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}
