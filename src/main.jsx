import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Cart from './components/Carrito/Cart.jsx'
import ContextProvider from './context/Context.jsx'
import Tienda from './components/Tienda/Tienda.jsx'
import Contact from './components/Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/Shop',
    element: <Cart/>
  },
  {
    path: '/Tienda',
    element: <Tienda/>
  },
  {
    path: '/Contacto',
    element: <Contact/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider> 
      < RouterProvider router={router} />
    </ContextProvider> 
  </StrictMode>,
)
