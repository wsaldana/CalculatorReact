import React, { Component } from 'react'
import Key from './Key';

export default class Interface extends Component {

    render() {

        const btns = ['%','ce','c','/','1','2','3','x','4','5','6','+','7','8','9','-','+/-','0','.','='];

        return (
            <div className="calculator">

                <div className="screen">
                    <textarea value={this.props.value} />
                </div>

                <div className="keyboard">
                    {
                        btns.map((btn) => <Key value={btn}/>)
                    }
                </div>
                
            </div>
        )
    }
}