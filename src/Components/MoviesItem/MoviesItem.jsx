const MoviesItem = ({ title, poster, overview, userScore, genres, date }) => {
  return (
    <li>
      <button>go back</button>
      <img src={`https://image.tmdb.org/t/p/w300${poster}`} alt={title} />
      <h2>
        {title} <span>({date})</span>{' '}
      </h2>
      <p>User score: {userScore}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres}</p>
    </li>
  );
};

export default MoviesItem;
