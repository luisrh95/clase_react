import React from 'react'


export const ItemList = ( {items} ) => {

  return (
    <>
       {items.map( (e) => {
        return (
            <>
		  <article>
		   <div class="image">
			 <img src={e.imagen} title={e.nombre} alt={e.nombre}/>
		   </div>
		   <h3>{e.nombre}</h3>
		   <p>
           {e.texto}
		   </p>
		  </article>
            </>
        )
       } )} 
    </>
  )
}