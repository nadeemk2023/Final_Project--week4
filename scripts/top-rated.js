const API_KEY = `facc80d3358495491826ddcd11983888`;
const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
const baseImgUrl = `https://image.tmdb.org/t/p/w500/`;
const movieList = document.querySelector('#top-movies');

async function getTopRatedMovies() {
  let englishMovies = [];
  try {
    const topMovies = await fetch(API_URL);
    const topMoviesData = await topMovies.json();
    englishMovies = topMoviesData.results.filter(
      movie => movie.original_language === 'en'
    );
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
  englishMovies.sort((a, b) => b.vote_average - a.vote_average);
  movieList.innerHTML = englishMovies
    .map(
      movie =>
        `<div class="movie" onclick="showMovieDetails('${movie.id}')">
      <div class="movie__bg" style="background-image: url(${baseImgUrl}${
          movie.poster_path
        })"></div>
      <div class="movie__info">
        <h3 class="movie__info--title">${movie.title}</h3>
        <p class="movie__info--rating">Rating: ${movie.vote_average.toFixed(
          1
        )}</p>
        <p class="movie__info--released">Released: ${movie.release_date}</p>
      </div>
    </div>`
    )
    .join('');
}

getTopRatedMovies();
