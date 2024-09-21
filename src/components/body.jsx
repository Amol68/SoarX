import React from 'react'
import card1 from "../assets/card1.png"
import card2 from "../assets/card2.png"
import card3 from "../assets/card3.png"
import card4 from "../assets/card4.png"
import card5 from "../assets/card5.png"
import card6 from "../assets/card6.png"

const Body = () => {
  return (
    <div className='flex-col items-center flex-wrap pt-5 pl-5 pr-5 '>
 
        <div className='flex gap-5 justify-evenly '>
        <img src={card1}  alt="card1"/>
        <img src={card2}  alt="card2"/>
        <img src={card3}  alt="card3"/>
        </div>

        <div className='flex gap-5 justify-evenly pt-10 pb-10 '>
        <img src={card4}  alt="card4"/>
        <img src={card5}  alt="card5"/>
        <img src={card6}  alt="card6"/>
        </div>
 
    </div>
  )
}

export default Body
