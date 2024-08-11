import { useEffect, useState } from 'react'
import ProductDetail from './ProductDetail.jsx'
import { useNavigate, useParams  } from 'react-router-dom'
import { getProducto } from './../../asyncmock.js'

const TempleteProduct = () => {
    const [producto, setProducto] = useState({})
    const [error, setError] = useState(null)
    const [cargando, setCargando] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        setCargando(true)
        const fetchProducto = async () => {
            try{

                const res = await getProducto(id)
                setProducto(res)

            } catch (error){
                setError(error)
            } finally {
                setCargando(false)
            }
        }

        fetchProducto()

    }, [id])

    console.log(producto)
  
  return (
    
<main>
		
        <section className="two">
            

        <ProductDetail producto={producto}/>
            
          
        </section>
</main>
  
  )
}
export default TempleteProduct