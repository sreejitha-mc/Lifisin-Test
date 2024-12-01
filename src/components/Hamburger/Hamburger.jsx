
import React, { useState } from 'react'
import Style from './Hamburger.module.scss'

const Hamburger = () => {

  const [isActive, setIsActive] = useState(false)
  const handleHamburger = () => {
    document.body.classList.toggle('overflow-hidden')
    setIsActive(!isActive)
  }
  const List = [
    {
      label:"CRM Management",
      icon:''
    },
    {
      label:"Sales order Management",
      icon:''
    },
    {
      label:"Finance Management",
      icon:''
    },
    {
      label:"HR Management",
      icon:''
    },
    {
      label:"Proccurement",
      icon:''
    },
    {
      label:"Asset Management",
      icon:''
    },
    {
      label:"Inventory Management",
      icon:''
    },
    {
      label:"Control Panel",
      icon:''
    },
    {
      label:"Application Settings",
      icon:''
    },
    {
      label:"Solution Builder",
      icon:''
    },
    {
      label:"Product & Service",
      icon:''
    },
    {
      label:"Supplier & Customer",
      icon:''
    },
    {
      label:"Organization",
      icon:''
    },
  ]
  return (
    <div className={Style.Hamburger}>
      <div className={Style.icon} onClick={handleHamburger}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {isActive && <div className={Style.close} onClick={handleHamburger}>X</div>}
      {isActive && <div className={Style.list}>
        {List?.map(({ label, icon }, i) => (
          <div key={i}>{label}</div>
        ))}
        {window.innerWidth < 886 && <>
          <div>
            <ul style={{ marginLeft: '0' }}>
              <li>Help</li>
              <li>Alert</li>
              <li>Email</li>
            </ul>
          </div>
        </>}
      </div>}

    </div>
  )
}

export default Hamburger