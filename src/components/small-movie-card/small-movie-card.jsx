import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player.jsx';
import {AppRoute} from '../../const.js';

const SmallMovieCard = ({film, id, activePlayerId, onCardFilmClick, onMouseIdEnter, onMouseIdLeave}) => {

  return (
    <article
      onMouseEnter={() => {
        onMouseIdEnter(id);
      }}
      onMouseLeave={onMouseIdLeave}
      className="small-movie-card catalog__movies-card">

      <Link to={`${AppRoute.FILMS}/${film.id}`}>
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
      </Link>

      <h3 className="small-movie-card__title">

        <Link
          to={`${AppRoute.FILMS}/${film.id}`}
          onClick={() => {
            onCardFilmClick(film);
          }}
          className="small-movie-card__link">
          {film.title}
        </Link>
      </h3>
    </article>
  );
};


SmallMovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  activePlayerId: PropTypes.number.isRequired,
  onMouseIdEnter: PropTypes.func.isRequired,
  onMouseIdLeave: PropTypes.func.isRequired,
  onCardFilmClick: PropTypes.func.isRequired,

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
    stars: PropTypes.array.isRequired,
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    videoLink: PropTypes.string.isRequired,
    videoPreview: PropTypes.string.isRequired,
  }).isRequired,
};

export default SmallMovieCard;
