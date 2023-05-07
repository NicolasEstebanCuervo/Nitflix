// React

import React from "react";

function PieDePagina(){
  return(
    <footer class="container text-center text-white">
      <img src={require("../Imagenes/Nitflix.png")} />
      <div>
        <i class="bi bi-linkedin"></i>
        <i class="bi bi-github"></i>
        <i class="bi bi-twitter"></i>
      </div>
      <h3>©Nicolas Rojas 2023 Todos los derechos reservados</h3>
    </footer>
  )
}

export default PieDePagina