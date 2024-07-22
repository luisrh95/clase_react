import { useState } from 'react'
import './CartWidget.css'
import IconCart from './../../images/icon_cart.png'

function CartWidget({name}){
    

    return(
     <div className='CartWidget'>
        <p>Hola, <strong>{name}</strong> </p>
        <img src={IconCart} title="Este es tu carrito"/>
     </div>
    )
}

export default CartWidget