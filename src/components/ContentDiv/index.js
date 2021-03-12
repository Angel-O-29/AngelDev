import React from 'react'
import ContentElement from './ContentElement'
import './style.css'

export default function ContentDiv({offsetY}) {
    return (
        <div id='habilidades' className='contentdiv'>
            <h2  className='contentdiv_title '>Habilidades Y Conocimientos</h2>
            <div className='contentdiv_cont '>
                <ContentElement key='content1' title='Tecnologías' skills={['hola', 'como', 'estas']}/>
                <ContentElement key='content2' title='Herramientas' skills={['hola', 'como', 'estas']}/>
                <ContentElement key='content3' title='Habilidades' skills={['hola', 'como', 'estas']}/>
            </div>
                <span className='circle contentdiv_back one'  style={{transform: `translateX(${-(709 - offsetY) * 0.5}px)` }} ></span>
                <span className='circle contentdiv_back two' style={{transform: `translateX(${(709 - offsetY) * 0.7}px)` }} ></span>
                <span className='circle contentdiv_back three' style={{transform: `translateX(${(709 - offsetY)}px)` }} ></span>
                <span className='circle contentdiv_back four' style={{transform: `translateX(${(709 - offsetY) * 0.2}px)` }} ></span>
                <span className='circle contentdiv_back five' style={{transform: `translateX(${-(709 - offsetY) * 1.5}px)` }} ></span>
                <span className='circle contentdiv_back six' style={{transform: `translateX(${-(709 - offsetY) * 0.8}px)` }} ></span>
                <span className='circle contentdiv_back seven' style={{transform: `translateX(${(709 - offsetY) * 0.8}px)` }} ></span>
                <span className='circle contentdiv_back eight' style={{transform: `translateX(${(709 - offsetY) * 0.6}px)` }} ></span>
                <span className='circle contentdiv_back nine' style={{transform: `translateX(${-(709 - offsetY) * 0.2}px)` }} ></span>
                <span className='circle contentdiv_back ten' style={{transform: `translateX(${(709 - offsetY) * 1.1}px)` }} ></span>
                <span className='circle contentdiv_back eleven' style={{transform: `translateX(${-(709 - offsetY) * 0.3}px)` }} ></span>
        </div>
    )
}
