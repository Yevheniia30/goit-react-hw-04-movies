import { Component } from 'react';
import s from './App.module.css';
import MoviesList from './Components/MoviesList';
import Navigation from './Components/Navigation';

class App extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className={s.App}>
        <Navigation />
        <MoviesList />
      </div>
    );
  }
}

export default App;
