
const footerTop = document.querySelector(".footer__top");
footerTop.addEventListener("click", () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})