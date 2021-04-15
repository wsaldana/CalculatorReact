/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Key from './Key';

export default class Interface extends Component {
  render() {
    const btns = ['%', 'ce', 'c', '/', '1', '2', '3', 'x', '4', '5', '6', '+', '7', '8', '9', '-', '+/-', '0', '.', '='];

    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="calculator">

        <div className="screen">
          <textarea value={this.props.value} />
        </div>

        <div className="keyboard">
          {
                        // eslint-disable-next-line max-len
                        btns.map((btn) => <Key value={btn} pressedButton={this.props.pressedButton} />)
                    }
        </div>

      </div>
    );
  }
}
