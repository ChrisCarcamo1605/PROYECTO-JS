window.addEventListener("load", () => {


    const requiredError = "Campo REQUERIDO"
        ; const validator = new JustValidate(".contacto__form");

    validator.addField("#formNombre", [{
        rule: "required",
        errorMessage: requiredError
    }, {
        rule: 'minLength',
        value: 3,
        errorMessage: "El nombre deberia tener minimo 3 letras"
    }]);

    validator.addField("#formApellidos", [{
        rule: "minLength", value: 5
    }, {
        rule: "required",
        errorMessage: requiredError
    }]);

    validator.addField("#formCorreo", [{
        rule: "email"
    }, {
        rule: "required",
        errorMessage: requiredError
    }])

    validator.addField("#formEdad", [{
        rule: "minNumber",
        value: 18,
        errorMessage: "Tiene que ser ma"
    }, {
        rule: "maxNumber",
        value: 90
    }, {
        rule: "required",
        errorMessage: requiredError
    }, {
        rule: "integer",
        errorMessage: "Solo numeros enteros"
    }])

    validator.addField("#formGenero", [{
        rule: "required",
        errorMessage: requiredError
    }])

    validator.addField("#fechaNacimiento", [{
        rule: "required",
        errorMessage: requiredError
    }])


});