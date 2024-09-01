import { useEffect, useState } from 'react'
import ProductDetail from './ProductDetail.jsx'
import FooterBar from '../footer/FooterBar.jsx'
import { useNavigate, useParams  } from 'react-router-dom'
import { getProducto } from './../../asyncmock.js'
import { db } from '../../services/firebaseConfig.jsx'
import { getDoc, doc } from 'firebase/firestore'

const TempleteProduct = () => {
    const [producto, setProducto] = useState({})
    const [error, setError] = useState(null)
    const [cargando, setCargando] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        setCargando(true)
        const fetchProducto = async () => {
            try{

                //const res = await getProducto(id)
                const productoRef = doc(db, "productos", id)

                const rest = await getDoc(productoRef)
                const data = rest.data()
                const FichaProducto = {id: rest.id , ...data}
                
                setProducto(FichaProducto)

            } catch (error){
                setError(error)
                console.error("Error al cargadr productos:", error);
            } finally {
                setCargando(false)
            }
        }

        fetchProducto()

    }, [id])

    if(cargando){
   
        return (
          <span className="loader-card"></span>
        
        )
    } 
  
  return (
    
<>
    
<main>
		
        <section className="two">
            

        <ProductDetail producto={producto}/>
            
          
        </section>
</main>

<FooterBar atributeClass="black"/>
  
</>

  )
}
export default TempleteProduct