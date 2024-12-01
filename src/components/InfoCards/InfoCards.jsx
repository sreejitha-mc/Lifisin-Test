import React from 'react'
import Style from './InfoCards.module.scss'

const InfoCards = ({data}) => {
  const {title, component} = data
  return (
    <div className={Style.Infocards}>
      <h4>{title}</h4>
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