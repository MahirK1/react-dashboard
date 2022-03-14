import React from 'react'
import "./Topbar.css"
import {NotificationsNone,Language,Settings} from "@material-ui/icons"

function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className='logo'>eWallet</span>
            </div>
            <div className="topRight">
                <div className="topbarIcons">
                    <NotificationsNone/>
                    <span className="topIconBag">2</span>
                </div>
                <div className="topbarIcons">
                    <Language/>               
                </div>
                <div className="topbarIcons">
                    <Settings/>
                </div>
                <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="profile img" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default Topbar