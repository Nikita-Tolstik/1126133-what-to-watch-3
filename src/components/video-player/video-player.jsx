import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
  }

  componentDidUpdate() {
    const {videoPreview} = this.props;
    const video = this._videoRef.current;
    video.src = videoPreview;

    if (this.props.isPlaying) {
      video.play();
    }
  }

  render() {
    const {posterImage} = this.props;

    return (
      <React.Fragment>
        <video ref={this._videoRef} poster={posterImage} width="280" height="175" muted/>
      </React.Fragment>
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  videoPreview: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
};

export default VideoPlayer;
