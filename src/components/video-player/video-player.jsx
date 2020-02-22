import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const TIMER = 1000;

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
    this._timerId = ``;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {

      this._timerId = setTimeout(() => {
        video.play();
      }, TIMER);

    } else {
      video.load();
      clearTimeout(this._timerId);
    }
  }

  render() {
    const {img, videoPreview} = this.props;

    return (
      <React.Fragment>
        <video ref={this._videoRef} src={videoPreview} poster={img} width="280" height="175" muted/>
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
