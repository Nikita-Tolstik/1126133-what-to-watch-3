import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, Router} from "react-router-dom";
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import AddReview from '../add-review/add-review.jsx';
import VideoScreen from '../video-screen/video-screen.jsx';
import MyList from '../my-list/my-list.jsx';
import PrivateRoute from '../private-route/private-route.jsx';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player.js';
import {Operation as CommentOperation} from '../../reducer/comment/comment.js';
import {ActionCreator as DataActionCreator} from '../../reducer/data/data.js';
import {getFilms, getCurrentFilm, getCurrentId} from '../../reducer/data/selector.js';
import history from '../../history.js';
import {AppRoute} from '../../const.js';


const VideoScreenWrapped = withVideoPlayer(VideoScreen);


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.handleFilmSet = this.handleFilmSet.bind(this);
  }

  handleFilmSet(currentId) {
    const {
      onSetCurrentId,
      initialFilms,
    } = this.props;

    const isFindFilm = initialFilms.find((it) => it.id === currentId);

    if (!isFindFilm) {
      onSetCurrentId(currentId);
    }
  }

  render() {
    const {onMovieCardClick, currentFilm, id} = this.props;

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

              if (currentId !== id) {
                this.handleFilmSet(currentId);
              }

              return (
                <MoviePage
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
            render={(props) => {
              const {match} = props;
              const currentId = Number(match.params.id);

              if (currentId !== id) {
                this.handleFilmSet(currentId);
              }

              return (
                <VideoScreenWrapped
                  film={currentFilm}
                />
              );
            }}
          />


          <PrivateRoute
            exact
            path={`${AppRoute.FILMS}/:id${AppRoute.REVIEW}`}
            render={(props) => {

              const {match} = props;
              const currentId = Number(match.params.id);

              if (currentId !== id) {
                this.handleFilmSet(currentId);
              }

              return (
                <AddReview
                  film={currentFilm}
                />
              );
            }}
          />


          <PrivateRoute
            exact
            path={AppRoute.MY_LIST}
            render={() => {
              return (
                <MyList
                  onCardFilmClick={(film) => {
                    onMovieCardClick(film.id);
                  }}
                />
              );
            }}
          />


          <Route exact path={AppRoute.LOGIN}>
            <SignIn />
          </Route>


        </Switch>
      </Router>
    );
  }
}

App.propTypes = {

  id: PropTypes.number.isRequired,
  onSetCurrentId: PropTypes.func.isRequired,
  initialFilms: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,


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
  id: getCurrentId(state),
  initialFilms: getFilms(state),
  currentFilm: getCurrentFilm(state),
});


const mapDispatchToProps = (dispatch) => ({
  onMovieCardClick(id) {
    dispatch(DataActionCreator.setCurrentId(id));
    dispatch(CommentOperation.getComments(id));
  },
  onSetCurrentId(id) {
    dispatch(DataActionCreator.setCurrentId(id));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
