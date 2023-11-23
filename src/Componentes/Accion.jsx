import React, { useEffect, useState } from "react";
import { getRandomMediaURL } from "../FuncionesApi/Funciones";

function Accion() {
    const [accion, setAccion] = useState(null);

    useEffect(() => {
        getRandomMediaURL("accion", setAccion);
    }, []);

    return (
        <>
            {accion != null ? (
                <img
                    src={`https://image.tmdb.org/t/p/w500${accion.poster_path}`}
                    alt="Serie Poster"
                    onClick={() => {
                        window.location.href = `./Movies/${accion.id}`;
                    }}
                />
            ) : (
                "No hay accion "
            )}
        </>
    );
}

export default Accion;
