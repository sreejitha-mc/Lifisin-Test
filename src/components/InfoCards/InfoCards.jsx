import React from 'react'
import Style from './InfoCards.module.scss'
import { CgExpand } from "react-icons/cg";



const InfoCards = ({ data }) => {
  const { title, component } = data
  return (
    <div className={Style.Infocards}>
      <div className={Style.head}> <h4>{title}</h4>
        <span><CgExpand /></span></div>
      <div className={Style.container}>
        {component}
      </div>
      {component && <div className={Style.footer}>
        <span>10 Request in queue</span>
        <span>View All</span>
      </div>}
    </div>
  )
}

export default InfoCards