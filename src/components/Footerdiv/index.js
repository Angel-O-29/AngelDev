import React from 'react'
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
                            <a className='rotate-icon' href='#!'>LIN</a>
                            <a className='rotate-icon' href='#!'>TW</a>
                            <a className='rotate-icon' href='#!'>F</a>
                        </nav>
                        <p> o envia un correo a 'angeloluishidalgo@gmail.com'</p>
                    </div>
                    
                </div>
                
            </div>
        </footer>
    )
}
