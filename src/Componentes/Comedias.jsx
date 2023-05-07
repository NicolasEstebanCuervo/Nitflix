// React y hooks

import React,{useEffect, useState} from "react";

// Archivo Js de funciones

import { comediaFnc } from "../FuncionesApi/Funciones";

function Comedia (props){

  const [comedia,setComedia] = useState(null)

  useEffect(()=>{
    comediaFnc(setComedia)  
  },[])

  return(
    <>
    {comedia != null ? (
      <img src={comedia} />
    ) : ("no hay personajes ")}
    </>
  )
}

export default Comedia