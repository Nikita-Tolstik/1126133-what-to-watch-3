import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import {NO_MOVIE} from '../../const.js';


class App extends PureComponent {

  _renderAppScreen() {
    const {title, genre, year, onCardFilmClick, selectFilm} = this.props;

    if (selectFilm === NO_MOVIE) {
      return (
        <Main

          title={title}
          genre={genre}
          year={year}
          onCardFilmClick={onCardFilmClick}
        />
      );
    }

    if (selectFilm !== NO_MOVIE) {
      return (
        <MoviePage

          film={selectFilm}
        />
      );
    }

    return null;
  }


  render() {

    return (
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            {this._renderAppScreen()}
          </Route>

          <Route exact path="/movie">
            <MoviePage

              // film={films[0]}
              // films={films}
            />
          </Route>

        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  onCardFilmClick: PropTypes.func.isRequired,

  selectFilm: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      scoresCount: PropTypes.number.isRequired,
      director: PropTypes.string.isRequired,
      starring: PropTypes.string.isRequired,
      runTime: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.number.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      videoLink: PropTypes.string.isRequired,
      videoPreview: PropTypes.string.isRequired,
    }).isRequired,
    PropTypes.number.isRequired,
  ]).isRequired,
};

export default App;
