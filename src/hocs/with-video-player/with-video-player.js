import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        duration: 0,
        prevTime: 0,
        currentTime: 0,
        isPlaying: true,
      };

      this.videoRef = createRef();
      this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
      this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this);
      this._handleDefaultControlsChange = this._handleDefaultControlsChange.bind(this);
    }

    componentDidMount() {
      const video = this.videoRef.current;

      video.ondurationchange = () => {
        this.setState({
          duration: video.duration,
        });
      };

      video.onplay = () => {
        this.setState({
          isPlaying: true,
        });
      };

      video.onpause = () => {
        this.setState({
          isPlaying: false,
        });
      };

      video.ontimeupdate = () => {
        this.setState((prevState) => ({
          prevTime: prevState.currentTime,
          currentTime: Math.floor(video.currentTime),
        }));
      };
    }

    componentDidUpdate() {
      const video = this.videoRef.current;

      video.addEventListener(`fullscreenchange`, this._handleDefaultControlsChange);

      if (this.state.isPlaying) {
        video.play();
      } else {
        if (this.state.currentTime === this.state.prevTime) {
          video.pause();
        }
      }
    }

    componentWillUnmount() {
      const video = this.videoRef.current;
      video.src = ``;
      video.oncanplaythrough = null;
      video.ondurationchange = null;
      video.onplay = null;
      video.onpause = null;
      video.ontimeupdate = null;

      video.removeEventListener(`fullscreenchange`, this._handleDefaultControlsChange);
    }

    _handleDefaultControlsChange() {
      const video = this.videoRef.current;

      if (document.fullscreenElement !== null) {
        video.controls = true;
      } else {
        video.controls = false;
      }
    }

    handlePlayButtonClick() {
      this.setState((prevState) => ({
        isPlaying: !prevState.isPlaying,
      }));
    }

    handleFullScreenClick() {
      const video = this.videoRef.current;

      video.requestFullscreen();
    }

    render() {
      const {currentTime, duration, isPlaying} = this.state;
      const {film} = this.props;

      return (
        <Component
          {...this.props}
          duration={duration}
          currentTime={currentTime}
          isPlaying={isPlaying}
          onFullScreenClick={this.handleFullScreenClick}
          onPlayButtonClick={this.handlePlayButtonClick}
        >
          <video className="player__video" ref={this.videoRef} src={film.videoLink} muted poster="/img/player-poster.jpg"></video>
        </Component>
      );
    }
  }

  WithVideoPlayer.propTypes = {
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
        stars: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
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

  return WithVideoPlayer;
};

export default withVideoPlayer;

