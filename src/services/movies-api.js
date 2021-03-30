import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const API_KEY = 'c4360f2fc66490777a6befee451fce21';

const fetchMovies = () => {
  return axios
    .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
    .then(({ data }) => data.results);
};

const fetchByKeyWord = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?query=cat&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
    )
    .then(({ data }) => data.results);
};

const genres = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    )
    .then(({ data }) => data.results);
};

export default { fetchMovies, fetchByKeyWord, genres };
