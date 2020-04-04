import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import ErrorMessage from '../error-message/error-message.jsx';
import {getTimeElapsed, getProgress} from '../../utils/utils.js';
import {AppRoute} from '../../const.js';


const VideoScreen = (props) => {
  const {film,
    children,
    currentTime,
    duration,
    isPlaying,
    isLoading,
    onFullScreenClick,
    onPlayButtonClick,
  } = props;


  const timeElapsed = getTimeElapsed(currentTime, duration);
  const progress = getProgress(currentTime, duration);

  return (
    <div className="player">

      {children}

      <Link
        to={`${AppRoute.FILMS}/${film.id}`}
        className="player__exit">
          Exit
      </Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={`${progress}`} max="100"></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{timeElapsed}</div>
        </div>

        <div className="player__controls-row">
          <button
            disabled={isLoading}
            onClick={onPlayButtonClick}
            type="button" className="player__play">
            <svg viewBox="0 0 14 21" width="14" height="21">
              <use xlinkHref={isPlaying ? `#pause` : `#play-s`}></use>
            </svg>
            <span>{isPlaying ? `Pause` : `Play`}</span>
          </button>

          <div className="player__name">{film.title}</div>

          <button
            onClick={onFullScreenClick}
            type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>

      <ErrorMessage />

    </div>
  );
};

VideoScreen.propTypes = {
  duration: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onFullScreenClick: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,

  film: PropTypes.oneOfType([
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};


export default VideoScreen;
