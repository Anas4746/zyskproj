
import React from 'react'
import Style from "../css/thirdSection.module.css"
import div1 from "../../public/div1.jpg"
import div2 from "../../public/div2.jpg"
import div3 from "../../public/div3.jpg"
import div4 from "../../public/div4.jpg"
import div5 from "../../public/div5.jpg"
import div6 from "../../public/div6.jpg"

function ThirdSection() {
  return (
    <div className={Style.thirdSection}>
        <div className={Style.content}>
        <div className={Style.container1}>
        <div className={Style.conatiner1Content}>
                <span className={Style.features}>features</span>
                <div className={Style.Div2content}>
                    <h1>Beautiful analytics to grow smarter</h1>
                </div>
                <div className={Style.Div3content}>
                    <span>Powerful, self serve product and growth and grow analytics to help you convert, engage and retain more users.Trusted by over 4,000 startups.</span>
                </div>
            </div>
        </div>
        <div className={Style.container2}>
            <div className={Style.div1}>
                <img src={div1} alt="" />
                <h1>Share team inboxes</h1>
                <span>
                    Whether you have of 2 or 200, our shared team inboxes keep everyone on the same page end in the lop
                </span>
            </div>
            <div className={Style.div1}>
                <img src={div2} alt="" />
                <h1>Deliver instant answers</h1>
                <span>
                    An all-in-one customer service platform that helps you balance everything your customers need to happy.
                </span>
            </div>
            <div className={Style.div1}>
                <img src={div3} alt="" />
                <h1>Manage your team with reports</h1>
                <span>
                    Measure what matters with Untitleds easy-to-use reports. You can fikter, export and drilldown on the data in a couple clicks.
                </span>
            </div>
            <div className={Style.div1}>
                <img src={div4} alt="" />
                <h1>Connect with customers</h1>
                <span>
                    Solve a problem or close a sale in real-time with chat if no one is available, customers are seamlessly routed to email without confusion.
                </span>
            </div>
            <div className={Style.div1}>
                <img src={div5} alt="" />
                <h1>Connect the tools you alreadty use</h1>
                <span>
                    Explore 100+ integrations that make you day-to-day workflow more efficient and familar. Plus, our extensive developer tools
                </span>
            </div>
            <div className={Style.div1}>
                <img src={div6} alt="" />
                <h1>Our people make the difference</h1>
                <span>
                    We're an extension of your customer service team, and all of uour resources are free. Chat to our friendly team 24/7 when you need help.
                </span>
            </div>

        </div>
        </div>
    </div>
  )
}

export default ThirdSection