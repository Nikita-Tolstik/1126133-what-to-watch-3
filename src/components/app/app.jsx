import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import {NO_MOVIE} from '../../const.js';

// для разработки
import {films} from '../../mocks/films.js';


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

              film={films[0]}
              films={films}
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
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      description: PropTypes.array.isRequired,
      rating: PropTypes.number.isRequired,
      quantityRatings: PropTypes.number.isRequired,
      director: PropTypes.string.isRequired,
      starring: PropTypes.string.isRequired,
      videoPreview: PropTypes.string.isRequired,
    }).isRequired, PropTypes.number.isRequired,
  ]).isRequired,
};

export default App;
