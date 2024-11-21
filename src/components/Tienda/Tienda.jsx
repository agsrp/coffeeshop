import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import TiendaData from './TiendaData'
import './Tienda.css'
import Footer from '../Footer/Footer'

const Tienda = () => {

  return (
    <>
    <Navbar/>
    <div className="pantallaTienda">
      <div className="contTienda">
        
        <TiendaData/>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Tienda