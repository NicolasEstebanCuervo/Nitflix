// React y hooks

import React,{useEffect, useState} from "react";

// Archivo Js de funciones

import { accionFnc } from "../FuncionesApi/Funciones";

function Accion (props){

  const [accion,setAccion] = useState(null)

  useEffect(()=>{
    accionFnc(setAccion)  
  },[])

  return(
    <>
    {accion != null ? (
      <img src={accion} />
    ) : ("no hay personajes ")}
    </>
  )
}

export default Accion