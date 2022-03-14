import React from 'react'
import Chart from '../../components/charts/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import WidgetLarge from '../../components/widgetLarge/WidgetLarge';
import WidgetSmall from '../../components/widgetSmall/WidgetSmall';
import "./Home.css"
import {userData} from '../../dummyData';

export default function Home() {
  return (
    <div className='Home'>
        <FeaturedInfo/>
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
        <WidgetSmall/>
        <WidgetLarge/>
        </div>       
    </div>
  )
}
