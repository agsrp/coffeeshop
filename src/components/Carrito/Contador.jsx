import React from 'react'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import './Cart.css'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Contador = ({product}) => {

    const {cart, setCart, buyProducts} = useContext(Context)

    const decrease = () => {
        const proRepe = cart.find((item) => item.id === product.id)

        proRepe.quanty !==1 &&
        setCart(cart.map((item) => (item.id === product.id ? {... product, quanty:proRepe.quanty - 1} : item)))
    }

  return (
    <div className='increDecre'>
        <a className='decre' onClick={() => decrease(product)}><FaAngleLeft/></a>
        <p className='cantPro'>{product.quanty}</p>
        <a className='incre' onClick={() => buyProducts(product)}><FaAngleRight/></a>
    </div>
  )
}

export default Contador