import React, { useContext } from 'react' 
import { CartContext } from "../../context/AppContexto"
import papelera from "../../images/papelera.svg"

const CartObjet = ({producto}) => {
    const {eliminarProducto,modificarCantidadItem} = useContext(CartContext)

  const incrementarCantidad = () => {
     if(producto.cantidad >= producto.stock){

     }else{
        modificarCantidadItem(producto.id, producto.cantidad + 1);
     }
     
  }

  const disminuirCantidad = () => {
      if (producto.cantidad > 1) {
          modificarCantidadItem(producto.id, producto.cantidad - 1);
      }
  }

  return (
    <div className='cart-item'>
        <div className="imageProduct">
        <img src={`/images/${producto.imagen}`} alt={producto.nombre} title={producto.nombre}/>
        </div>
        <div className='DetalleProduct'>
            <h2>{producto.nombre} </h2>
            <p>
            <strong>Precio:</strong> {producto.precio}<br/>

            <strong>Cantidad:</strong> 

            <button className="changeCantidad" onClick={disminuirCantidad}>-</button> 
             {producto.cantidad} 
            <button className="changeCantidad" onClick={incrementarCantidad}>+</button><br/>


            <strong>total:</strong> {producto.precio * producto.cantidad}
            <button onClick={()=>eliminarProducto(producto.id)}><img src={papelera} title="Eliminar"/> Eliminar</button>
            </p>
        </div>
    </div>
  )
}

export default CartObjet