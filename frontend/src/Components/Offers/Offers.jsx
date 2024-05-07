import React from 'react'
import './Offers.css'
import air_jordan from '../Assets/air_jordan.jpg'

const Offers = () => {
  return (
    <div className= 'offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={air_jordan} alt="" />
      </div>
    </div>
  )
}

export default Offers
