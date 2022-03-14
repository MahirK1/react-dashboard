import React from 'react'
import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,225</span>
            <span className="featuredMoneyRate">-11.5<ArrowDownward className='featuedIcon negative'/></span>
        </div>
        <span className="featuredSub">Compare to last month</span>
        </div>
        <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,225</span>
            <span className="featuredMoneyRate">-11.5<ArrowDownward className='featuedIcon negative'/></span>
        </div>
        <span className="featuredSub">Compare to last month</span>
        </div>
        <div className="featuredItem">
        <span className="featuredTitle">Costs</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,225</span>
            <span className="featuredMoneyRate">+11.5<ArrowUpward className='featuedIcon'/></span>
        </div>
        <span className="featuredSub">Compare to last month</span>
        </div>
    </div>
  )
}
