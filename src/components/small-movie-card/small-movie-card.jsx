import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

class SmallMovieCard extends PureComponent {

  render() {
    const {
      film,
      id,
      activePlayerId,
      onCardFilmClick,
      onMouseFilmEnter,
      onMouseFilmLeave,
      onMouseIdEnter,
      onMouseIdLeave
    } = this.props;

    return (

      <article
        onMouseEnter={() => {
          onMouseFilmEnter(film);
          onMouseIdEnter(id);
        }}
        onMouseLeave={() => {
          onMouseFilmLeave();
          onMouseIdLeave();
        }}
        className="small-movie-card catalog__movies-card">

        <div onClick={() => {
          onCardFilmClick(film);
        }}
        className="small-movie-card__image">

          <VideoPlayer

            isPlaying={activePlayerId === id}
            posterImage={film.previewImage}
            videoPreview={film.videoPreview}
          />
        </div>

        <h3 className="small-movie-card__title">

          <a onClick={(evt) => {
            evt.preventDefault();
            onCardFilmClick(film);
          }}
          className="small-movie-card__link" href="movie-page.html">

            {film.title}
          </a>
        </h3>
      </article>
    );
  }
}


SmallMovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  activePlayerId: PropTypes.number.isRequired,
  onMouseIdEnter: PropTypes.func.isRequired,
  onMouseIdLeave: PropTypes.func.isRequired,
  onCardFilmClick: PropTypes.func.isRequired,
  onMouseFilmEnter: PropTypes.func.isRequired,
  onMouseFilmLeave: PropTypes.func.isRequired,
  film: PropTypes.shape({
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
};

export default SmallMovieCard;
