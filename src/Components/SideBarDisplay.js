import React from 'react'
import "../Styles/SideBarDisplay.css"

const SideBarDisplay = (props) => {
    
  return (
    <div className='sidebar__display'>
        <props.Icon className="sidebar__icons"/>
        <h3>{props.iconText}</h3>
    </div>
    
  )
}

export default SideBarDisplay