import React from 'react'
import StatusCards from '../StatusCard/StatusCard'
import Style from './MainContainer.module.scss'
import { statusCardData } from '../../data/statusCardData'
import InfoCards from '../InfoCards/InfoCards'
import { infoCardsData } from '../../data/infoCardsData'

const MainContainer = () => {
  return (
    <div className={Style.MainContainer}>
      <div className={Style.StatusCards}>
        {statusCardData.map((data, index) => (
           <StatusCards key={index} data={data}/>
        ))}
      </div>
      <div className={Style.container}>
        {infoCardsData?.map((data, index) => <InfoCards key={index} data={data}/>)}
      </div>
    </div>
  )
}

export default MainContainer