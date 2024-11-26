const API_KEY = `473f3fe0`;
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;
const resultsContainerEl = document.querySelector('.results-container');
const inputField = document.querySelector('#search__input');

window.addEventListener('DOMContentLoaded', () => {
  const previousSearch = localStorage.getItem('search');
  if (previousSearch) {
    inputField.value = previousSearch;
    getMovies(null, previousSearch);
  }
});

async function getMovies(event, searchTerm = null) {
  if (event) event.preventDefault();
  const title = searchTerm || inputField.value;
  localStorage.setItem('search', title);

  const movies = await fetch(`${API_URL}s=${title}`);
  const moviesJson = await movies.json();
  const moviesData = moviesJson.Search.filter(movie => movie.Type === 'movie');

  resultsContainerEl.innerHTML = moviesData
    .map(movie => movieHTML(movie))
    .join('');

  if (!searchTerm) inputField.value = '';
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
  window.location.href = `${window.location.origin}/movie-details.html`;
}

function resetSearch() {
  localStorage.removeItem('search');
}
