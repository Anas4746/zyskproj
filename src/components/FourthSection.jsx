
import React from 'react'
import Style from "../css/fourthSection.module.css"
import SisphusImg from "../../public/SisphusImg.jpg"
import fourtSec from "../../public/fourthSec.jpg"

function FourthSection() {
  return (
    <div className={Style.fourthSection}>
      <div className={Style.content}>
        <div className={Style.img1}>
        <img src={SisphusImg} alt="SisphusImg" />
        </div>
        <h1>
          We'we been using Untitled to kick start every new project and can't imagine working without it.
        </h1>
        <div className={Style.img2}>
          <img src={fourtSec} alt="fourtSec" />
        </div>
      </div>
    </div>
  )
}

export default FourthSection