

let btnPrev = document.querySelector(".slider__btn-prev");
let btnNext = document.querySelector(".slider__btn-next");
let slides = document.querySelectorAll(".slides__item");


let totalSlides = slides.length;
let counter = 0;
btnNext.addEventListener("click", () => {
    counter++;
    if (counter >= slides.length) counter = 0;
    activarSlide();
})


btnPrev.addEventListener("click", () => {
    counter--
    if (counter < 0) {
        counter = slides.length - 1;
    }
    activarSlide();


})

let activarSlide = () => {
    limpiarSlide();
    slides[counter].classList.add("slides__item--active");
}

let limpiarSlide = () => {
    slides.forEach(x => x.classList.remove("slides__item--active"));
}
