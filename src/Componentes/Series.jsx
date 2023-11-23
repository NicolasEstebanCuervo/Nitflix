import React, { useEffect, useState } from "react";
import { getRandomMediaURL } from "../FuncionesApi/Funciones";

function Series() {
    const [series, setSeries] = useState(null);

    useEffect(() => {
        getRandomMediaURL("series", setSeries);
    }, []);

    return (
        <>
            {series != null ? (
                <img
                    src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                    alt="Serie Poster"
                    onClick={() => {
                        window.location.href = `./Series/${series.id}`;
                    }}
                />
            ) : (
                "No hay series "
            )}
        </>
    );
}

export default Series;
