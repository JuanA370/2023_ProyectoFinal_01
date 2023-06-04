var num = 1;
document.addEventListener("DOMContentLoaded", function () {
  for (var i = 0; i < 3; i++) {
    cambiarContenidoDelante();
  }
});
function cambiarContenidoDelante() {
  var fondoActual = document.getElementById("fondo" + num);
  var fondoSiguiente = document.getElementById("fondo" + ((num % 3) + 1));

  fondoActual.style.display = "none";
  fondoSiguiente.style.display = "flex";

  num = (num % 3) + 1;
}
function cambiarContenidoAnterior() {
  
  var fondoActual = document.getElementById("fondo" + num);
  var fondoAnterior = document.getElementById("fondo" + ((num - 2 + 3) % 3 + 1));

  fondoActual.style.display = "none";
  fondoAnterior.style.display = "flex";

  num = (num - 2 + 3) % 3 + 1;
}
