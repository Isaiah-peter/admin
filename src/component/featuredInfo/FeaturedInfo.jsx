import './featuredinfo.css'
import {ArrowDownward, ArrowUpward } from '@material-ui/icons'

function FeaturedInfo() {
  return (
    <div className='feature'>
      <div className="featureItem">
        <div className="featureTitle">Revenue</div>
        <div className="featureContainer">
          <span className="featureMoney">$2,000</span>
          <span className="featureMoneyRate">-11.4 <ArrowDownward className='red'/> </span>
        </div>
        <span className="featureSub">Compare to last month</span>
      </div>
      <div className="featureItem">
        <div className="featureTitle">Sales</div>
        <div className="featureContainer">
          <span className="featureMoney">$3,000</span>
          <span className="featureMoneyRate">-11.4 <ArrowDownward className='red'/> </span>
        </div>
        <span className="featureSub">Compare to last month</span>
      </div>
      <div className="featureItem">
        <div className="featureTitle">Cost</div>
        <div className="featureContainer">
          <span className="featureMoney">$4,000</span>
          <span className="featureMoneyRate"> +11.4 <ArrowUpward className='green'/> </span>
        </div>
        <span className="featureSub">Compare to last month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo
