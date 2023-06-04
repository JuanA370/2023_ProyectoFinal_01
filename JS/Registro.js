function Registro(){
  if (usernameField ===null && fullnameField ===null&& birthdateField ===null&& emailField ===null&& passwordField===null) {
    localStorage.setItem("usuario",document.getElementById('username'));
    localStorage.setItem("nombre",document.getElementById('fullname'));
    localStorage.setItem("fecha",document.getElementById('birthdate'));
    localStorage.setItem("email",document.getElementById('email'));
    localStorage.setItem("contraseña",document.getElementById('password'));
  }else{
    alert("Rellena todos los campos");

  }
}

