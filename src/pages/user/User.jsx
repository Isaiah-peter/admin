import React from "react";
import "./user.css";
import {
  CalendarToday,
  LocationSearchingOutlined,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user">
      <div className="usertitlecontainer">
        <h1 className="serTitle">Edit User</h1>
        <Link to="/newuser" className="link">
          <button className="addUserButton">create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg"
              alt=""
              className="userShowImage"
            />
            <div className="userShowTopTitle">
              <span className="username">kelly jay</span>
              <span className="usertitle">software engineer</span>
            </div>
          </div>
          <div className="userShowButtom">
            <span className="userShowTitle">Acoount Detail</span>
            <div className="usershowinfo">
              <PermIdentity className="usershowicon" />
              <span className="usershowtitleinfo">anaddfd345</span>
            </div>
            <div className="usershowinfo">
              <CalendarToday className="usershowicon" />
              <span className="usershowtitleinfo">04/05/2002</span>
            </div>
            <span className="userShowTitle">Contact</span>
            <div className="usershowinfo">
              <PhoneAndroid className="usershowicon" />
              <span className="usershowtitleinfo">08104663471</span>
            </div>
            <div className="usershowinfo">
              <MailOutline className="usershowicon" />
              <span className="usershowtitleinfo">
                peterisaiah4fun@gmail.com
              </span>
            </div>
            <div className="usershowinfo">
              <LocationSearchingOutlined className="usershowicon" />
              <span className="usershowtitleinfo">
                Arikenbi street ifon ondo state
              </span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <h1 className="serTitle">Edit User</h1>
          <div className="editusercontainer">
            <div className="editinputs">
              <div className="inputcontainer">
                <label htmlFor="username" className="inputlabel">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="kelly jay"
                  className="userinput"
                />
              </div>
              <div className="inputcontainer">
                <label htmlFor="username" className="inputlabel">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="kelly jay"
                  className="userinput"
                />
              </div>
              <div className="inputcontainer">
                <label htmlFor="username" className="inputlabel">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="kelly jay"
                  className="userinput"
                />
              </div>
              <div className="inputcontainer">
                <label htmlFor="username" className="inputlabel">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="kelly jay"
                  className="userinput"
                />
              </div>
              <div className="inputcontainer">
                <label htmlFor="username" className="inputlabel">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="kelly jay"
                  className="userinput"
                />
              </div>
            </div>
            <div className="editimageandupload">
              <img
                src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg"
                alt=""
                className="userimage"
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input
                type="file"
                name="file"
                id="file"
                style={{ display: "none" }}
              />
            </div>
            <button className="updatebutton">update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
