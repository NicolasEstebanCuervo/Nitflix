// Hojas de estilo

import './App.css';

// Librerias

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"

// Componentes

import IndexPage from './Pages/IndexPage';
import SeriesPage from './Pages/SeriesPage';
import MoviesPage from './Pages/MoviesPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage></IndexPage>}/>
          <Route path="/Series/:id" element={<SeriesPage></SeriesPage>}></Route>
          <Route path="/Movies/:id" element={<MoviesPage></MoviesPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
