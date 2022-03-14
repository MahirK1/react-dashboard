import { CalendarToday, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import React from 'react'
import {useNavigate} from 'react-router-dom';
import "./User.css";

export default function User() {
    const navigate = useNavigate();
  return (
    <div className='user'>
        <div className="userTitleContainer">
         
                
            <h1 className="userTitle">Edit User</h1>
             
                <button onClick={()=>navigate("/newUser")} className="userAddButton">Create</button>
            
        
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Anna Backer</span>
                        <span className="userShowUserTitle">Front end Dev</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">
                        Account Details
                    </span>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'/>
                        <span className="userShowInfoTitle">annabeck99</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className='userShowIcon'/>
                        <span className="userShowInfoTitle">11.02.1995</span>
                    </div>
                    <span className="userShowTitle">
                        Contact Details
                    </span>
                    <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon'/>
                        <span className="userShowInfoTitle">+1 23 456 78</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className='userShowIcon'/>
                        <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form  className="userUpdateForm">
                        <div className="userUpadteLeft">
                            <div className="userUpdateItem">
                                <label >Username</label>
                                <input type="text" placeholder="Username" className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label >Full Name</label>
                                <input type="text" placeholder="Full Name" className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label >Phone</label>
                                <input type="text" placeholder="Phone Number" className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label >Email</label>
                                <input type="text" placeholder="Email" className='userUpdateInput' />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg" src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                                <label htmlFor="file"><Publish className="userUpdateIcon"/></label> 
                                <input type="file" id="file" style={{display:"none"}}/>
                           </div>
                           <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
            </div>
        </div>
    </div>
  )
}
