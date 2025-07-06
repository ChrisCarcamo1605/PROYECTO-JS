let accordions = document.querySelectorAll(".accordion__collapse");
let accordionHeader = document.querySelectorAll(".accordion__collapse");

accordionHeader.forEach((x) => {

    x.addEventListener("click", (e) => {

        x.classList.toggle("accordion__collapse--open")
    });
});
