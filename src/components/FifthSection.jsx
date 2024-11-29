
import React from 'react'
import Style from "../css/fifthSection.module.css"
import fifthSec from "../../public/fifthSecImg.jpg"
import div1 from "../../public/div1.jpg"
import div2 from "../../public/div2.jpg"
import div3 from "../../public/div3.jpg"

function FifthSection() {
  return (
    <div className={Style.fifthSection}>
        <div className={Style.content}>
        <div className={Style.conatiner1Content}>
                <span className={Style.features}>
                    <div className={Style.dashboard}>
                            new features
                        </div></span>
                <div className={Style.Div2content}>
                    <h1>Cutting-edge features for advanced analytics</h1>
                </div>
                <div className={Style.Div3content}>
                    <span>Powerful, self serve product and growth and grow analytics to help you convert, engage and retain more users.Trusted by over 4,000 startups.</span>
                </div>
            </div>
        </div>
        <div className={Style.container2Content}>
            <img src={fifthSec} alt="fifthSec" />
        </div>
        <div className={Style.container2}>
            <div className={Style.div1}>
                <img src={div1} alt="" />
                <h1>Share team inboxes</h1>
                <span>
                    Whether you have of 2 or 200, our shared team inboxes keep everyone on the same page end in the lop
                </span>
                <span style={{color:"#6a25ff"}}>learn more...</span>
            </div>
            <div className={Style.div1}>
                <img src={div2} alt="" />
                <h1>Deliver instant answers</h1>
                <span>
                    An all-in-one customer service platform that helps you balance everything your customers need to happy.
                </span>
                <span style={{color:"#6a25ff"}}>learn more...</span>
            </div>
            <div className={Style.div1}>
                <img src={div3} alt="" />
                <h1>Manage your team with reports</h1>
                <span>
                    Measure what matters with Untitleds easy-to-use reports. You can fikter, export and drilldown on the data in a couple clicks.
                </span>
                <span style={{color:"#6a25ff"}}>learn more...</span>
            </div>

        </div>
    </div>
  )
}

export default FifthSection