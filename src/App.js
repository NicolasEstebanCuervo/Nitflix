// Hojas de estilo

import './App.css';

// Librerias

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"

// Componentes

import Navegacion from "./Componentes/Navegacion"
import Pelicula from "./Componentes/Pelicula"
import PeliculaIndividual from "./Componentes/PeliculaIndividual"
import Accion from "./Componentes/Accion"
import Series from "./Componentes/Series"
import Animado from "./Componentes/Animado"
import Comedia from "./Componentes/Comedias"
import Terror from "./Componentes/Terror"
import PieDePagina from './Componentes/PieDePagina';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={

            <div>
              <Navegacion/>

              <Pelicula />

              <section className=' container'>
                <section className='contenedor_pelicula_individual'>
                  <h1 id='Semanal'>¿Ya viste el hit semanal?</h1>
                  <PeliculaIndividual Indicepelicula="0"/>
                </section>

                <section className='peliculas'>
                  <h1 id='Series'>¿Listo para una nueva serie?</h1>
                  <div className='contenedor_galeria_peliculas'>
                    <Series />
                    <Series />
                    <Series />
                    <Series />
                    <Series />
                    <Series />
                    <Series />
                  </div>
                </section>

                <section className='contenedor_pelicula_individual'>
                  <h1>Porque viste Friends</h1>
                  <PeliculaIndividual Indicepelicula="1"/>
                </section>

                <section className='peliculas'>
                  <h1 id='Comedia'>Para no parar de reir</h1>
                  <div className='contenedor_galeria_peliculas'>
                    <Comedia />
                    <Comedia />
                    <Comedia />
                    <Comedia />
                    <Comedia />
                    <Comedia />
                    <Comedia />
                  </div>
                </section>

                <section className='contenedor_pelicula_individual'>
                  <h1>Porque viste Son como niños</h1>
                  <PeliculaIndividual Indicepelicula="2"/>
                </section>

                <section className='peliculas'>
                  <h1 className='Animado'>¿Que tal algo animado?</h1>
                  <div className='contenedor_galeria_peliculas'>
                    <Animado />
                    <Animado />
                    <Animado />
                    <Animado />
                    <Animado />
                    <Animado />
                    <Animado />
                  </div>
                </section>

                <section className='contenedor_pelicula_individual'>
                  <h1>Porque viste Un show mas</h1>
                  <PeliculaIndividual Indicepelicula="3"/>
                </section>

                <section className='peliculas'>
                  <h1 id='Terror'>Por si te gusta el terror</h1>
                  <div className='contenedor_galeria_peliculas'>
                    <Terror />
                    <Terror />
                    <Terror />
                    <Terror />
                    <Terror />
                    <Terror />
                    <Terror />
                  </div>
                </section>

                <section className='contenedor_pelicula_individual'>
                  <h1>Porque viste El conjuro</h1>
                  <PeliculaIndividual Indicepelicula="4"/>
                </section>

                <section className='peliculas'>
                  <h1 id='Accion'>¿Te gusta la accion?</h1>
                  <div className='contenedor_galeria_peliculas'>
                    <Accion />
                    <Accion />
                    <Accion />
                    <Accion />
                    <Accion />
                    <Accion />
                    <Accion />
                  </div>
                </section>
                
                <section className='contenedor_pelicula_individual'>
                  <h1>Porque viste Pablo escobar</h1>
                  <PeliculaIndividual Indicepelicula="5"/>
                </section>

              </section> 

              <PieDePagina />
            </div> 

          }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
