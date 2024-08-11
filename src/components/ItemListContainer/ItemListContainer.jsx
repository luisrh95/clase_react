import React, { useEffect, useState } from 'react'
import './ItemList.css'
import { getProducts } from './../../asyncmock.js'
import { ItemList } from './ItemList'

const ItemListContainer = ({greeting}) => {
  const [items , setItems] = useState([])
  const [cargando , setCargando ] = useState(true)

  console.log("Mi estado", items)

  useEffect(() => {
    //pedido de los datos
    //esperar que lleguen
    //guardarlos en el estado items
    //pasarlo por props a ItemList
   getProducts().then(prods => setItems(prods))
   .catch(err => err)
   .finally(() => setCargando(false))
  }, [])

  if(cargando){
    return (
      <span class="loader-card"></span>
    )
  }
  
  return (
    
	  <section className="cards backgroundHueso" id="productos">
		  
		  <h2>Productos</h2>
		  
		  <div className="container-cards">
            <ItemList items={items}/>
      </div>

      </section>
  
  )
}

export default ItemListContainer