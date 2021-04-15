import React, { Component } from 'react'

export default class Key extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <button className="key" onClick={()=>{this.props.pressedButton(this.props.value)}}>
                <p>{this.props.value}</p>
            </button>
        )
    }
}
