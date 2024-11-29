
import React from 'react'
import Style from "../css/secondSection.module.css"
import IconsImg from "../../public/IncoLogos.jpg"

function SecondSection() {
  return (
    <div className={Style.secondSection}>
        <div className={Style.sectionContent}>
            <div className={Style.content1}>
                <span>Join 4,000+ companies already growing</span>
            </div>
            <div className={Style.content2}>
                <img src={IconsImg} alt="IconsImg" />
            </div>
            
        </div>
    </div>
  )
}

export default SecondSection