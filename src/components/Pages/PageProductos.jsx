import { useState } from 'react'
import FooterBar from './../footer/FooterBar.jsx'
import ItemListContainer from './../ItemListContainer/ItemListContainer.jsx'
import LineCorporativeImage from '../../images/linea_corporativa.jpg'
import { Link } from "react-router-dom"


function PageProducto(){


    return(
        <>

<main>
		
        <ItemListContainer/>
          
        <section className="two" id="Nosotros">
           
            
            <div>
            <article>
             <h1>Vela Corporativa Personalizada</h1>
             <p>
              Añade un toque distintivo a tus eventos corporativos con nuestra vela corporativa personalizada. Personalizamos velas con el logotipo de tu empresa y fragancias exclusivas que representen la identidad de tu marca. Es el regalo perfecto para clientes, empleados o socios comerciales, creando una experiencia única que dejará una impresión duradera.
              <Link className="button" to="/contacto/" title="">Contáctanos</Link>
             </p>
            </article>
            </div>
            
            <div>
              <div className="image-content">
                  <img src={LineCorporativeImage} title="Línea Corporativa" alt="Línea Corporativa"/>
              </div>
            </div>
            
          
        </section>
          
      
      </main>
  
      <FooterBar atributeClass="black"/>

        </>
    )
}

export default PageProducto