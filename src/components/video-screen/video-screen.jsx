import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getTimeElapsed, getProgress} from '../../utils/utils.js';
import {ActionCreator, ScreenType} from '../../reducer/screen-type/screen-type.js';


const VideoScreen = ({film, children, currentTime, duration, isPlaying, isLoading, onFullScreenClick, onPlayButtonClick, onScreenMovieSwitch}) => {
  const timeElapsed = getTimeElapsed(currentTime, duration);
  const progress = getProgress(currentTime, duration);

  return (
    <div className="player">

      {children}

      <button
        onClick={onScreenMovieSwitch}
        type="button" className="player__exit">Exit</button>

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
  onScreenMovieSwitch: PropTypes.func.isRequired,

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
  }),

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  onScreenMovieSwitch() {
    dispatch(ActionCreator.changeScreen(ScreenType.MOVIE));
  }
});

export {VideoScreen};
export default connect(null, mapDispatchToProps)(VideoScreen);
