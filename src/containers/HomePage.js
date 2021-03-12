import React, {useEffect, useState} from 'react'
import Appbar from '../components/Appbar'
import ContentDiv from '../components/ContentDiv'
import Footerdiv from '../components/Footerdiv'
import ProyectosDiv from '../components/ProyectosDiv'
import Headerdiv from '../components/Headerdiv'
import './styleDef.css'

function HomePage() {
    const [offsetY, setoffsetY] = useState(0)
    const handleScroll = () => setoffsetY(window.pageYOffset)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    }, [])
    return (
        <>
            <Headerdiv></Headerdiv>
                <Appbar></Appbar>   
                <ContentDiv offsetY={offsetY}></ContentDiv>
                <ProyectosDiv></ProyectosDiv>
                <Footerdiv/>
        </>
    )
}

export default HomePage
