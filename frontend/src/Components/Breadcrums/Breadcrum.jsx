import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/arrow_icon.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <img className="breadcrum-arrow"  src={arrow_icon} alt="" /> SHOP <img className="breadcrum-arrow"  src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum
