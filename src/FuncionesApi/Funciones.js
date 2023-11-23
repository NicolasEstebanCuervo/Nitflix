import axios from "axios";

// Funcion que me obtiene un titulo dependiendo el valor del array

const peliculaIndividualFnc = async (index, state) => {
    const id = [
        "yo+soy+betty+la+fea",
        "stranger-things",
        "intouchables",
        "the-simpsons",
        "chucky",
        "narcos",
    ];

    const urlBaseImagen = "https://image.tmdb.org/t/p/w500";
    const peticion = await axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=3417991aa3a16cd1449e8e9448c8e62c&query=${id[index]}`
    );
    const imagenSerie = urlBaseImagen + peticion.data.results[0].poster_path;
    const nombreSerie = peticion.data.results[0].original_name;
    state({
        nombre: nombreSerie,
        imagen: imagenSerie,
        id: id[index],
    });
};

const getRandomMediaURL = async (mediaType, state, specificId) => {
    let apiUrl = "";

    switch (mediaType) {
        case "comedia":
            apiUrl =
                "https://api.themoviedb.org/3/discover/movie?api_key=3417991aa3a16cd1449e8e9448c8e62c&with_genres=35&sort_by=popularity.desc";
            break;
        case "animado":
            apiUrl =
                "https://api.themoviedb.org/3/discover/tv?api_key=3417991aa3a16cd1449e8e9448c8e62c&with_genres=16";
            break;
        case "terror":
            apiUrl =
                "https://api.themoviedb.org/3/discover/movie?api_key=3417991aa3a16cd1449e8e9448c8e62c&with_genres=27&sort_by=popularity.desc";
            break;
        case "accion":
            apiUrl =
                "https://api.themoviedb.org/3/discover/movie?api_key=3417991aa3a16cd1449e8e9448c8e62c&with_genres=28&sort_by=popularity.desc";
            break;
        case "series":
            apiUrl = `https://api.themoviedb.org/3/discover/tv?api_key=3417991aa3a16cd1449e8e9448c8e62c`;
            break;
        case "seriesPage":
            apiUrl = specificId
                ? `https://api.themoviedb.org/3/tv/${specificId}?api_key=3417991aa3a16cd1449e8e9448c8e62c`
                : `https://api.themoviedb.org/3/discover/tv?api_key=3417991aa3a16cd1449e8e9448c8e62c`;
            break;

        case "moviesPage":
            apiUrl = specificId
                ? `https://api.themoviedb.org/3/movie/${specificId}?api_key=3417991aa3a16cd1449e8e9448c8e62c`
                : `https://api.themoviedb.org/3/discover/movie?api_key=3417991aa3a16cd1449e8e9448c8e62c`;
            break;
        default:
            console.error("Tipo de medio no válido");
            return;
    }

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }

        const data = await response.json();

        if (specificId) {
            state(data);
        } else {
            const idArray = data.results;
            const randomIndex = Math.floor(Math.random() * idArray.length);
            const randomId = idArray[randomIndex];

            const randomData = {
                id: randomId.id,
                poster_path: randomId.poster_path,
                name: randomId.original_title,
            };
            state(randomData);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export { peliculaIndividualFnc, getRandomMediaURL };
