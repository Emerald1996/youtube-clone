import React from "react";

import SideBar from "./SideBar";
import NavBar from "./NavBar";
import DisplayLinks from "./DisplayLinks";
import VideoCard from "./VideoCard";
import Footer from "./Footer";
import "../App.css";

const Home = () => {
 return <>
    <NavBar />
    <div className="main">
      <div className="main__sidebar">
      <SideBar />
      </div>
      <div className="main__display">
        <div className="main__display__links">
        <DisplayLinks />
        </div>
        <div className="videocard">
          <VideoCard />
        </div>
      </div>
    </div>
    <Footer />
  </>;
};

export default Home;
