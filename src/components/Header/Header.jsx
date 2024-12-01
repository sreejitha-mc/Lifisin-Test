import React from 'react'
import Style from './Header.module.scss'
import avatar from '../../images/avatar.png';
import help from '../../images/help_center.png';
import notification from '../../images/notification.png';
import email from '../../images/email.png';
import Hamburger from '../Hamburger/Hamburger';
import { IoIosSearch } from "react-icons/io";


const Header = () => {
  return (
    <header className={Style.header}>
      <div className={Style.navbar}>
        {window.innerWidth < 1060 && <Hamburger />}
        <div className={Style.left}>
          <div className={Style.search}>
            <input type="text" placeholder="Search..." />
            <span><IoIosSearch />
            </span>
          </div>
          {window.innerWidth > 886 && <ul>
            <li className={Style.help}><a href="#"><img src={help} alt="help" />Help</a></li>
            <li><a href="#" value={29}><img src={notification} alt="help" />Alert</a></li>
            <li><a href="#" value={29}><img src={email} alt="help" />Email</a></li>
          </ul>}
        </div>
        <div className={Style.user_data}>
          <div className={Style.user_info}>
            <span>Mrs. Employee</span>
            <p>Product Manager</p>
          </div>
          <img src={avatar} alt="User" />
        </div>
      </div>
    </header>
  )
}

export default Header