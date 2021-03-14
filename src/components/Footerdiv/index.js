import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

export default function Footerdiv() {
    return (
        <footer id='contacto' className='footerdiv'>
            <div className='contenedor'>
                <div className='footertext'> Diseño y Programacion elaborada por AngelDev</div>
                <div className='redesCont'>
                    <h3> Redes Sociales:</h3>
                    <div>
                        <nav className='redes'>
                            <a target='_blank' rel='noreferrer' className='rotate-icon' href='https://www.linkedin.com/in/angel-luis-hidalgo-719910202/'><FontAwesomeIcon icon={['fab', 'linkedin']}/></a>
                            <a target='_blank' rel='noreferrer' className='rotate-icon' href='https://twitter.com/Angelo97733282'><FontAwesomeIcon icon={['fab', 'twitter']}/></a>
                            <a target='_blank' rel='noreferrer' className='rotate-icon' href='https://t.me/Angel_O_29'><FontAwesomeIcon icon={['fab', 'telegram-plane']}/></a>
                        </nav>
                        <p> o envia un correo a 'angeloluishidalgo@gmail.com'</p>
                    </div>
                    
                </div>
                
            </div>
        </footer>
    )
}
