import React, { useEffect, useState } from "react";
import { getRandomMediaURL } from "../FuncionesApi/Funciones";

function Comedias() {
    const [comedia, setComedia] = useState(null);

    useEffect(() => {
        getRandomMediaURL("comedia", setComedia);
    }, []);

    return (
        <>
            {comedia != null ? (
                <img
                    src={`https://image.tmdb.org/t/p/w500${comedia.poster_path}`}
                    alt="Serie Poster"
                    onClick={() => {
                        window.location.href = `./Movies/${comedia.id}`;
                    }}
                />
            ) : (
                "There are no movies with the category Comedy"
            )}
        </>
    );
}

export default Comedias;
