// React y hooks

import React,{useEffect, useState} from "react";

// Archivo Js de funciones

import { peliculaIndividualFnc } from "../FuncionesApi/Funciones";

function PeliculaIndividual ({Indicepelicula}){
  const [pelicula, setPelicula] = useState(null);

  useEffect(()=>{
    peliculaIndividualFnc(Indicepelicula,setPelicula)  
  },[]);

  return(
    <>
      {pelicula != null ? (
        <div className="contenedor_pelicula"> 
          <img src={pelicula.imagen} alt={pelicula.original_name} />
          <div className="contenedor_textos">
            <a className="titulo" href="#">{pelicula.nombre}</a>
            <div className="contenedor_txt_extra">
              <h5 className="valoracion"> Valoracion {pelicula.calificacion} <i class="bi bi-star-fill"></i></h5>
              <h5 className="calidad">4K Ultra HD</h5>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, enim. Dignissimos delectus quidem non soluta? Error quae laudantium iure, saepe debitis quia corporis non laboriosam ab necessitatibus. Vel, numquam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aspernatur dolorum aliquid esse autem sequi animi voluptas unde fugit. Itaque, aliquid animi aperiam suscipit excepturi autem delectus accusantium minima quis.</p>
          </div>
        </div>  
      ) : ("no hay personajes ")}
    </>
  );   
}

export default PeliculaIndividual;
