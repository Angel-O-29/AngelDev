import React from 'react'
import AnimateSlider from './AnimateSlider'
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
function ProyectosDiv({offsetY}) {
    const arrayLength = pro.length
    var styles = {
        opacity: 0,
        transform:'translateY(500px)'
    }
    if (offsetY >= 922 ) {
        styles = {
            opacity: 1,
            transform:'translateY(00px)'
        }
    }
    return (
        <div className='proyectos_slider' id='proyectos' >
            <AnimateSlider arrayLength={arrayLength} initialIndex={0} styles={styles}>
                {pro.map((e, index)=><Proyecto key={`animateSliderElement-${index}`} elementId={`animateSliderElement-${index}`}  title={e.title} cont={e.cont}/>)}
            </AnimateSlider>
        </div>
    )
}

export default ProyectosDiv
