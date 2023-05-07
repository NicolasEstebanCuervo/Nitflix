// React y hooks

import React,{useEffect, useState} from "react";

// Archivo Js de funciones

import { seriesFnc } from "../FuncionesApi/Funciones";

function Series (props){

  const [series,setSeries] = useState(null)

  useEffect(()=>{
    seriesFnc(setSeries)  
  },[])

  return(
    <>
    {series != null ? (
      <img src={series} />
    ) : ("no hay personajes ")}
    </>
  )
}

export default Series