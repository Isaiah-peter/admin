import React from 'react'
import './topbar.css'
import { Language, NotificationsNone, Settings} from '@material-ui/icons'

function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="left">
          <div className="logo">Admin Bar</div>
        </div>
        <div className="right">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvater" />
        </div>
      </div>
    </div>
  )
}

export default Topbar
