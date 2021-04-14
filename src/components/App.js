import React, { Component } from 'react'
import '../style/style.scss';
import Key from './Key';
import Interface from './Interface';

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Calculator</h1>
                <br/>
                <Interface 
                    value={123456789}
                />
            </div>
        )
    }
}
