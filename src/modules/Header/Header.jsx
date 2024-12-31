import React from 'react'
import style from './Header.module.scss'
import logo from '../../assets/images/logo.png'
import { BtnTranslate } from '../../assets/icons/BtnTranslate'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <div className={style.Headers}>
      <div className={style.header}>
        <div className={style.navigate}>
          <div className={style.logo}>
            <img src={logo} alt="logo" />
            <p>ASMAN COIN</p>
          </div>
          <div className={style.nav}>
            <NavLink to="/">
            <p>Главная</p>
            </NavLink>
            <p>О нас</p>
            <p>Как купить?</p>
            <p>Токеномика</p>
            <NavLink to="/RoadMap">
            <p>Дорожная карта</p>
            </NavLink>
          </div>
          <div className={style.translate}>
            <p>русский</p>
             <BtnTranslate/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header