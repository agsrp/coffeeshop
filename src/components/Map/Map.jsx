import React from 'react'
import { Link } from 'react-router-dom'
import './Map.css'

const Ubi = () => {
  return (
    <>
    <section className="mapSeccion">
        <div className="title">
            <h1>ENCONTRANOS EN NUESTROS LOCALES</h1>
            <p>Coffee Shop cuenta con diversas sucursales,<br/>encontrá la que esté a tu alcance.</p>
        </div>
        <div className="btnMap">
            <Link>Ver ubicaciones</Link>
        </div>
    </section>
    </>
  )
}

export default Ubi
