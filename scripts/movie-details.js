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
  const {
    Title,
    Poster,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Metascore,
    imdbRating,
    imdbVotes,
    BoxOffice,
  } = movie;
  return `<div class="movie__details--container">
        <div class="movie__details-img-container">
          <img
            src="${Poster}"
            alt="${Title} Poster"
            class="movie__details--img"
          />
        </div>
        <div class="movie__details--info-container">
          <h2 class="movie__details--title">${Title}</h2>
          <p class="movie__details"><strong>Rated:</strong> ${Rated}</p>
          <p class="movie__details"><strong>Released:</strong> ${Released}</p>
          <p class="movie__details"><strong>Runtime:</strong> ${Runtime}</p>
          <p class="movie__details"><strong>Genre:</strong> ${Genre}</p>
          <p class="movie__details"><strong>Director:</strong> ${Director}</p>
          <p class="movie__details"><strong>Writer(s):</strong> ${Writer}</p>
          <p class="movie__details"><strong>Actors:</strong> ${Actors}</p>
          <p class="movie__details movie__details--plot"><strong>Plot:</strong> ${Plot}</p>
          <p class="movie__details"><strong>Language:</strong>${Language}</p>
          <p class="movie__details"><strong>Country:</strong> ${Country}</p>
          <p class="movie__details"><strong>Awards:</strong> ${Awards}</p>
          <p class="movie__details"><strong>Metascore:</strong> ${Metascore}</p>
          <p class="movie__details"><strong>IMDB Rating:</strong> ${imdbRating}</p>
          <p class="movie__details"><strong>IMDB Votes:</strong> ${imdbVotes}</p>
          <p class="movie__details"><strong>Box Office:</strong> ${BoxOffice}</p>
        </div>
      </div>`;
}

getMovieDetails(imdbId);
