import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import {getScreenType} from '../../reducer/screen-type/selector.js';
import {ScreenType, ActionCreator} from '../../reducer/screen-type/screen-type.js';
import {Operation as UserOperation} from '../../reducer/user/user.js';


class App extends PureComponent {

  _renderAppScreen() {
    const {title, genre, year, onCardFilmClick, onSwitchScreenMovie, onLogin, selectFilm, screenType} = this.props;

    if (screenType === ScreenType.WELCOME) {
      return (
        <Main

          title={title}
          genre={genre}
          year={year}
          onCardFilmClick={(film) => {
            onCardFilmClick(film);
            onSwitchScreenMovie();
          }}
        />
      );
    }

    if (screenType === ScreenType.AUTH) {
      return (
        <SignIn
          onSubmit={onLogin}
        />
      );
    }

    if (screenType === ScreenType.MOVIE) {
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

          {/* <Route exact path="/movie">
            <MoviePage

              // film={films[0]}
              // films={films}
            />
          </Route> */}

          <Route exact path="/auth">
            <SignIn
              onSubmit={() => {}}
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

  screenType: PropTypes.oneOf(
      [ScreenType.WELCOME, ScreenType.MOVIE, ScreenType.AUTH]
  ).isRequired,

  onLogin: PropTypes.func.isRequired,
  onCardFilmClick: PropTypes.func.isRequired,
  onSwitchScreenMovie: PropTypes.func.isRequired,

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

const mapStateToProps = (state) => ({
  screenType: getScreenType(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogin(authData) {
    dispatch(UserOperation.login(authData));
  },
  onSwitchScreenMovie() {
    dispatch(ActionCreator.changeScreen(ScreenType.MOVIE));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
