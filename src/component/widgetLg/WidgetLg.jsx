import React from "react";
import "./widgetlg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetlgbutton " + type}>{type}</button>;
  };
  return (
    <div className="widgetlg">
      <h3 className="widgetlgTitle">Latest Transactions</h3>
      <table className="widgetlgTable">
        <tr className="widgetlgTr">
          <th className="widgetlgTh">Customer</th>
          <th className="widgetlgTh">Date</th>
          <th className="widgetlgTh">Amount</th>
          <th className="widgetlgTh">Status</th>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img
              src="https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg"
              alt=""
              className="widgetlgUserImg"
            />
            <span className="widgetlgUsername">kelly micheal</span>
          </td>
          <td className="widgetlgdate">2 jun 2300</td>
          <td className="widgetlgamount">#122</td>
          <td className="widgetlgstatus">
            <Button type="approved" />
          </td>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img
              src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg"
              alt=""
              className="widgetlgUserImg"
            />
            <span className="widgetlgUsername">john peter</span>
          </td>
          <td className="widgetlgdate">2 jun 2100</td>
          <td className="widgetlgamount">#1229</td>
          <td className="widgetlgstatus">
            <Button type="pending" />
          </td>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img
              src="https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg"
              alt=""
              className="widgetlgUserImg"
            />
            <span className="widgetlgUsername">kelly micheal</span>
          </td>
          <td className="widgetlgdate">2 jun 2300</td>
          <td className="widgetlgamount">#122</td>
          <td className="widgetlgstatus">
            <Button type="approved" />
          </td>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img
              src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg"
              alt=""
              className="widgetlgUserImg"
            />
            <span className="widgetlgUsername">john peter</span>
          </td>
          <td className="widgetlgdate">2 jun 2100</td>
          <td className="widgetlgamount">#1229</td>
          <td className="widgetlgstatus">
            <Button type="decline" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
