import { useState } from 'react'
import NavBar from './components/nav/NavBar.jsx'
import PageHome from './components/Pages/PageHome.jsx'
import PageProcesos from './components/Pages/PageProcesos.jsx'
import PageProductos from './components/Pages/PageProductos.jsx'
import PageContacto from './components/Pages/PageContacto.jsx'
import TempleteProduct from './components/ItemListContainer/TempleteProduct.jsx'

import { BrowserRouter, Routes, Route } from "react-router-dom"



//import './App.css'

function App() {
  
 return (
  <BrowserRouter>
    <NavBar/>
    
    <Routes>
      <Route path='/' element={<PageHome/>} />
      <Route path='/procesos' element={<PageProcesos/>} />
      <Route path='/productos' element={<PageProductos/>} />
      <Route path='/producto/:id' element={<TempleteProduct/>} />
      <Route path='/contacto' element={<PageContacto/>} />
    </Routes>

    
   
  </BrowserRouter>
 )

}

export default App
