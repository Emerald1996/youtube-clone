import React, { useState } from "react";
import "../Styles/SideBar.css";
import SideBarDisplay from "../Components/SideBarDisplay";

import HomeIcon from "@material-ui/icons/Home";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import OfflineBoltOutlinedIcon from "@material-ui/icons/OfflineBoltOutlined";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@material-ui/icons/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@material-ui/icons/HistoryOutlined";
import OndemandVideoOutlinedIcon from "@material-ui/icons/OndemandVideoOutlined";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";

import SlideshowOutlinedIcon from "@material-ui/icons/SlideshowOutlined";
import SportsEsportsOutlinedIcon from "@material-ui/icons/SportsEsportsOutlined";
import EmojiEventsOutlinedIcon from "@material-ui/icons/EmojiEventsOutlined";

import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import FlagOutlinedIcon from "@material-ui/icons/FlagOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@material-ui/icons/FeedbackOutlined";

const SideBar = () => {
  const [showMore, setShowMore] = useState(true);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="sidebar">
      <div className="active">
        <SideBarDisplay Icon={HomeIcon} iconText="Home" />
      </div>
      <SideBarDisplay Icon={ExploreOutlinedIcon} iconText="Explore" />
      <SideBarDisplay Icon={OfflineBoltOutlinedIcon} iconText="Shorts" />
      <SideBarDisplay  Icon={SubscriptionsOutlinedIcon} iconText="Subscriptions" />
      <hr />
      <SideBarDisplay Icon={VideoLibraryOutlinedIcon} iconText="Library" />
      <SideBarDisplay Icon={HistoryOutlinedIcon} iconText="History" />
      <SideBarDisplay Icon={OndemandVideoOutlinedIcon} iconText="Your videos" />
      <SideBarDisplay Icon={WatchLaterOutlinedIcon} iconText="Watch later" />
      <SideBarDisplay Icon={ThumbUpOutlinedIcon} iconText="Liked videos" />
      <div onClick={handleClick}>
        {showMore ? (
          <SideBarDisplay Icon={ExpandMoreOutlinedIcon} iconText="Show more" />
        ) : (
          <SideBarDisplay Icon={ExpandLessOutlinedIcon} iconText="Show less" />
        )}
      </div>
      <hr />

      {!showMore && (
        <>
          <h2>MORE FROM YOUTUBE</h2>
          <SideBarDisplay
            Icon={SlideshowOutlinedIcon}
            iconText="YouTube Premium"
          />
          <SideBarDisplay Icon={SportsEsportsOutlinedIcon} iconText="Gaming" />
          <SideBarDisplay Icon={EmojiEventsOutlinedIcon} iconText="Sport" />

          <hr />
          <SideBarDisplay Icon={SettingsOutlinedIcon} iconText="Settings" />
          <SideBarDisplay Icon={FlagOutlinedIcon} iconText="Report history " />
          <SideBarDisplay Icon={HelpOutlineOutlinedIcon} iconText="Help" />
          <SideBarDisplay
            Icon={FeedbackOutlinedIcon}
            iconText="Send feedback"
          />
          <hr />
          <p>About press copyright, Contact Us Creator Advertise Developer</p>
          <br />
          <p>Terms Privacy Policy & Safety</p>
          <p>How YouTube Works</p>
          <p>See New Features</p>
          <br />
          <h6>© {new Date().getFullYear()} Google LLC</h6>
        </>
      )}
    </div>
  );
};

export default SideBar;
