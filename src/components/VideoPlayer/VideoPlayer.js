import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  video = React.createRef();

  play = () => {
    this.video.current.play();
  };

  stop = () => {
    this.video.current.pause();
  };

  render() {
    return (
      <div className="video-player">
        <video
          className="video-player__source"
          src={videoFile}
          ref={this.video}
        />
        <div className="controls">
          <button className="play" onClick={this.play}>
            Play
          </button>
          <button className="stop" onClick={this.stop}>
            Stop
          </button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
