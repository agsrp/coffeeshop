import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import Carts from './Carts'
import Total from './Total'
import { Context } from '../../context/Context'
import './Cart.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Cart = () => {
  const {cart} = useContext(Context)
  return (
    <>
    <Navbar/>
    {cart.length > 0 ?  (
      <>
      <div className="containerCards">
      <Carts/>
      <Total/>
      </div>
      </>
  ):(
    <>
    <div className="contCartVacio">
      <h2 className='carVacio'>Carrito vacío</h2>
      <Link className='verProVacio' to='/Tienda'>Ver productos</Link>
    </div>
    </>
  )}
    <Footer/>
  </>
  )
}

export default Cart