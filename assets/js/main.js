
const footerTop = document.querySelector(".footer__top");
footerTop.addEventListener("click", () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
});

window.addEventListener("load", () => {
    let theme = localStorage.getItem("theme");
    console.log("cargando tema de inicio")
    changeTheme(theme);
})

let themeGreen = document.querySelector(".themes__green");
let themeRed = document.querySelector(".themes__red");
let themeBlue = document.querySelector(".themes__blue");

let page = document.querySelector("html");

themeGreen.addEventListener("click", () => {
    changeTheme("verde");

});

themeRed.addEventListener("click", () => {
    changeTheme("rojo");
});
themeBlue.addEventListener("click", () => {
    changeTheme("azul");
});


let changeTheme = (theme) => {
    page.removeAttribute("class");
    console.log(theme);

    switch (theme) {
        case "verde":
            page.setAttribute("class", "themes__green--active");
            console.log("cambiando a verde");
            break;

        case "rojo":
            page.setAttribute("class", "themes__red--active");
            console.log("cambiando a rojo");
            break;
        case "azul":
            page.setAttribute("class", "themes__blue--active");
            console.log("cambiando a azul");
            break;


    }
    localStorage.setItem("theme", theme)
}