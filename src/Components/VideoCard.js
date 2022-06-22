import React, { useState } from "react";
import "../Styles/VideoCard.css";
import "../App.css"
import { videosData } from "../VideoCardData";
import AvatarIcon from "@material-ui/core/Avatar";

const VideoCard = () => {
  const [videoCards] = useState(videosData);
  return videoCards.map((videoData) => {
    const { id, img, avatar, title, author, views, timeDuration, timeStamp } = videoData;

    return (
      <>
        <div className="video__container" key={id}>
          <img src={img} alt={img} className="videoCard__img" />
          <div className="videoCard_info">
            <AvatarIcon src={avatar} alt={avatar} />
            <div className="videoCard_texts">
              <h5>{timeStamp}</h5>
              <h4>{title}</h4>
              <p>{author}</p>
              <p>
                {views} {"\u2022"} {timeDuration}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  });
};

export default VideoCard;
