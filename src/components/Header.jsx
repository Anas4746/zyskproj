
import React from 'react'
import Style from "../css/header.module.css"
import avatarImg from "../../public/avatarImg.jpg"
import logo from "../../public/logo.jpg"

function Header() {
  return (
    <div className={Style.headerSection}>
        <div className={Style.header}>
            <div className={Style.headerContent}>
                <div className={Style.titleLogo}>
                <div className={Style.logo}>
                <img src={logo} alt="logo" />
                </div>
                <h2>Untitled UI</h2>
                </div>
                <h4>Home</h4>
                <h4>Products</h4>
                <h4>Resources</h4>
                <h4>Pricing</h4>
            </div>
            <div className={Style.headerAvtar}>
                <img src={avatarImg} alt="avatarImg" />
            </div>
        </div>
    </div>

  )
}

export default Header