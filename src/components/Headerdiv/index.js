import React from 'react'
import './style.css'

export default function Headerdiv() {
    return (
        <header id='info' >
            <div className='back_img'>
                <div className='header_cont contenedor'>
                    <div>
                        <div className='header_img'>AD</div>
                        <div>
                            <h2 className='header_title'>Angel David <br/> Luis Hidalgo</h2>
                            <p className='no_margin header_subtitle'> Desarrollador Web Front-End y movil </p>

                        </div>
                    </div>
                    <div>
                        <p className='header_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit massa, maximus quis mauris eu, imperdiet tristique metus. Pellentesque ultrices pellentesque lacinia. Integer at purus eu justo bibendum dignissim. Sed pharetra augue sed neque commodo, ac ornare mi accumsan. Ut blandit ante odio, eu egestas dolor venenatis cursus. Cras ultrices, risus eu pretium efficitur, quam dolor tristique justo, a maximus libero odio in nisi. Sed efficitur, ipsum dapibus blandit cursus, nunc nulla consectetur arcu, mollis euismod sem enim id libero. Vivamus eu risus eu lorem facilisis pretium. In porta maximus sem. In vel mattis mauris. Praesent condimentum sollicitudin tortor non gravida. Etiam vitae ultrices dui. Nullam vestibulum elementum nunc, et rutrum metus imperdiet ac. Etiam posuere sodales dignissim.</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
