import React, { Component } from 'react';

export default class ImageSlider extends React.Component{
    constructor(){
        super();
        this.state = {
            currentSlideIndex:0,
        };
    }

    increment = () => {
        const slideIndex = this.state.currentSlideIndex + 1;
        this.setState({currentSlideIndex: slideIndex,});
    }


    render(){
        return(<div>I am on slide {this.state.currentSlideIndex}</div>)
    }
}
