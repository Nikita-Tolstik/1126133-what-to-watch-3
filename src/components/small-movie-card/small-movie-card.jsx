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
            img={film.preview_image}
            videoPreview={film.preview_video_link}
          />
        </div>

        <h3 className="small-movie-card__title">

          <a onClick={(evt) => {
            evt.preventDefault();
            onCardFilmClick(film);
          }}
          className="small-movie-card__link" href="movie-page.html">

            {film.name}
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
  }).isRequired,
};

export default SmallMovieCard;
