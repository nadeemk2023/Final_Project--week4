const API_KEY = `473f3fe0`;
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;
const resultsContainerEl = document.querySelector('.results-container');
const inputField = document.querySelector('#search__input');

async function getMovie(event) {
  event.preventDefault();
  let title = inputField.value;

  const movies = await fetch(`${API_URL}s=${title}`);
  const moviesJson = await movies.json();
  const moviesData = moviesJson.Search;

  inputField.value = '';
  console.log(moviesData);
}
