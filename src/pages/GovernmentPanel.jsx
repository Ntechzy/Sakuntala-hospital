import React from 'react'
import Banner from '../components/BannerComponent/Banner'
import Cashless from './Cashless'
import CashlessGov from '../components/CashlessGov'

const GovernmentPanel = () => {
  return (
    <div>
        <Banner CapitalPagename="GOVERNMENT PANEL" pagename="Government Panel"/>
        <CashlessGov/>
    </div>
  )
}

export default GovernmentPanel