import React from 'react'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import Contador from './Contador'
import './Cart.css'
import { FaTrash } from "react-icons/fa";

const Carts = () => {

    const {cart, setCart} = useContext(Context)

    const deletedProducts = (id) => {
        const buscaId = cart.find((element) => element.id === id)
        const newCart = cart.filter((element) => {
            return element !== buscaId
        })

        setCart(newCart)
    }

        return cart.map((product) => {
            return (
                
            <div className='contentCart' key={product.id}>
                <img className='imgCart' src={product.img} alt="café" />
                <h3>{product.name}</h3>
                <Contador product={product} />
                <h4>${product.price * product.quanty}</h4>
                <a className='trashItem' onClick={() => deletedProducts(product.id)}><FaTrash/></a>
            </div>
                
              )
        })
  
}

export default Carts