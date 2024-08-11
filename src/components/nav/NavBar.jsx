import { useState } from 'react'
import './NavBar.css'
import logoPage from '../../images/logo.png'
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Link } from "react-router-dom"


function NavBar(){

   

    return(
    <header>
        <nav>
          <div className="movil-menu">
            <div><a id="menu_toggle" href="#"><img src={logoPage}/></a></div>
            <a href="#"><img src={logoPage}/></a>
          </div>
          <ul id="menu">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/procesos/">Procesos</Link></li>
            <li className="logo"><Link to="/"><img src={logoPage} title="Home"/></Link></li>
            <li><Link to="/productos/" >Productos</Link></li>
            <li><Link to="/contacto/">Contacto</Link></li>
          </ul>
          <CartWidget name="Hernán"/>
        </nav>
    </header>
    )
}

export default NavBar