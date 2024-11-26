const API_KEY = `473f3fe0`;
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;
const resultsContainerEl = document.querySelector('.results-container');
const inputField = document.querySelector('#search__input');

async function getMovies(event) {
  event.preventDefault();
  const title = inputField.value;
  localStorage.setItem('search', title);

  const movies = await fetch(`${API_URL}s=${title}`);
  const moviesJson = await movies.json();
  const moviesData = moviesJson.Search.filter(movie => movie.Type === 'movie');

  inputField.value = '';

  resultsContainerEl.innerHTML = moviesData
    .map(movie => movieHTML(movie))
    .join('');
}

function movieHTML(movie) {
  return `
  <div class="movie" onclick="showMovieDetails('${movie.imdbID}')">
        <img src="${movie.Poster}" alt="${movie.Title}" class="movie__img"/>
        <div class="movie__info">
          <div>
            <h3 class="movie__info--title">${movie.Title}</h3>
          </div>
          <div class="movie__info--released">
            <p>Released: ${movie.Year}</p>
          </div>
        </div>
      </div>`;
}

function showMovieDetails(imdbId) {
  localStorage.setItem('imdbId', imdbId);
  // window.location.href = `${window.location.origin}/movie-details.html`;
  // the above redirect works but is commented out for now because I am still building the movie details page and testing issues on this page still
}
