import React, { useEffect, useState } from "react";
import { getRandomMediaURL } from "../FuncionesApi/Funciones";

function Animado() {
    const [animado, setAnimado] = useState(null);

    useEffect(() => {
        getRandomMediaURL("animado", setAnimado);
    }, []);

    return (
        <>
            {animado != null ? (
                <img
                    src={`https://image.tmdb.org/t/p/w500${animado.poster_path}`}
                    alt="Serie Poster"
                    onClick={() => {
                        window.location.href = `./Series/${animado.id}`;
                    }}
                />
            ) : (
                "No hay animado "
            )}
        </>
    );
}

export default Animado;
