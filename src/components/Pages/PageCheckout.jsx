import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/AppContexto'
import { Link } from "react-router-dom"
import FooterBar from './../footer/FooterBar.jsx'
import CartObjet from '../ItemListContainer/CartObjet.jsx'
/* IMAGES */
import imagenFinalizar from '../../images/FinalizarCompra.jpg'
import { db } from '../../services/firebaseConfig.jsx'
import { addDoc, collection } from 'firebase/firestore'



const PageCheckout = () => {

    const [nombre, setNombre] = useState("")
    const [mail, setMail] = useState("")
    const [direccion, setDireccion] = useState("")
    const [orden, setOrden] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const { cart, setCart } = useContext(CartContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        const usuario = {
            nombre,
            mail,
            direccion
        }

        const orden = {
            cart, usuario
        }

        const orderRef = collection(db, "ordenes")
        const orderID = await addDoc(orderRef, orden)

        setOrden(orderID.id)
        setIsSubmitting(false)
        setDireccion("")
        setMail("")
        setNombre("")
        setCart([])
    }


    return (
        <>
<main>
		
        <section className="two">
            
            <div>
              <div className="image-content">
                  <img src={imagenFinalizar} title="Nosotros" alt="Nosotros"/>
              </div>
            </div>
            
            <div>


            {orden ? (
                        <>
                         <h3 className="TitleCart">¡Tu pago fue procesado!</h3>
                         <p>El id de tu compra es <strong>{orden}</strong></p>
                        </>
                        

                    ) : (
                            <>
                                {cart.length > 0 ? (
                                    <>
                                        <h4 className="TitleCart">¡Gracias por tu compra!<br /> Vamos a gestionar el pago!</h4>
                                        <form className='form' onSubmit={(e) => handleSubmit(e)}>
                                            <label htmlFor="nombre">Nombre  </label>
                                            <input type="text" name='nombre' required="required" onChange={(e) => setNombre(e.target.value)} />
                                            <label htmlFor="email">  Email  </label>
                                            <input type="email" name='email' required="required" onChange={(e) => setMail(e.target.value)} />
                                            <label htmlFor="direccion"> Dirección </label>
                                            <input type="text" name='direccion' required="required" onChange={(e) => setDireccion(e.target.value)} />
                                            <button type='submit' disabled={isSubmitting}> Enviar </button>
                                        </form>
                                    </>
                                ) : (
                                    <>
                                        <h3 className="TitleCart">Tu carrito está vacío</h3>
                                        <p>¡Hola! No podemos procesar tu pago, porque tu carrito está vacío.<br />
                                            <Link className="textLink" to="/productos">Haz clic aquí para comprar</Link> algunas de nuestras velas</p>
                                    </>
                                )}
                            </>
            )}


            </div>
            
          
        </section>
          
      
      </main>

        <FooterBar atributeClass="black"/>

        </>
    )
}

export default PageCheckout

