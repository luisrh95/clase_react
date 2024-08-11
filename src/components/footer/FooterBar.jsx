import { useState } from 'react'
import './footer.css'
import IconoFB from '../../images/icon_fb.png'
import IconoIN from '../../images/icon_in.png'
import IconoWP from '../../images/icon_wp.png'

function FooterBar({atributeClass}){
    return(
    <footer className={atributeClass}>
		
		<ul>
		  <li><a href="#" title="Siguenos en Facebook"><img src={IconoFB} title="Facebook" alt="Facebook"/></a></li>
		  <li><a href="#" title="Siguenos en Instagram"><img src={IconoIN} title="Instagram" alt="Instagram"/></a></li>
		  <li><a href="#" title="Siguenos en WhatsApp"><img src={IconoWP} title="WhatsApp" alt="WhatsApp"/></a></li>
		</ul>
		
		<p>
			¡Embárcate en un viaje aromático y visual siguiendo a ForestWhispers en nuestras redes sociales!		
		</p>
		
	</footer>
    )
}

export default FooterBar