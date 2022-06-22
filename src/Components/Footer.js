import React from 'react'
import "../Styles/Footer.css"

import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import VideoLibraryOutlinedIcon from "@material-ui/icons/VideoLibraryOutlined";
import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";

const Footer = () => {
  return (
    <div className="footer">
      <VideoCallOutlinedIcon className="footer__icon" />
      <VideoLibraryOutlinedIcon className="footer__icon" />
      <AddCircleOutlineOutlinedIcon className="footer__icon" />
      <SubscriptionsOutlinedIcon className="footer__icon" />
      <MicNoneOutlinedIcon className="footer__icon" />
    </div>
  );
}

export default Footer