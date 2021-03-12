import React from 'react'
import './styles.css'

function Proyecto({title, cont, elementId}) {
    return (
        <div id={`${elementId}`} className={`proyectoCont`}>
            <div className='imageproj'></div>
            <h2>{title}</h2>
            <p className='contenedor'>{cont}</p>
            <nav className='linksproj'>
                <a href='#!' >Ir a la pagina</a>
                <a href='#!' >Ver repositorio gitHub</a>
            </nav>
        </div>
    )
}

export default Proyecto
