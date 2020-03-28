import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import AddReview from '../add-review/add-review.jsx';
import {getScreenType} from '../../reducer/screen-type/selector.js';
import {ScreenType, ActionCreator} from '../../reducer/screen-type/screen-type.js';
import {Operation as CommentOperation} from '../../reducer/comment/comment.js';

import VideoScreen from '../video-screen/video-screen.jsx';
import withVideoControls from '../../hocs/with-video-controls/with-video-controls.js';

const VideoScreenWrapped = withVideoControls(VideoScreen);

const promoMock = {
  id: 1,
  title: `Fantastic Beasts: The Crimes of Grindelwald2`,
  posterImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Fantastic_Beasts.jpg`,
  previewImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Fantastic_Beasts.jpg`,
  backgroundColor: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  description: `Fantastic Beasts: The Crimes of Grindelwald`,
  rating: 5,
  scoresCount: 7,
  director: `Wes Andreson`,
  stars: [`Bill Murray`, `Edward Norton`, `Jude Law`],
  runTime: 55,
  genre: `Action`,
  released: 44,
  isFavorite: true,
  videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  videoPreview: `https://upload.wikimedia.org/`,
};

class App extends PureComponent {

  _renderAppScreen() {

    const {onElementClick, onCommentGet, onSwitchScreenMovie, activeValue, screenType} = this.props;
    const selectFilm = activeValue;
    const onCardFilmClick = onElementClick;

    if (screenType === ScreenType.WELCOME) {
      return (
        <Main
          onCardFilmClick={(film) => {
            onCardFilmClick(film);
            onSwitchScreenMovie();
            onCommentGet(film.id);
          }}
        />
      );
    }

    if (screenType === ScreenType.AUTH) {
      return (
        <SignIn
        />
      );
    }

    if (screenType === ScreenType.MOVIE) {
      return (
        <MoviePage
          onCardFilmClick={(film) => {
            onCardFilmClick(film);
            onCommentGet(film.id);
          }}
          film={selectFilm}
        />
      );
    }

    if (screenType === ScreenType.ADD_REVIEW) {
      return (
        <AddReview
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

              film={promoMock}
            />
          </Route>

          <Route exact path="/auth">
            <SignIn
              onSubmit={() => {}}
            />
          </Route>

          <Route exact path="/review">
            <AddReview
              film={promoMock}
            />
          </Route>


          <Route exact path="/video">
            <VideoScreenWrapped
              film={promoMock}
            />
          </Route>

        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  screenType: PropTypes.oneOf(
      [ScreenType.WELCOME, ScreenType.MOVIE, ScreenType.AUTH, ScreenType.ADD_REVIEW]
  ).isRequired,

  onCommentGet: PropTypes.func.isRequired,
  onElementClick: PropTypes.func.isRequired,
  onSwitchScreenMovie: PropTypes.func.isRequired,

  activeValue: PropTypes.oneOfType([
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
      stars: PropTypes.array.isRequired,
      runTime: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.number.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      videoLink: PropTypes.string.isRequired,
      videoPreview: PropTypes.string.isRequired,
    }),
    PropTypes.number.isRequired
  ]).isRequired,
};

const mapStateToProps = (state) => ({
  screenType: getScreenType(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSwitchScreenMovie() {
    dispatch(ActionCreator.changeScreen(ScreenType.MOVIE));
  },
  onCommentGet(id) {
    dispatch(CommentOperation.getComments(id));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
