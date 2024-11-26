const imdbId = localStorage.getItem('imdbId');

const API_KEY = `473f3fe0`;
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbId}`;
