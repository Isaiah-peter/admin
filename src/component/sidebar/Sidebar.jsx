import "./sidebar.css";
import {
  ChangeHistory,
  ChatBubbleOutline,
  DynamicFeedOutlined,
  LineStyle,
  MailOutline,
  Money,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutlineOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItems active">
                <LineStyle className="icon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItems">
              <Timeline className="icon" />
              Analytics
            </li>
            <li className="sidebarListItems">
              <TrendingUp className="icon" />
              sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItems">
                <PermIdentity className="icon" />
                User
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItems">
                <Storefront className="icon" />
                Product
              </li>
            </Link>
            <li className="sidebarListItems">
              <Money className="icon" />
              Transactions
            </li>
            <li className="sidebarListItems">
              <ChangeHistory className="icon" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notification</h3>
          <ul className="sidebarList">
            <li className="sidebarListItems">
              <MailOutline className="icon" />
              Mail
            </li>
            <li className="sidebarListItems">
              <DynamicFeedOutlined className="icon" />
              Feedback
            </li>
            <li className="sidebarListItems">
              <ChatBubbleOutline className="icon" />
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItems">
              <WorkOutlineOutlined className="icon" />
              Manage
            </li>
            <li className="sidebarListItems">
              <Timeline className="icon" />
              Analytic
            </li>
            <li className="sidebarListItems">
              <Report className="icon" />
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
