import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const API_KEY = 'c4360f2fc66490777a6befee451fce21';

// тренды
const fetchMovies = () => {
  return axios
    .get(`/3/trending/all/day?api_key=${API_KEY}`)
    .then(({ data }) => data.results);
};

// по ключевому слову
const fetchByKeyWord = () => {
  return axios
    .get(
      `/3/search/movie?query=cat&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
    )
    .then(({ data }) => data.results);
};

// инфо о фильме
const fetchMovieDetals = ({ movieId }) => {
  return axios
    .get(`/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(({ data }) => data);
};

// жанры
const fetchGenres = () => {
  return axios
    .get(`/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then(({ data }) => data.genres);
};

// обзоры
const fetchReviews = ({ movieId }) => {
  return axios
    .get(`/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    .then(({ data }) => data.results);
};

// актеры
const fetchCast = ({ movieId }) => {
  return axios
    .get(`/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
    .then(res => res.data);
};

export default {
  fetchMovies,
  fetchByKeyWord,
  fetchMovieDetals,
  fetchGenres,
  fetchReviews,
  fetchCast,
};
