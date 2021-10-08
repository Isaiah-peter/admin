import Chart from "../../component/chart/Chart";
import FeaturedInfo from "../../component/featuredInfo/FeaturedInfo";
import WidgetLg from "../../component/widgetLg/WidgetLg";
import WidgetSm from "../../component/widgetSm/WidgetSm";
import "./home.css";
import { data } from "../../dummydata";
export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={data}
        title={"Active User Detail"}
        dataKey="Active User"
        grid
      />
      <div className="homewidget">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
