import React from 'react'
import './style.css'

export default function ContentElement({title, skills}) {
    return (
        <div className='content_element '>
            <h3 className='content_element_title'>{title}</h3>
            <ul>
                {skills.map((e, i) => <li key={'skill' + i}>e</li>)}
            </ul>
        </div>
    )
}
