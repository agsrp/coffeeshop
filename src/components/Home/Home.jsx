import React from 'react'
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'
import Products from '../Products/Products'
import Footer from '../Footer/Footer'
import './Home.css'
import { Link } from 'react-router-dom'
import Ubi from '../Map/Map'


const Home = () =>  {
  return (
    <>
    <Navbar/>
    <Banner/>
    <div className="cardsProduct"> 
      <div className='cards'>
        <Products/> 
      </div>
      <Link className='verMasCards' to='/Tienda'>Ver más productos</Link>
    </div>
    <Ubi/>
    <Footer/>
    </>
  )
}

export default Home