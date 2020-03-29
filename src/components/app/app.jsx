import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, Router} from "react-router-dom";
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import AddReview from '../add-review/add-review.jsx';
import VideoScreen from '../video-screen/video-screen.jsx';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player.js';
import {Operation as CommentOperation} from '../../reducer/comment/comment.js';
import {AppRoute} from '../../const.js';
import {ActionCreator as DataActionCreator} from '../../reducer/data/data.js';
import history from '../../history.js';
import {getCurrentFilm} from '../../reducer/data/selector.js';


const VideoScreenWrapped = withVideoPlayer(VideoScreen);

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

    if (`screenType === ScreenType.AUTH`) {
      return (
        <SignIn
        />
      );
    }

    if (`screenType === ScreenType.ADD_REVIEW`) {
      return (
        <AddReview
          film={``}
        />
      );
    }

    return null;
  }


  render() {
    const {onMovieCardClick, currentFilm} = this.props;

    return (
      <Router history={history}>
        <Switch>

          <Route
            exact
            path={AppRoute.ROOT}
            render={() => {
              return (
                <Main
                  onCardFilmClick={(film) => {
                    onMovieCardClick(film.id);
                  }}
                />
              );
            }}
          />


          <Route
            exact
            path={`${AppRoute.FILMS}/:id`}
            render={(props) => {
              const {match} = props;
              const currentId = Number(match.params.id);

              return (
                <MoviePage
                  id={currentId}
                  onCardFilmClick={(film) => {
                    onMovieCardClick(film.id);
                  }}
                />
              );
            }}
          />


          <Route
            exact
            path={`${AppRoute.PLAYER}/:id`}
            render={() => {
              return (
                <VideoScreenWrapped
                  film={currentFilm}
                />
              );
            }}
          />


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


        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  onMovieCardClick: PropTypes.func.isRequired,

  currentFilm: PropTypes.oneOfType([
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
  currentFilm: getCurrentFilm(state),
});


const mapDispatchToProps = (dispatch) => ({
  onMovieCardClick(id) {
    dispatch(DataActionCreator.setCurrentId(id));
    dispatch(CommentOperation.getComments(id));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
