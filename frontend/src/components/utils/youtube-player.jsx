import React, { useState } from 'react';

const YouTubePlayer = ({ videoId }) => {
  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    setPlaying(!playing);
  };

  return (
    <div className="youtube-player">
      <div 
        className={`video-preview ${playing ? 'hidden' : ''}`}
        onClick={handleClick}
      >
        <img 
          src={`https://img.youtube.com/vi/${videoId}/0.jpg`} 
          alt="video preview"
        />
        <div className="play-button"></div>
      </div>
      {playing && (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default YouTubePlayer;