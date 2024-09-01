import React from 'react'
import { Link } from 'react-router-dom'

export const ItemList = ({ items }) => {
  return (
    <>
      {items.map((e) => {
        return (
          <article key={e.id}>
            <div className="image">
              <Link to={`/producto/${e.id}`} title="Ver más">
                <img src={e.imagen} title={e.nombre} alt={e.nombre} />
              </Link>
            </div>
            <h3>{e.nombre}</h3>
            <p>{e.texto}</p>
            <Link className="button" to={`/producto/${e.id}`} title="Ver más">
              Ver más
            </Link>
          </article>
        );
      })}
    </>
  )
}