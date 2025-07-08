let inputNombre = document.querySelector("#nombre");
let inputCorreo = document.querySelector("#correo");
let inputContrasena = document.querySelector("#contrasena");
let loginSubmit = document.querySelector(".login__submit");
let dataLogout = document.querySelector(".data__logout");
let dataNombre = document.querySelector(".data__name");
let signForm = document.querySelector(".aside__login");
let dataSession = document.querySelector(".aside__data--hide");








loginSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    let nombre = inputNombre.value;
    let correo = inputCorreo.value;
    let contrasena = inputContrasena.value;

    console.log(isNaN(nombre))

    if (nombre == "" || isNaN(nombre) == false) {
        alert("Ingrese un nombre valido");
        return;

    }
    if (correo == "" || isNaN(correo) == false) {
        alert("Ingrese un correo valido");
        return;

    }
    if (contrasena === "" || isNaN(contrasena) == false) {
        alert("Ingrese una contrasena valido");
        return;
    }

    let user = new User(nombre, correo, contrasena);

    localStorage.setItem(user.nombre, JSON.stringify(user));

    inputNombre.value = "";
    inputCorreo.value = "";
    inputContrasena.value = "";

    console.log("Usuario registrado correctamente");

    getUser(nombre)
})



let getUser = (name) => {

    let userExist = localStorage.getItem(name);

    if (userExist) {

        let user = JSON.parse(userExist);
        console.log(user.nombre)
        dataNombre.innerHTML = user.nombre;

        signForm.classList.remove("aside__login");
        signForm.classList.add("aside__login--hide");
        dataSession.classList.remove("aside__data--hide")
    }
}

dataLogout.addEventListener("click", () => {
    logout();
});


let logout = () => {
    dataNombre.innerHTML = "";
    console.log("cerrando sesion")
    signForm.classList.add("aside__login");
    signForm.classList.remove("aside__login--hide");
    dataSession.classList.add("aside__data--hide")
}

if (localStorage.length >= 1) {
    let user = localStorage.key(localStorage.length - 1);
    getUser(user);

}


class User {
    nombre;
    correo;
    contrasena;


    constructor(nombre, correo, contrasena) {
        this.nombre = nombre;
        this.correo = correo;
        this.contrasena = contrasena;
    }
}