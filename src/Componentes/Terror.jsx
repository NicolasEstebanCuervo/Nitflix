// React y hooks

import React,{useEffect, useState} from "react";

// Archivo Js de funciones

import { terrorFnc } from "../FuncionesApi/Funciones";

function Terror (props){

  const [terror,setTerror] = useState(null)

  useEffect(()=>{
    terrorFnc(setTerror)  
  },[])

  return(
    <>
    {terror != null ? (
      <img src={terror} />
    ) : ("no hay personajes ")}
    </>
  )
}

export default Terror