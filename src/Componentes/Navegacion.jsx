// Hojas de estilo

import "../HojasDeEstilo/Sass/Sass.css"

// React y hooks

import React, {useState} from "react";

// Librerias

import { Navbar, Nav } from "react-bootstrap";

function Navegacion () {
  const [abierto, setAbierto] = useState(false);

  const handleClick = () => {
    setAbierto(!abierto);
  };

  return (
    <Navbar expand="lg" className="nav container">
      <img className="imagen_logo" src={require("../Imagenes/Nitflix.png")} />
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleClick} />
      <Navbar.Collapse id="basic-navbar-nav" className={`${abierto ? "show" : "centrar"}`}>
        <Nav className="mr-auto">
          <Nav.Link href="#Semanal" className="links">Semanal</Nav.Link>
          <Nav.Link href="#Series" className="links">Series</Nav.Link>
          <Nav.Link href="#Comedia" className="links">Comedia</Nav.Link>
          <Nav.Link href="#Animado" className="links">Animado</Nav.Link>
          <Nav.Link href="#Terror" className="links">Terror</Nav.Link>
          <Nav.Link href="#Accion" className="links">Accion</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navegacion;
