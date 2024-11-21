import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { Context } from '../../context/Context'
import './Products.css'
import { Link } from 'react-router-dom'


const Products = () => {
    const [products, setProducts] = useState([])
    const {cart, setCart, buyProducts} = useContext(Context);

    useEffect(() => {
        fetch("data.json")
        .then((response) => response.json())
        .then((data) => setProducts(data))
    }, [])

    return products.slice(0, 5).map((product) => {
        return (
            <>
            <div className='contProduct' key={product.id}>
                <img className='imgProd' src={product.img} alt="Cafe" />
                <h3>{product.name}</h3>
                <h4>${product.price}</h4>
                <button onClick={() => buyProducts(product)} className='btnBuy'>Añadir al carrito</button>
            </div>
            </>
          )
    }       
   )


}

export default Products