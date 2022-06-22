import React , {useState} from 'react'
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import AvatarIcon from "@material-ui/core/Avatar";
import youtubeLogo from "../assets/youtubeLogo.png";
import "../Styles/NavBar.css"

import { Link } from "react-router-dom";
import { UserAuth } from '../Context/AuthContext';

const NavBar = () => {
     const [inputContainer, setInputContainer] = useState("");
     const { user } = UserAuth()
  return (
    <>
      <div className="navbar">
        <div className="burger__logo">
          <MenuIcon className="menu__icon__sm" />
          <Link to="/">
            <img className="logo" src={youtubeLogo} alt={youtubeLogo} />
          </Link>
        </div>

        <div className="navbar__searchbox">
          <input
            type="text"
            name="text"
            placeholder="search"
            value={inputContainer}
            onChange={(e) => {
              setInputContainer(e.target.value);
            }}
          />
          <Link to={`/Search/${inputContainer}`} className="search_btn">
            <SearchIcon className="searchIcon" />
          </Link>
        </div>

        <div className="navbar_right_icons">
          <VideoCallOutlinedIcon className="navbar_icon video__sm" />
          <AppsOutlinedIcon className="navbar_icon" />
          <NotificationsOutlinedIcon className="navbar_icon" />
          <AvatarIcon src={user?.photoURL} className="navbar_icon" />
        </div>
      </div>
    </>
  )
}

export default NavBar