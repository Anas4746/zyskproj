
import React from 'react'
import Style from "../css/sixSection.module.css"
import plus from "../../public/plus.jpg"
import sub from "../../public/sub.jpg"
import sixSec from "../../public/sixSec.jpg"
function SixSection() {
  return (
    <div className={Style.sixSection}>
      <div className={Style.content}>
        <h1>Frequently asked questions</h1>
        <span>Everything you need to know about the product and billing.</span>
        <div className={Style.ques1}>
          <div><h4>Is there a free trial available?</h4></div>
          <div className={Style.ques3}>
          <span>
            Yes, you can try us freee for 30 days. If you want, we'll provide you with a free, personalized 30-minute anboarding call to get the server that your running as soon as possible.
          </span>
          <img src={plus} alt="plus" className={Style.plus}/>
          </div>
        </div>
        <div className={Style.ques}>
          <h3>
            Can I change my plan later?
          </h3>
          <img src={sub} alt="plus" />
        </div>
        <div className={Style.ques}>
        <h3>
            What is you cancellation policy?
          </h3>
          <img src={sub} alt="plus" />
        </div>
        <div className={Style.ques}>
        <h3>
            Can other info be added to an invoice?
          </h3>
          <img src={sub} alt="plus" />
        </div>
        <div className={Style.ques}>
        <h3>
            How does billing work?
          </h3>
          <img src={sub} alt="plus" />
        </div>
        <div className={Style.ques}>
        <h3>
            How do I change my account email?
          </h3>
          <img src={sub} alt="plus" />
        </div>
      </div>
      <div className={Style.content2}>
        <img src={sixSec} alt="" className={Style.sixImg}/>
      </div>
    </div>
  )
}

export default SixSection