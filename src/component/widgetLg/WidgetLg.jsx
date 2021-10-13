import React, { useEffect, useState } from "react";
import "./widgetlg.css";
import { userRequest } from "../../requestMethod";
import { format } from "timeago.js";

const WidgetLg = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("/getallorder");
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getOrders();
  }, []);

  console.log(orders);

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
        {orders.map((o) => (
          <tr className="widgetlgTr">
            <td className="widgetlgUser">
              <span className="widgetlgUsername">{o.user_id}</span>
            </td>
            <td className="widgetlgdate">{format(o.CreatedAt)}</td>
            <td className="widgetlgamount">#{o.Amount}</td>
            <td className="widgetlgstatus">
              <Button type={o.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default WidgetLg;
