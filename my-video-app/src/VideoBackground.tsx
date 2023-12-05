import React from 'react';
import './VideoBackground.scss';

const VideoBackground: React.FC = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay">
        <div className="box1">
          <div className="sub-box1">Sub Box 1</div>
          <div className="sub-box2">
          <div className="hover-bar"></div>
            <div className="button-container">
              <div className="button">Button 1</div>
              <div className="button">Button 2</div>
              <div className="button">Button 3</div>
              <div className="button">Button 4</div>
              </div>
          </div>
          <div className="sub-box3">Sub Box 3</div>
        </div>
        <div className="box">Box 2 Content</div>
        <div className="box">Box 3 Content</div>
      </div>
    </div>
  );
};

export default VideoBackground;