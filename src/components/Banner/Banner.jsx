import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='Banner'>
        <div className="bannerCont">
            <h1>SOMOS COFFEE SHOP</h1>
            <Link className='expSomos'>EXPLORAR</Link>
        </div>
    </div>
  )
}

export default Banner