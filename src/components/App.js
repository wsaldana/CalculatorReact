/* eslint-disable react/jsx-filename-extension */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import Interface from './Interface';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stack: [],
      number: [],
      display: 0,
    };
    this.pressedButton = this.pressedButton.bind(this);
  }

  pressedButton(value) {
    const numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
    const symbols = ['%', '/', 'x', '+', '-'];
    const _number = this.state.number;
    const _stack = this.state.stack;

    if (numeric.includes(value)) {
      if (_number.length < 9 && !(value === '.' && _number.includes('.'))) {
        _number.push(value);
        this.setState({ stack: _stack, number: _number, display: _number.join('') });
      }
    } else if (symbols.includes(value) && _number !== '') {
      if (_number.length > 0) {
        _stack.push(+(_number.join('')));
      }
      if (_stack.length > 2) {
        const n2 = _stack.pop();
        const op = _stack.pop();
        const n1 = _stack.pop();
        const n = this.calc(n2, op, n1);
        _stack.push(n);
      }
      _stack.push(value);
      this.setState({ stack: _stack, number: [], display: _stack[0] });
    } else if (value === '=') {
      const n2 = +(_number.join(''));
      const op = _stack.pop();
      const n1 = _stack.pop();
      const n = this.calc(n2, op, n1);
      _stack.push(n);
      this.setState({ stack: _stack, number: [], display: _stack[0] });
    } else if (value === '+/-') {
      if (_number.length > 0) {
        _stack.push(+(_number.join('')));
      }
      const n = this.calc(_stack.pop(), 'x', -1);
      _stack.push(n);
      this.setState({ stack: _stack, number: [], display: _stack[0] });
    } else if (value === 'ce') {
      this.setState({ number: [], display: ' ' });
    } else if (value === 'c') {
      this.setState({ stack: [], number: [], display: 0 });
    }
  }

  calc(n2, op, n1) {
    let n = 0;
    if (op === '+') {
      n = n1 + n2;
    } else if (op === '-') {
      n = n1 - n2;
    } else if (op === 'x') {
      n = n1 * n2;
    } else if (op === '/') {
      n = n1 / n2;
      n = +(n.toString().slice(0, 9));
    } else if (op === '%') {
      n = n1 % n2;
    }

    if (n > 999999999) {
      return 'ERROR';
    }

    return n;
  }

  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <br />
        <Interface
          value={this.state.display}
          pressedButton={this.pressedButton}
        />
      </div>
    );
  }
}
