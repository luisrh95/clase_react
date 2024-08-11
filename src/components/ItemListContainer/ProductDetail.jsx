import React from 'react'

const DetalleItem = ({producto}) => {
  
  const {id, nombre, texto, imagen, precio, categoria} = producto
  
  return (
    
       <>   
            <div>
              <div className="image-content">
                  <img src={imagen} title={nombre} alt={nombre}/>
              </div>
            </div>
            
            <div>
            <article>
             <h1>{nombre}</h1>
             <p>
               {texto}<br/>
               <strong>Categoría: </strong>{categoria}<br/>
               <strong>Precio: </strong>{precio}<br/>
             </p>
            </article>
            </div>
        </>            

  
  )
}
export default DetalleItem