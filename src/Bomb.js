import React, { Component } from 'react';

export default class Bomb extends React.Component{
    constructor(props){
        super();
        this.state = {
          secondsLeft: props.initialCount,
        };
    }

    increment = () => {
        const countDown = this.state.secondsLeft - 1;
        this.setState({secondsLeft: countDown,});
    };
    
    
    render(){
        if (this.state.secondsLeft != 0){
            return(<div>{this.state.secondsLeft} seconds left before I go boom!</div>)
        }
        else{
            return(<div>Boom!</div>)
        }
    }
}
