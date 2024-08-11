import { useState } from 'react'
import FooterBar from './../footer/FooterBar.jsx'
import { Link } from "react-router-dom"

function PageHome(){

   

    return(
        <>

<main>
		
        <section className="two">
            
            <div>
              <div className="image-content">
                  <img src="./src/images/nosotros.jpeg" title="Nosotros" alt="Nosotros"/>
              </div>
            </div>
            
            <div>
            <article>
             <h1>ForestWhispers</h1>
             <p>
              Bienvenido a ForestWhispers, donde la artesanía se encuentra con la naturaleza. Nos dedicamos a la creación de velas únicas y exquisitas, utilizando cera de soya de alta calidad y mezclas de fragancias cuidadosamente seleccionadas. En ForestWhispers, cada vela es más que un producto; es una experiencia que ilumina tus sentidos y eleva tu espacio.		    
              <Link className="button" to="/contacto/" title="">Contáctanos</Link>
             </p>
            </article>
            </div>
            
          
        </section>
          
        <section className="cards backgroundHueso">
            
            <h2>Proceso</h2>
            
            <div className="container-cards">
                
            <article>
             <h3>Materiales</h3>
             <p>
              En ForestWhispers, nos comprometemos a utilizar materiales de la más alta calidad en la fabricación de nuestras velas. La cera de soya, proveniente de fuentes sostenibles, es el corazón de nuestras creaciones, asegurando una combustión limpia y respetuosa con el medio ambiente. 		    
              <Link className="button" to="/contacto/" title="">Contáctanos</Link>
             </p>
            </article>
            
            <article>
             <h3>Equipo especializado</h3>
             <p>
              Nuestro proceso artesanal se beneficia de equipos especializados diseñados para la creación de velas únicas. Desde nuestros moldes precisos hasta los utensilios de vertido, cada elemento ha sido seleccionado para asegurar una producción eficiente y consistente. 		    
              <Link className="button" to="/contacto/" title="">Contáctanos</Link>
             </p>
            </article>
            
            <article>
             <h3>Infusión de cera</h3>
             <p>
              La infusión de la cera es un paso esencial en nuestro proceso de fabricación. Cada lote de cera de soya es infusionado con nuestras mezclas exclusivas de fragancias, logrando una integración perfecta que captura la esencia de la naturaleza. 		   
              <Link className="button" to="/contacto/" title="">Contáctanos</Link>
             </p>
            </article>
                
            </div>
            
          
        </section>
          
          
       <section className="two" id="galeria">
           
           <div>
            <article>
             <h2>Productos</h2>
             <p>
              Estas velas ForestWhispers no solo iluminan, sino que también llenan tu hogar u oficina con fragancias cautivadoras, proporcionando una experiencia sensorial única que se adapta a tus momentos y estados de ánimo.
              <Link className="button" to="/productos/" title="">Ver Precios</Link>
             </p>
            </article>
           </div>
          
           
            <div id="GaleriaProductos">
                
               <div className="ImgPrincipal">
                  <img src="././src/images/img_001.jpg" title="Imagen 0" alt="Imagen 0"/>
               </div>
               
               <div className="GalleryImg1">
                  <img src="./src/images/img_002.jpeg" title="Imagen 0" alt="Imagen 0"/>
               </div>
               <div className="GalleryImg2">
                  <img src="./src/images/img_003.jpeg" title="Imagen 0" alt="Imagen 0"/>
               </div>
               <div className="GalleryImg3">
                  <img src="./src/images/img_004.jpeg" title="Imagen 0" alt="Imagen 0"/>
               </div>
                
            </div>
          
       </section>
      
      </main>
  

      <FooterBar atributeClass="black"/>
        </>
    )
}

export default PageHome