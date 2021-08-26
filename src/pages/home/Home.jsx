import Chart from '../../component/chart/Chart'
import FeaturedInfo from '../../component/featuredInfo/FeaturedInfo'
import './home.css'
export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart />
    </div>
  )
}
