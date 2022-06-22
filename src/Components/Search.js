import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Footer from './Footer'
import "../Styles/Search.css"

import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

const Search = () => {
  return (
    <>
      <NavBar />
      <div className="search">
        <div className="search__sidebar">
          <SideBar />
        </div>
        <div className="search__result__display">
          <div className="search__header">
            <TuneOutlinedIcon className='search__icon'/>
            <h3>FILTERS</h3>
          </div>
          <hr/>
        <div className='load__container'>
          <div className='load'></div>
        </div>
      </div>
        </div>
      <Footer />
    </>
  );
}

export default Search