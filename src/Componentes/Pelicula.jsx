  // React y hooks

import React, { useState, useRef, useEffect } from 'react';

// Librerias

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Archivos necesarios

import MarioVideo from '../Imagenes/Mario.mp4';

function Pelicula () {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    swipeToSlide: true,
    appendDots: dots => (
      <div>
        <div className="first-image">
          {dots[0]}
        </div>
        <ul style={{ margin: "0px" }}> {dots.slice(1, -1)} </ul>
        <div className="last-image">
          {dots[dots.length - 1]}
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1800,
        settings: {
            slidesToShow:5,
            slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
            slidesToShow:4,
            slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <header id="Proyectos recientes">
      <div className='contenedor_pelicula'>
        <video autoPlay muted loop >
          <source src={MarioVideo} type="video/mp4"/>
        </video>
      </div>
      <div class="texto_pelicula">
        <div className='contenedor_imagen'>
          <img src={require("../Imagenes/LetraNitflix.png")} />
        </div>
          <div className="contenedor_txt_extra">
            <h5 className="valoracion"> Valoracion 8 <i class="bi bi-star-fill"></i></h5>
            <h5 className='año'>2023</h5> 
            <h5 className="calidad">4K Ultra HD</h5>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, enim. Dignissimos delectus quidem non soluta? Error quae laudantium iure, saepe debitis quia corporis non laboriosam ab necessitatibus. Vel, numquam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aspernatur dolorum aliquid esse autem sequi animi voluptas unde fugit. Itaque, aliquid animi aperiam suscipit excepturi autem delectus accusantium minima quis.</p>
      </div>

      <Slider className='contenedor_carrusel' {...settings}>
        <img src={require("../Imagenes/Frozen.png")} alt="" />
        <img src={require("../Imagenes/Intensamente.png")} alt="" />
        <img src={require("../Imagenes/Luca.png")} alt="" />
        <img src={require("../Imagenes/Encanto.png")} alt="" />
        <img src={require("../Imagenes/Coco.png")} alt="" />
        <img src={require("../Imagenes/Ralph.png")} alt="" />
        <img src={require("../Imagenes/Frozen.png")} alt="" />
        <img src={require("../Imagenes/Intensamente.png")} alt="" />
        <img src={require("../Imagenes/Luca.png")} alt="" />
        <img src={require("../Imagenes/Encanto.png")} alt="" />
        <img src={require("../Imagenes/Coco.png")} alt="" />
        <img src={require("../Imagenes/Ralph.png")} alt="" />
      </Slider>
    </header>
  );
}

export default Pelicula;
  