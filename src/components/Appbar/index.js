import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, /*animateScroll as scroll */} from "react-scroll";
import './style.css'

function Appbar() {
    const [menuMobile, setmenuMobile] = useState('');
    const handleMenu = () => {
        if(menuMobile === '') {
            setmenuMobile('menu_mobile_open')
        } else {
            setmenuMobile('')
        }
    }
    return (
        <div className={`appbar ${menuMobile}`}>
            <h1 className='titulo'>Angel<span>DEV</span></h1>
            <button onClick={handleMenu} type='button' href='#!' className='menu_mobile'><FontAwesomeIcon icon='bars' /></button>
            <nav className='navegacion '>
                <div><Link activeClass="active" spy={true} smooth={true} offset={-65} duration={50} to='info'>¿Quien soy?</Link></div>
                <div><Link activeClass="active" spy={true} smooth={true} offset={-65} duration={50} to='habilidades'>Habilidades y <br/> Conocimientos</Link></div>
                <div><Link activeClass="active" spy={true} smooth={true} offset={-65} duration={50} to='proyectos'>Proyectos anteriores</Link></div>
                <div><Link activeClass="active" spy={true} smooth={true} duration={50} to='contacto'>Contacto</Link></div>
                
                
                
            </nav>
        </div>
    )
}
const AppbarMemo = React.memo(Appbar)
export default AppbarMemo
