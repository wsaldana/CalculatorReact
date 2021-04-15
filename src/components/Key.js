import React, { Component } from 'react'

export default class Key extends Component {

    constructor() {
        super();
    }

    render() {
        const numeric = ['1','2','3','4','5','6','7','8','9','0','.','+/-'];
        const symbols = ['%','/','x','+','-','ce','c'];
        return (
            <button 
                className={
                    numeric.includes(this.props.value) ? "btn btn-light" :
                    symbols.includes(this.props.value) ? "btn btn-info" :
                    "btn btn-success"
                }
                onClick={()=>{this.props.pressedButton(this.props.value)}} 
            >
                <p>{this.props.value}</p>
            </button>
        )
    }
}
