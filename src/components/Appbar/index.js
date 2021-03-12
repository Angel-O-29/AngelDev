import React from 'react'
import './style.css'

function Appbar() {
    return (
        <div className='appbar'>
            <h1 className='titulo'>Angel<span>DEV</span></h1>
            <a href='#!' className='menu_movil'>menu</a>
            <nav className='navegacion '>
                <div><a href='#info'>¿Quien Soy?</a></div>
                <div><a href='#habilidades'>Habilidades y <br/> Conocimientos</a></div>
                <div><a href='#proyectos'>Proyectos anteriores</a></div>
                <div><a href='#contacto'>Contacto</a></div>
                
                
                
            </nav>
        </div>
    )
}

export default Appbar
