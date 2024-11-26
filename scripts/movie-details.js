const imdbId = localStorage.getItem('imdbId');

const API_KEY = `473f3fe0`;
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbId}`;

const movieDetailSection = document.querySelector('#movie-details');

async function getMovieDetails(imdbId) {
  const movie = await fetch(`${API_URL}`);
  const movieJson = await movie.json();

  movieDetailSection.innerHTML = movieDetailsHTML(movieJson);
}

function movieDetailsHTML(movie) {
  return `<div class="movie__details--container">
        <div class="movie__details-img-container">
          <img
            src="${movie.Poster}"
            alt="${movie.Title} Poster"
            class="movie__details--img"
          />
        </div>
        <div class="movie__details--info-container">
          <h2 class="movie__details--title">${movie.Title}</h2>
          <p class="movie__details">Rated: ${movie.Rated}</p>
          <p class="movie__details">Released:</p>
          <p class="movie__details">Runtime:</p>
          <p class="movie__details">Genre:</p>
          <p class="movie__details">Director:</p>
          <p class="movie__details">Writer(s):</p>
          <p class="movie__details">Actors:</p>
          <p class="movie__details">Plot:</p>
          <p class="movie__details">Language:</p>
          <p class="movie__details">Country:</p>
          <p class="movie__details">Awards:</p>
          <p class="movie__details">Metascore:</p>
          <p class="movie__details">IMDB Rating:</p>
          <p class="movie__details">IMDB Votes:</p>
          <p class="movie__details">Box Office:</p>
        </div>
      </div>`;
}

getMovieDetails(imdbId);
