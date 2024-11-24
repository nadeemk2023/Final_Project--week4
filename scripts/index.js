const API_KEY = `473f3fe0`;
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;
const resultsContainerEl = document.querySelector('.results-container');
const inputField = document.querySelector('#search__input');

async function getMovie(event) {
  event.preventDefault();
  const title = inputField.value;

  const movies = await fetch(`${API_URL}s=${title}`);
  const moviesJson = await movies.json();
  const moviesData = moviesJson.Search.filter(movie => movie.Type === 'movie');

  console.log(moviesData);

  inputField.value = '';

  resultsContainerEl.innerHTML = moviesData
    .map(
      movie => `
    <div class="movie">
        <img src="${movie.Poster}" alt="${movie.Title}" class="movie__img"/>
        <div class="movie__info">
          <div>
            <h3 class="movie__info--title">${movie.Title}</h3>
          </div>
          <div class="movie__info--released">
            <p>Released: ${movie.Year}</p>
          </div>
        </div>
      </div>`
    )
    .join('');
}
