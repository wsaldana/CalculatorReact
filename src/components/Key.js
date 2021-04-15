/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Key extends Component {
  render() {
    const numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '+/-'];
    const symbols = ['%', '/', 'x', '+', '-', 'ce', 'c'];
    return (
      // eslint-disable-next-line react/button-has-type
      <button
        className={
                    // eslint-disable-next-line react/destructuring-assignment
                    numeric.includes(this.props.value) ? 'btn btn-light'
                      // eslint-disable-next-line react/destructuring-assignment
                      : symbols.includes(this.props.value) ? 'btn btn-info'
                        : 'btn btn-success'
                }
        // eslint-disable-next-line react/destructuring-assignment
        onClick={() => { this.props.pressedButton(this.props.value); }}
      >
        <p>{this.props.value}</p>
      </button>
    );
  }
}
