import React, { Component } from 'react';
import './styles.css';
import './animations.css';

class AnimateSlider extends Component {
    constructor(props) {
        super(props) 
        //debugger;// eslint-disable-line no-debugger 
        this.state = {
            arrayLength : this.props.arrayLength,
            actualIndex : this.props.initialIndex
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps !== this.props || nextState !== this.state)
    }
    
    handlePrev = () => {
        const {actualIndex} = this.state
        if(actualIndex > 0) {
            this.setState({
                actualIndex : actualIndex -1 
            })
        }
    }
    handleNext = () => {
        const {actualIndex} = this.state
        if(actualIndex < this.state.arrayLength-1) {
            this.setState({
                actualIndex : actualIndex +1
            })
        }
    }
    render() {
        const {children, nextButton = 'next', prevButton = 'prev'} = this.props;
        const {actualIndex, arrayLength} = this.state
        const offset = (actualIndex/arrayLength) *100
        return (
            <div className={`sliderContainer`}>
                <div className={`sliderWrapper active-element-${actualIndex}`} style={{transform: `translateX(-${offset}%)`}}>
                    {children}
                </div>
                <button onClick={this.handleNext} className='sliderButton nextButton' type='button'>{nextButton}</button>
                <button onClick={this.handlePrev} className='sliderButton prevButton' type='button'>{prevButton}</button>
            </div>
        );
    }
}

export default AnimateSlider;
