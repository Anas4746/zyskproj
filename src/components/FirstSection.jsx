
import React from 'react'
import Style from "../css/firstSection.module.css"
import container2Img from "../../public/conatiner2Img.png"

function FirstSection() {
  return (
    <div className={Style.firstSection}>
        <div className={Style.container1}>
            <div className={Style.conatiner1Content}>
                <div className={Style.Div1content}>
                    <div className={Style.dashboard}>
                        <div className={Style.dashbordbutton}>
                            new features
                        </div>
                        <span>check out the team dashboard</span>
                    </div>
                </div>
                <div className={Style.Div2content}>
                    <h1>Beautiful analytics to grow smarter</h1>
                </div>
                <div className={Style.Div3content}>
                    <span>Powerful, self serve product and growth and grow analytics to help you convert, engage and retain more users.Trusted by over 4,000 startups.</span>
                </div>
                <div className={Style.Div4content}>
                    <div className={Style.demoButton}>Demo</div>
                    <div className={Style.signupButton}>SignUp</div>
                </div>
            </div>
        </div>
        <div className={Style.container2}>
            <div className={Style.ImgContainer}>
            <img src={container2Img} alt="container2Img" />
            </div>
        </div>
    </div>
  )
}

export default FirstSection