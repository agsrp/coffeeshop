import React from 'react'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import './Cart.css'

const Total = () => {

    const {cart} = useContext(Context)

    const total = cart.reduce((acc, elem) => acc + elem.price * elem.quanty, 0)

    return (
        <div className='totalCart'>
            <h3>Total a pagar: ${total} </h3>    
        </div>
    )
  
}

export default Total