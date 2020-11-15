import React, { useState, useEffect } from "react";

import "./App.css";

import VideoCard from "./VideoCard";
import db from "./firebase";

function App() {
  const [reels, setReels] = useState([]);
  useEffect(() => {
    //App component will run once when it loads,and never again
    db.collection("reels").onSnapshot((snapshot) => {
      setReels(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    //BEM naming convention
    <div className="app">
      <h1>Hey clever programmer, Let's build an IG Reels Clone!</h1>
      <div className="app__top">
        <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
          alt=""
        />
        <h1>Reels</h1>
      </div>
      <div className="app__videos">
        {/* Container of app_videos(scrollable container) */}
        {reels.map(({ channel, avatarSrc, song, url, likes, shares }) => (
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
