import './sidebar.css'
import {ChangeHistory, ChatBubbleOutline, ChatBubbleOutlined, DynamicFeedOutlined, LineStyle, MailOutline, Money, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutlineOutlined} from '@material-ui/icons'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItems active">
              <LineStyle className='icon'/>
              Home
            </li>
            <li className="sidebarListItems">
              <Timeline className='icon'/>
              Analytics
            </li>
            <li className="sidebarListItems">
              <TrendingUp className='icon'/>
              sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItems">
              <PermIdentity className='icon'/>
              User
            </li>
            <li className="sidebarListItems">
              <Storefront className='icon'/>
              Product
            </li>
            <li className="sidebarListItems">
              <Money className='icon'/>
              Transactions
            </li>
            <li className="sidebarListItems">
              <ChangeHistory className='icon'/>
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notification</h3>
          <ul className="sidebarList">
            <li className="sidebarListItems">
              <MailOutline className='icon'/>
              Mail
            </li>
            <li className="sidebarListItems">
              <DynamicFeedOutlined className='icon'/>
              Feedback
            </li>
            <li className="sidebarListItems">
              <ChatBubbleOutline className='icon'/>
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItems">
              <WorkOutlineOutlined className='icon'/>
              Manage
            </li>
            <li className="sidebarListItems">
              <Timeline className='icon'/>
              Analytic
            </li>
            <li className="sidebarListItems">
              <Report className='icon'/>
              Report
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Sidebar
