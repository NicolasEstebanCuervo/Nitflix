// React y hooks

import React,{useEffect, useState} from "react";

// Archivo Js de funciones

import { animeFnc } from "../FuncionesApi/Funciones";

function Animado (props){

  const [animes,setAnimes] = useState(null)

  useEffect(()=>{
    animeFnc(setAnimes)  
  },[])

  return(
    <>
    {animes != null ? (
      <img src={animes} />
    ) : ("no hay personajes ")}
    </>
  )
}

export default Animado