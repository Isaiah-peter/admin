import React, { useState, useEffect } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { userRequest } from "../../requestMethod";

const WidgetSm = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("/user?new=true");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUsers();
  }, []);

  return (
    <div className="widgetsm">
      <span className="widgetSmTitle">New User</span>
      <ul className="widgetSmList">
        {users.map((u) => {
          return (
            <li key={u.ID} className="widgetSmListItems">
              <img
                src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{u.user_name}</span>
              </div>
              <button className="widgetSmbutton">
                <Visibility className="widgetSmicon" />
                Display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WidgetSm;
