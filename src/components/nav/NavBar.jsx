import React, { useEffect } from 'react'
import './NavBar.css'
import logoPage from '../../images/logo.png'
import ButtonMovil from '../../images/menu.png'
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Link } from "react-router-dom"


function NavBar(){

  useEffect(() => {
    const menuToggle = document.getElementById("menu_toggle");
    const menu = document.getElementById("menu");

    const toggleMenu = (event) => {
      event.preventDefault(); // Evita que el enlace recargue la página

      if (menu.style.display === "block" || menu.style.display === "") {
        menu.style.transition = "width 0.3s ease"; // Aplica la transición
        menu.style.width = "0"; // Oculta el menú
        setTimeout(() => {
          menu.style.display = "none"; //  oculta el menú después de la animación
        }, 300);
      } else {
        menu.style.display = "block"; // Muestra el menú antes de animarlo
        menu.style.width = "0"; // Inicializa el ancho en 0
        setTimeout(() => {
          menu.style.transition = "width 0.3s ease"; // Aplica la transición
          menu.style.width = ""; // Deja que el ancho se ajuste automáticamente
        }, 10); // Retardo corto para permitir que la transición tenga efecto
      }
    };
    menuToggle.addEventListener("click", toggleMenu);

    // Cleanup: Elimina el event listener cuando el componente se desmonta
    return () => {
      menuToggle.removeEventListener("click", toggleMenu);
    };
  }, []);  

    return(
    <header>
        <nav>
          <div className="movil-menu">
            <div><a id="menu_toggle" href="#"><img src={ButtonMovil}/></a></div>
            <a href="#"><img src={logoPage}/></a>
          </div>
          <ul id="menu">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/procesos/">Procesos</Link></li>
            <li className="logo"><Link to="/"><img src={logoPage} title="Home"/></Link></li>
            <li><Link to="/productos/" >Productos</Link></li>
            <li><Link to="/contacto/">Contacto</Link></li>
          </ul>
          <CartWidget/>
        </nav>
    </header>

    )
}

export default NavBar