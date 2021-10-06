import React from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

const WidgetSm = () => {
  return (
    <div className="widgetsm">
      <span className="widgetSmTitle">New User</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItems">
          <img
            src="https://i.ibb.co/DG69bQ4/2.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kelly</span>
            <span className="widgetSmUserTitle">software engineer</span>
          </div>
          <button className="widgetSmbutton">
            <Visibility className="widgetSmicon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItems">
          <img
            src="https://i.ibb.co/DG69bQ4/2.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kelly</span>
            <span className="widgetSmUserTitle">software engineer</span>
          </div>
          <button className="widgetSmbutton">
            <Visibility className="widgetSmicon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItems">
          <img
            src="https://i.ibb.co/DG69bQ4/2.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kelly</span>
            <span className="widgetSmUserTitle">software engineer</span>
          </div>
          <button className="widgetSmbutton">
            <Visibility className="widgetSmicon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItems">
          <img
            src="https://i.ibb.co/DG69bQ4/2.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kelly</span>
            <span className="widgetSmUserTitle">software engineer</span>
          </div>
          <button className="widgetSmbutton">
            <Visibility className="widgetSmicon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItems">
          <img
            src="https://i.ibb.co/DG69bQ4/2.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kelly</span>
            <span className="widgetSmUserTitle">software engineer</span>
          </div>
          <button className="widgetSmbutton">
            <Visibility className="widgetSmicon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
