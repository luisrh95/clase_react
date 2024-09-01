import { useState } from 'react'
import NavBar from './components/nav/NavBar.jsx'
import PageHome from './components/Pages/PageHome.jsx'
import PageProcesos from './components/Pages/PageProcesos.jsx'
import PageProductos from './components/Pages/PageProductos.jsx'
import PageContacto from './components/Pages/PageContacto.jsx'
import PageCarrito from './components/Pages/PageCarrito.jsx'
import PageCheckout from './components/Pages/PageCheckout.jsx'
import TempleteProduct from './components/ItemListContainer/TempleteProduct.jsx'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartContextProvider } from './context/AppContexto.jsx'


//import './App.css'

function App() {
  
 return (
  
  <CartContextProvider>
  <BrowserRouter>
  
    <NavBar/>
    
    <Routes>
      <Route path='/' element={<PageHome/>} />
      <Route path='/procesos' element={<PageProcesos/>} />
      <Route path='/productos' element={<PageProductos/>} />
      <Route path='/producto/:id' element={<TempleteProduct/>} />
      <Route path='/contacto' element={<PageContacto/>} />
      <Route path='/carrito' element={<PageCarrito/>}/>
      <Route path='/checkout' element={<PageCheckout/>}/>
    </Routes>

    
   
  </BrowserRouter>
  </CartContextProvider>

 )

}

export default App
