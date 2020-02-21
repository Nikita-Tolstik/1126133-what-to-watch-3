import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const TIMER_TIME = 1000;

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
    this._timerId = ``;
  }

  componentDidMount() {
    const {img} = this.props;
    const videoSrc = this.props.videoPreview;

    const video = this._videoRef.current;
    video.src = videoSrc;
    video.poster = img;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {

      this._timerId = setTimeout(() => {
        video.play();
      }, TIMER_TIME);

    } else {
      video.load();
      clearTimeout(this._timerId);
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.src = ``;
    video.poster = ``;
  }

  render() {

    return (
      <React.Fragment>
        <video ref={this._videoRef} width="280" height="175" muted/>
      </React.Fragment>
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  videoPreview: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default VideoPlayer;
