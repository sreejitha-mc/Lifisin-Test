
import React from 'react'
import BarChart from '../BarChart/BarChart'
import Style from './StatusCard.module.scss'

const StatusCards = ({ data }) => {
  const { title, value, description, noGraph, men, female } = data
  return (
    <div className={Style.StatusCard}>
      <div className={Style.left}>
        <h4>{title}</h4>
        <span>{value}</span>
        <p>{description}</p>
      </div>
      {noGraph ?
        <div className={Style.employees}>
          <span>Full-Time employees : {men}</span>
          <span>Contract employees : {female}</span>
        </div>
        : <div className={Style.right}>
          <BarChart />
        </div>}
    </div>
  )
}

export default StatusCards