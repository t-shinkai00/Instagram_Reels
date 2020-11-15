import React, { useRef, useState } from "react";

import "./VideoCard.css";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";

function VideoCard({ url, likes, shares, channel, avatarSrc, song }) {
  const [isViodePlaying, setisViodePlaying] = useState(false);
  const videoRef = useRef(null);

  const onViodeoPress = () => {
    if (isViodePlaying) {
      //stop
      videoRef.current.pause();
      setisViodePlaying(false);
    } else {
      //play
      videoRef.current.play();
      setisViodePlaying(true);
    }
  };

  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        ref={videoRef}
        onClick={onViodeoPress}
        className="videoCard__player"
        src={url}
        alt="IG reel video"
        loop={true}
      />
      <VideoFooter
        channel={channel}
        likes={likes}
        shares={shares}
        avatarSrc={avatarSrc}
        song={song}
      />
    </div>
  );
}

export default VideoCard;
