function Inicio() {
    if (!usernameField === null && !contraseña === null) {
        if (document.getElementById("username") === localStorage.getItem("usuario") && document.getElementById("password") === localStorage.getItem("contraseña")) {
            window.close();
            window.location.href="Inicio de sesión.html"
        } else {
            alert("Los datos son erroneos");

        }
    }else{
        alert("Rellena todos los campos");

    }
}