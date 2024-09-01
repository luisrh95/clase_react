import React, { useContext } from 'react'
import { CartContext } from '../../context/AppContexto'

import './CartWidget.css'
import IconCart from './../../images/icon_cart.png'

import { Link } from "react-router-dom"

function CartWidget(){
    
    const { mostrarCantidad } = useContext(CartContext)
    let content
    if(mostrarCantidad() > 0){
        content = `Tienes ${mostrarCantidad()}`
    }else{
        content = '¡Hola!'
    }


    return(
    <Link to="/carrito/">
     <div className='CartWidget'>
        {
            mostrarCantidad.lenght > 0
        }
        <p>{content}</p>
        <img src={IconCart} title="Este es tu carrito"/>
     </div>
     </Link>
    )
}

export default CartWidget