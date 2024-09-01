import { useState } from 'react'
import FooterBar from './../footer/FooterBar.jsx'
/* Images Contacto */
import ImagenContacto from '../../images/fabrica_003.jpg'
import { Link } from "react-router-dom"
function PageContacto(){

   

    return(
        <>

<main>
		
        <section className="two backgroundHueso">
            
            <div>
              <div className="image-content">
                  <img src={ImagenContacto} title="Nosotros" alt="Nosotros"/>
              </div>
            </div>
            
            <div>
            <article>
             <h1>Contáctanos</h1>
             <p>
              ¡Nos encantaría escucharte! En ForestWhispers, valoramos la conexión con nuestros clientes. Si tienes alguna pregunta, comentario o simplemente deseas compartir tu experiencia con nuestras velas, no dudes en contactarnos. Estamos aquí para ayudarte a iluminar tus momentos especiales con la magia de ForestWhispers. Puedes comunicarte con nosotros a través de nuestro correo electrónico o completar el formulario de contacto en nuestro sitio web. Estamos ansiosos por ser parte de tu experiencia aromática.		    <a className="button" href="#" title="">Hablemos por WhatsApp</a>
             </p>
            </article>
            </div>
            
          
        </section>
          
  
          
          
       <section className="two MapaContent">
           
           <div>
            <article>
             <h2>Escríbenos</h2>
             <p>
              Tu opinión es invaluable para nosotros. Si tienes alguna sugerencia, comentario o simplemente deseas compartir tus pensamientos, escríbenos. En ForestWhispers, apreciamos la retroalimentación de nuestros clientes, ya que nos ayuda a mejorar y ofrecer productos que realmente satisfacen tus expectativas. Nuestro equipo está ansioso por recibir tus mensajes. Así que, no dudes en enviarnos un correo electrónico a la dirección proporcionada en nuestro sitio web. ¡Estamos aquí para ti y ansiosos por conocer tu historia con ForestWhispers!		   </p>
             <div className="IframeMpas">
                 
              <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=medellin&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                 
             </div>
            </article>
           </div>
          
           
           <div>
                
            <form method="post" action="#">
              
                <label>Nombres</label>
                <input type="text" name="nombre" id="nombre"/>
                
                <label>Correo electrónico</label>
                <input type="email" name="email" id="email"/>
                
                <label>Asunto</label>
                <input type="text" name="asunto" id="asunto"/>
                
                <label>Mensaje</label>
                <textarea name="mensaje" id="mensaje"></textarea>
                
                <button type="submit">Enviar</button>
               
            </form>
  
                
           </div>
          
       </section>
      
      </main>
      
  

      <FooterBar atributeclassName="black"/>
        </>
    )
}

export default PageContacto