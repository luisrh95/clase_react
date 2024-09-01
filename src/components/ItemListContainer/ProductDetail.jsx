import React, { useContext } from 'react'
import ItemButtons from './ItemButtons'

import { CartContext } from '../../context/AppContexto'

const DetalleItem = ({producto}) => {
  
  const {contexto, AddToCart} = useContext(CartContext)

  const {id, nombre, texto, imagen, precio, categoria} = producto
  
  const ComprarItem = (count) =>{


    AddToCart({...producto, cantidad: count})




    console.log('Producto añadido al carrito:', producto, 'Cantidad:', count);
  }


  return (
    
       <>   
            <div>
              <div className="image-content">
                  <img src={`/images/${imagen}`} title={nombre} alt={nombre}/>
              </div>
            </div>
            
            <div>
            <article>
             <h1>{nombre}</h1>
             <p>
               {texto}<br/><br/>
               <strong>Categoría: </strong>{categoria}<br/>
               <strong>Precio: </strong>$ {precio}<br/>
               
             </p>
             <ItemButtons id={id} ComprarItem={ComprarItem}/>
            </article>
            </div>
        </>            

  
  )
}
export default DetalleItem