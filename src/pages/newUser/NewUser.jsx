import React from "react";
import "./newuser.css";

const NewUser = () => {
  return (
    <div className="newuser">
      <h1 className="newUserTitle">New User</h1>
      <form action="" className="newUserForm">
        <div className="newuseritem">
          <label> UserName </label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newuseritem">
          <label> Fullname </label>
          <input type="text" placeholder="john smith" />
        </div>
        <div className="newuseritem">
          <label> Email </label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newuseritem">
          <label> Password </label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newuseritem">
          <label> Phone </label>
          <input type="text" placeholder="0801-000XXXX" />
        </div>
        <div className="newuseritem">
          <label> Address </label>
          <input type="text" placeholder="No. 3 arikenbi street ondo" />
        </div>
        <div className="newuseritem">
          <label> Gender </label>
          <div className="newUserGender">
            <input type="radio" id="male" name="gender" value="male" />
            <label for="male">male</label>
            <input type="radio" id="female" name="gender" value="female" />
            <label for="female">female</label>
            <input type="radio" id="order" name="gender" value="male" />
            <label for="other">order</label>
          </div>
        </div>
        <div className="newuseritem">
          <label> Active </label>
          <select className="newuserSelect" name="active" id="active">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </div>
        <button className="newuserbutton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
