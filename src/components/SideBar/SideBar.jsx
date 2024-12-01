import React from 'react'
import Style from './SideBar.module.scss'
import logo from '../../images/logo.png';
import more from '../../images/more.png';


const SideBar = () => {
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
    <div className={Style.sidebar}>
      <div className={Style.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        <li className={Style.active}>Create</li>
        {List?.map(({label, icon},i)=>(
          <li key={i}>{label}</li>
        ))}
      </ul>
      <div className={Style.more}><img src={more} alt="more" /> More items</div>
      <div className={Style.logo}>
        <img src={logo} alt="Logo" />
      </div>
    </div>
  )
}

export default SideBar