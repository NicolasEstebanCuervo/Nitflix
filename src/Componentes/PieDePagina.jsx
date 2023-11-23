// React

import React from "react";

function PieDePagina(){
  return(
    <footer className="container text-center text-white">
      <img src={require("../Imagenes/Nitflix.png")} />
      <div>
        <i className="bi bi-linkedin"></i>
        <i className="bi bi-github"></i>
        <i className="bi bi-twitter"></i>
        <h3>©Nicolas Rojas 2023 Todos los derechos reservados</h3>
      </div>
    </footer>
  )
}

export default PieDePagina