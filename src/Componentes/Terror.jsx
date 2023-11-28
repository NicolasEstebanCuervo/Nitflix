import React, { useEffect, useState } from "react";
import { getRandomMediaURL } from "../FuncionesApi/Funciones";

function Terror() {
    const [terror, setTerror] = useState(null);

    useEffect(() => {
        getRandomMediaURL("terror", setTerror);
    }, []);

    return (
        <>
            {terror != null ? (
                <img
                    src={`https://image.tmdb.org/t/p/w500${terror.poster_path}`}
                    alt="Serie Poster"
                    onClick={() => {
                        window.location.href = `./Movies/${terror.id}`;
                    }}
                />
            ) : (
                "There are no movies with the category Comedy"
            )}
        </>
    );
}

export default Terror;
