import React from 'react'
import Navbar from '../Navbar/Navbar'
import Products from '../Products/Products'
import { useContext, useState, useEffect } from 'react'
import { Context } from '../../context/Context'
import './Tienda.css'
import SortingComponent from './Filters'


export const TiendaData = ({onClick}) => {

    const [products, setProducts] = useState([])
    const {cart, setCart, buyProducts} = useContext(Context);

    useEffect(() => {
        fetch("data.json")
        .then((response) => response.json())
        .then((data) => setProducts(data))
    }, [])

    const [order, setOrder] = useState('asc');


     function handleSort(newOrder) {
      const sortedProducts = [...products].sort((a, b) => {
        if (newOrder === 'asc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
      setProducts(sortedProducts);
      setOrder(newOrder);
    };

    
    return(  
      <>
      <div className="contBtnyCards">
      <h1>TODOS LOS PRODUCTOS</h1>
      <div className="btnOrderProducts">
      <h4>Ordenar por:</h4>
      <button className='btnOrder' onClick={() => handleSort('asc')}>Precio (menor a mayor)</button>
      <button className='btnOrder' onClick={() => handleSort('desc')}>Precio (mayor a menor)</button>
      </div>

      <div className='containerCardsProducts'>
      {products.map((product) => (
          <>
          
          <div className='contProduct' key={product.id}>
              <img className='imgProd' src={product.img} alt="Cafe" />
              <h3>{product.name}</h3>
              <h4>${product.price}</h4>
              <button onClick={() => buyProducts(product)} className='btnBuy'>Añadir al carrito</button>
          </div>
          </>

        ))}
      </div>
      </div>
      </> 
      )

}

export default TiendaData