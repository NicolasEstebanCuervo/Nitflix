import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getRandomMediaURL } from "../FuncionesApi/Funciones";
import Navegacion from "../Componentes/Navegacion";
import PieDePagina from "../Componentes/PieDePagina";

export default function PeliculaPage() {
    const { id } = useParams();
    const [movies, setMovies] = useState(null);
    const [valoration, setValoration] = useState(0);

    useEffect(() => {
        getRandomMediaURL("moviesPage",setMovies,id);
        setValoration(Math.floor(Math.random() * 10));
    }, [id]);

    return (
        <section className="section_pelicula_page">
            <Navegacion />
            <div className="sub_contenedor">
                <div className="primer_contenedor">
                    <img
                        src={
                            movies
                                ? `https://image.tmdb.org/t/p/w500${movies.poster_path}`
                                : ""
                        }
                        alt=""
                    />
                </div>
                <div className="segundo_contenedor">
                    <div className="container_textos_page">
                        <h1>{movies && movies.original_title}</h1>
                        <div className="contenedor_txt_extra">
                            <h5 className="valoracion">
                                Valoracion {valoration}<i className="bi bi-star-fill"></i>
                            </h5>
                            <h5 className="año">2023</h5>
                            <h6 className="calidad">4K Ultra HD</h6>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quo, enim. Dignissimos delectus quidem non
                            soluta? Error quae laudantium iure, saepe debitis
                            quia corporis non laboriosam ab necessitatibus. Vel,
                            numquam nobis. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Dolores aspernatur
                            dolorum aliquid esse autem sequi animi voluptas unde
                            fugit. Itaque, aliquid animi aperiam suscipit
                            excepturi autem delectus accusantium minima quis.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ipsam, dolore. Harum et reiciendis pariatur
                            nemo iure illum facilis. Magni iste neque labore
                            debitis fuga numquam, expedita eius quae in eos.
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ipsam, dolore. Harum et reiciendis pariatur
                            nemo iure illum facilis. Magni iste neque labore
                            debitis fuga numquam, expedita eius quae in eos.
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ipsam, dolore. Harum et reiciendis pariatur
                            nemo iure illum facilis. Magni iste neque labore
                            debitis fuga numquam, expedita eius quae in eos.
                        </p>
                    </div>
                    <button>
                        <i className="bi bi-play-fill"></i> Reproducir
                    </button>
                </div>
            </div>
            <PieDePagina />
        </section>
    );
}
