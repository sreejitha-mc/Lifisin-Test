import React from 'react'
import Style from "./TabBar.module.scss"
const TabBar = () => {
  return (
    <div className={Style.tab_bar}>
      <span>Dashboard</span>
      <span>Overview</span>
      <span>Overview</span>
      <span>Overview</span>
    </div>
  )
}

export default TabBar