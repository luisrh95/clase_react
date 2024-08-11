import { useState } from 'react'
import FooterBar from './../footer/FooterBar.jsx'
/* IMAGES */
import FabricaImage from '../../images/fabrica_003.jpg'
import CeraImage from '../../images/fabrica_001.jpg'
import CristalesImage from '../../images/fabrica_004.jpg'
import AceiteImage from '../../images/fabrica_005.jpg'

import { Link } from "react-router-dom"


function PageProcesos(){

   

    return(
        <>

<main>
		
        <section className="two">
            
            <div>
              <div className="image-content">
                  <img src={FabricaImage} title="Nosotros" alt="Nosotros"/>
              </div>
            </div>
            
            <div>
            <article>
             <h1>Fabricación de Velas</h1>
             <p>
              En ForestWhispers, la fabricación de nuestras velas es un proceso meticuloso y apasionado que fusiona la artesanía con la naturaleza. Comenzamos seleccionando cuidadosamente cera de soya de alta calidad, proveniente de fuentes sostenibles. Nuestros artesanos expertos, con atención a cada detalle, vierten la cera en moldes especializados, dando forma a velas únicas. Equipos especializados garantizan una producción eficiente y consistente, mientras que las mechas cuidadosamente elegidas aseguran una quemadura uniforme.		    <Link className="button" to="/productos/" title="">Ver nuestros productos</Link>
             </p>
            </article>
            </div>
            
          
        </section>
          
        <section className="cards backgroundHueso" >
            
            <h2>Nuestras velas</h2>
            
            <div className="container-cards">
                
            <article>
             <h3>Materiales orgánicos</h3>
             <p>
              En ForestWhispers, solo utilizamos materiales excepcionales en la fabricación de nuestras velas. La cera de soya, cuidadosamente seleccionada de fuentes sostenibles, se convierte en la esencia de nuestras creaciones. 		    
             </p>
            </article>
            
            <article>
             <h3>Proceso artesanal</h3>
             <p>
              Nuestro proceso de fabricación es una obra de arte en sí misma. Desde la meticulosa selección de la materia prima hasta el vertido de la cera en moldes especializados, cada paso es realizado por artesanos dedicados. 		    
             </p>
            </article>
            
            <article>
             <h3>Presentación</h3>
             <p>
              Cada vela ForestWhispers no solo es una fuente de luz y aroma, sino también un objeto de elegancia. Nuestras velas se presentan con esmero, desde su diseño hasta su empaque. Envueltas en envases sostenibles y estéticamente agradables, nuestras velas son un regalo perfecto para cualquier ocasión.		    
             </p>
            </article>
                
            </div>
            
          
        </section>
          
          
       <section className="two">
           
           <div>
            <article>
             <h2>Cera de soja</h2>
             <p>
              En ForestWhispers, comprometidos con la sostenibilidad, seleccionamos cuidadosamente cera de soya de alta calidad como la piedra angular de nuestras velas. Proveniente de fuentes sostenibles, la cera de soya no solo ofrece una combustión limpia, sino que también respeta nuestro compromiso con prácticas ecológicas.		   </p>
            </article>
           </div>
          
           
            <div>
              <div className="image-content">
                  <img src={CeraImage} title="Nosotros" alt="Nosotros"/>
              </div>
            </div>
          
       </section>
          
       <section className="two backgroundHueso">
  
            <div>
              <div className="image-content">
                  <img src={CristalesImage} title="Nosotros" alt="Nosotros"/>
              </div>
            </div>
  
            <div>
            <article>
             <h1>Cristales de calidad</h1>
             <p>
              Nuestro compromiso con la calidad se refleja en cada detalle, incluyendo los cristales que elegimos para embazar nuestros productos. Cada vela ForestWhispers se presenta en envases elegantes y sostenibles, diseñados para realzar la experiencia visual y práctica. Estos cristales no solo protegen nuestras velas, sino que también añaden un toque de elegancia a cualquier espacio, transformando la iluminación en un arte refinado.		   </p>
            </article>
            </div>
  
  
        </section>
          
       <section className="two">
           
           <div>
            <article>
             <h2>Aceites Aromáticos Exclusivos</h2>
             <p>
              La esencia de ForestWhispers reside en nuestros aceites aromáticos exclusivos, meticulosamente seleccionados para crear fragancias cautivadoras. Estos aceites se infunden cuidadosamente en la cera de soya durante nuestro proceso de fabricación, garantizando que cada vela emane una fragancia única y encantadora. Desde la relajante lavanda hasta la reconfortante vainilla y la refrescante citrus con menta, cada aroma se convierte en una firma olfativa que eleva la experiencia de nuestras velas a nuevas alturas.
              </p>
            </article>
           </div>
          
           
            <div>
              <div className="image-content">
                  <img src={AceiteImage} title="Nosotros" alt="Nosotros"/>
              </div>
            </div>
          
       </section>
      
      </main>
  

      <FooterBar atributeClass="black"/>
        </>
    )
}

export default PageProcesos