// React y hooks

import React, { useEffect, useState } from "react";

// Archivo Js de funciones

import { peliculaIndividualFnc } from "../FuncionesApi/Funciones";

function PeliculaIndividual({ Indicepelicula, id }) {
    const [pelicula, setPelicula] = useState(null);

    useEffect(() => {
        peliculaIndividualFnc(Indicepelicula, setPelicula);
    }, []);

    return (
        <>
            {pelicula != null ? (
                <div className="container_movie">
                    <img
                        src={pelicula.imagen}
                        alt={pelicula.original_name}
                    />
                    <div className="container_texts">
                        <a className="titulo" href={`/Series/${id}`}>
                            {pelicula.nombre}
                        </a>
                        <div className="container_txt_extra">
                            <h5 className="valoracion">
                                {" "}
                                Valoracion {pelicula.calificacion}{" "}
                                <i className="bi bi-star-fill"></i>
                            </h5>
                            <h5 className="calidad">4K Ultra HD</h5>
                        </div>
                        <p>
                            Lorems ipsum dolors sit amet consectetur adipisicing
                            elit. Quo, enim. Dignissimos delectus quidem non
                            soluta? Error quae laudantium iure, saepe debitis
                            quia corporis non laboriosam ab necessitatibus. Vel,
                            numquam nobis. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Dolores aspernatur
                            dolorum aliquid esse autem sequi animi voluptas unde
                        </p>
                    </div>
                </div>
            ) : (
                "no hay personajes "
            )}
        </>
    );
}

export default PeliculaIndividual;
