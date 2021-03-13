import React from 'react'
import './style.css'

function ContentElement({title, skills}) {
    return (
        <div className='content_element '>
            <h3 className='content_element_title'>{title}</h3>
            <ul>
                {skills.map((e, i) => <li key={'skill' + i}>e</li>)}
            </ul>
        </div>
    )
}
 const ContentElementMemo = React.memo(ContentElement);
 export default ContentElementMemo
