import { useState } from 'react'
import './NavBar.css'
import logoPage from '../../images/logo.png'
import CartWidget from '../CartWidget/CartWidget.jsx'

function NavBar(){

   

    return(
    <header>
        <nav>
          <div className="movil-menu">
            <div><a id="menu_toggle" href="#"><img src={logoPage}/></a></div>
            <a href="#"><img src={logoPage}/></a>
          </div>
          <ul id="menu">
            <li><a href="#" title="Nosotros">Nosotros</a></li>
            <li><a href="./pages/procesos.html" title="Procesos">Procesos</a></li>
            <li class="logo"><a href="#"><img src={logoPage} title="Home"/></a></li>
            <li><a href="./pages/producto.html" title="Productos">Productos</a></li>
            <li><a href="./pages/contacto.html" title="Contactos">Contacto</a></li>
          </ul>
          <CartWidget name="Hernán"/>
        </nav>
    </header>
    )
}

export default NavBar