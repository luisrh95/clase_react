import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/AppContexto'
import { Link } from "react-router-dom"
import FooterBar from './../footer/FooterBar.jsx'
import CartObjet from '../ItemListContainer/CartObjet.jsx'
/* IMAGES */
import ImagenCarrito from '../../images/carritopague.jpeg'



export const PageCarrito = () => {

  const { contexto, cart,vaciarCarrito } = useContext(CartContext)


    return(
        <>

<main>
		
        <section className="two">
            
            <div>
              <div className="image-content">
                  <img src={ImagenCarrito} title="Nosotros" alt="Nosotros"/>
              </div>
            </div>
            
            <div>
              {
                cart.length > 0 ?
                <h4 className="TitleCart">Hola, tienes {cart.length} productos agregados</h4>
                :
                <>
                <h3>Tu carrito esta vacio</h3>
                <p>Haz <Link className="textLink" to="/productos">clic aquí para comprar </Link>alguna de nuestras velas</p>
                </>
              }

              {
                cart?.map(e => {
                  return (
                    <CartObjet key={e.id} producto={e} />
                  )
                })
              }

              {
                cart.length > 0 ?
                <Link className="button" to="/checkout">Pagar ahora</Link>
                :
                <></>
              }

            </div>
            
          
        </section>
          
      
      </main>
      
  

      <FooterBar atributeClass="black"/>
        </>
    )

}

export default PageCarrito;