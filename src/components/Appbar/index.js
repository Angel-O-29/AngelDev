import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import './style.css'

function Appbar() {
    return (
        <div className='appbar'>
            <h1 className='titulo'>Angel<span>DEV</span></h1>
            <a href='#!' className='menu_movil'>menu</a>
            <nav className='navegacion '>
                <div><Link activeClass="active" spy={true} smooth={true} offset={-65} duration={50} to='info'>¿Quien soy?</Link></div>
                <div><Link activeClass="active" spy={true} smooth={true} offset={-65} duration={50} to='habilidades'>Habilidades y <br/> Conocimientos</Link></div>
                <div><Link activeClass="active" spy={true} smooth={true} offset={-65} duration={50} to='proyectos'>Proyectos anteriores</Link></div>
                <div><Link activeClass="active" spy={true} smooth={true} duration={50} to='contacto'>Contacto</Link></div>
                
                
                
            </nav>
        </div>
    )
}

export default Appbar
