import axios from "axios";

// Funcion que me obtiene un titulo dependiendo el valor del array

const peliculaIndividualFnc = async (index, state) => {
  const id = [
    "yo+soy+betty+la+fea",
    "stranger-things",
    "intouchables",
    "the-simpsons",
    "chucky",
    "narcos"
  ]

  const urlBaseImagen = "https://image.tmdb.org/t/p/w500"; 
  const peticion = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=3417991aa3a16cd1449e8e9448c8e62c&query=${id[index]}`);
  const imagenSerie = urlBaseImagen + peticion.data.results[0].poster_path; 
  const nombreSerie = peticion.data.results[0].original_name;
  const calificacion = Math.round(peticion.data.results[0].vote_average)
  state({nombre: nombreSerie, imagen: imagenSerie, calificacion: calificacion, id: id[index]});
}

// Funcion que me obtiene un titulo tipo serie al azar

const seriesFnc = async (state) => {
  const series = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=3417991aa3a16cd1449e8e9448c8e62c`);
  const seriesArray = series.data.results;
  const randomIndex = Math.floor(Math.random() * seriesArray.length);
  const randomSerie = seriesArray[randomIndex];
  const posterURL = `https://image.tmdb.org/t/p/w500${randomSerie.poster_path}`;
  state(posterURL);
}

// Funcion que me obtiene un titulo tipo comedia al azar

const comediaFnc = async (state) => {
  const comedia = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=3417991aa3a16cd1449e8e9448c8e62c&with_genres=35&sort_by=popularity.desc`);
  const comediaArray = comedia.data.results;
  const randomIndex = Math.floor(Math.random() * comediaArray.length);
  const randomMovie = comediaArray[randomIndex];
  const posterURL = `https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`;
  state(posterURL);
}

// Funcion que me obtiene un titulo tipo anime al azar

const animeFnc = async (state) => {
  const anime = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=3417991aa3a16cd1449e8e9448c8e62c&with_genres=16`);
  const animeArray = anime.data.results;
  const randomIndex = Math.floor(Math.random() * animeArray.length);
  const randomAnime = animeArray[randomIndex];
  const posterURL = `https://image.tmdb.org/t/p/w500${randomAnime.poster_path}`;
  state(posterURL);
}

// Funcion que me obtiene un titulo tipo terror al azar

const terrorFnc = async (state) => {
  const terror = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=3417991aa3a16cd1449e8e9448c8e62c&with_genres=27&sort_by=popularity.desc`);
  const terrorArray = terror.data.results;
  const randomIndex = Math.floor(Math.random() * terrorArray.length);
  const randomMovie = terrorArray[randomIndex];
  const posterURL = `https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`;
  state(posterURL);
}

// Funcion que me obtiene un titulo tipo accion al azar

const accionFnc = async (state) => {
  const superheroes = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=3417991aa3a16cd1449e8e9448c8e62c&with_genres=28&sort_by=popularity.desc`);
  const superheroesArray = superheroes.data.results;
  const randomIndex = Math.floor(Math.random() * superheroesArray.length);
  const randomMovie = superheroesArray[randomIndex];
  const posterURL = `https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`;
  state(posterURL);
}

export{
  peliculaIndividualFnc,
  seriesFnc,
  comediaFnc,
  animeFnc,
  terrorFnc,
  accionFnc,
}