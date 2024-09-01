import React, { useEffect, useState } from 'react'
import './ItemList.css'
import { ItemList } from './ItemList'
import { db } from '../../services/firebaseConfig.jsx'
import { collection, getDocs } from 'firebase/firestore'

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productos = collection(db, "productos")
        const snapshot = await getDocs(productos)
        const producto = snapshot.docs.map(ficha => ({
          id: ficha.id,
          ...ficha.data()
        }))
        setItems(producto)
      } catch (error) {
        console.error("Error al cargar productos:", error)
      } finally {
        setCargando(false)
      }
    }

    fetchProducts()
  }, [])  // El array vacío asegura que esto solo se ejecute una vez cuando el componente se monte.

  if (cargando) {
    return <span className="loader-card"></span>
  }

  return (
    <section className="cards backgroundHueso" id="productos">
      <h2>Productos</h2>
      <div className="container-cards">
        <ItemList items={items} />
      </div>
    </section>
  )
}

export default ItemListContainer