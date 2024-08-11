import React from 'react'
import { Link } from 'react-router-dom'

export const ItemList = ( {items} ) => {

  return (
    <>
       {items.map( (e) => {
        return (
            <>
		  <article>
		   <div className="image">
			 <img src={e.imagen} title={e.nombre} alt={e.nombre}/>
		   </div>
		   <h3>{e.nombre}</h3>
		   <p>
           {e.texto}
		   </p>
        <Link className="button" to={`/producto/${e.id}`} title="Ver más">Ver más</Link>
		  </article>
            </>
        )
       } )} 
    </>
  )
}