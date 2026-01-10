const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const slides = document.querySelectorAll(".hero__slide");

const next = () => {
    const active = document.querySelector(".hero__slide--active");

    active.classList.remove("hero__slide--active");

    if (active.nextElementSibling && active.nextElementSibling.classList.contains("hero__slide")) {
        active.nextElementSibling.classList.add("hero__slide--active");
    } else {
        slides[0].classList.add("hero__slide--active");
    }
}
const prev = () => {
    const active = document.querySelector(".hero__slide--active");

    active.classList.remove("hero__slide--active");

    if (active.previousElementSibling && active.previousElementSibling.classList.contains("hero__slide")) {
        active.previousElementSibling.classList.add("hero__slide--active");
    } else {
        slides[slides.length - 1].classList.add("hero__slide--active");
    }
}

nextButton.addEventListener("click", () => {
    next();
}
)

prevButton.addEventListener("click", () => {
    prev();
})