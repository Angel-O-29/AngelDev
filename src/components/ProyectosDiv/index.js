import React from 'react'
import AnimateSlider from './AnimateSlider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Proyecto from './Proyecto'
import './styles.css'

const pro = [
    {
        title: 'hola1',
        cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit massa, maximus quis mauris eu, imperdiet tristique metus. Pellentesque ultrices pellentesque lacinia. Integer at purus eu justo bibendum dignissim. Sed pharetra augue sed neque commodo, ac ornare mi accumsan. Ut blandit ante odio, eu egestas dolor venenatis cursus. Cras ultrices, risus eu pretium efficitur, quam dolor tristique justo, a maximus libero odio in nisi. '
    },
    {
        title: 'perdon',
        cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit massa, maximus quis mauris eu, imperdiet tristique metus. Pellentesque ultrices pellentesque lacinia. Integer at purus eu justo bibendum dignissim. Sed pharetra augue sed neque commodo, ac ornare mi accumsan. Ut blandit ante odio, eu egestas dolor venenatis cursus. Cras ultrices, risus eu pretium efficitur, quam dolor tristique justo, a maximus libero odio in nisi. '
    },
    {
        title: 'tercer',
        cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit massa, maximus quis mauris eu, imperdiet tristique metus. Pellentesque ultrices pellentesque lacinia. Integer at purus eu justo bibendum dignissim. Sed pharetra augue sed neque commodo, ac ornare mi accumsan. Ut blandit ante odio, eu egestas dolor venenatis cursus. Cras ultrices, risus eu pretium efficitur, quam dolor tristique justo, a maximus libero odio in nisi. '
    }
]
function ProyectosDiv() {
    const arrayLength = pro.length
    return (
        <div className='proyectos_slider' id='proyectos' >
            <AnimateSlider arrayLength={arrayLength} initialIndex={0} nextButton={<FontAwesomeIcon icon='chevron-right'/>} prevButton={<FontAwesomeIcon icon='chevron-left'/>}>
                {pro.map((e, index)=><Proyecto key={`animateSliderElement-${index}`} elementId={`animateSliderElement-${index}`}  title={e.title} cont={e.cont}/>)}
            </AnimateSlider>
        </div>
    )
}

export default ProyectosDiv
