const peliculas = {
    "Fast & Furious X": "Trailer Fast X.html",
    "Cars": "Cars.html",
    "Super Mario Bros: La película": "Super Mario Bros La película.html",
    "Venom": "Venom.html",
    "Transformers": "Transformer.html",
    "Stars Wars": "Stars Wars.html",
    "Interestellar": "Interestellar.html",
    "Harry Potter": "Harry Potter.html",
    "Vengadores: Endgame": "Avengers.html",
    "La sirenita": "La sirenita.html",
    "Shrek": "Sherk.html",
    "Spider-Man Cruzando el Multiverso": "Spiderman.html"
};
  function buscarPelicula() {
    const termino = document.getElementById("searchInput").value;
    const coincidencias = [];

    for (const pelicula in peliculas) {
      if (pelicula.toLowerCase().includes(termino.toLowerCase())) {
        coincidencias.push(pelicula);
      }
    }

    console.log("Películas encontradas:");
    console.log(coincidencias);
  }