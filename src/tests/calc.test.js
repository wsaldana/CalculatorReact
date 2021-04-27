/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import App from '../components/App';
import { calc } from '../components/App';

describe('App', () => {
  beforeAll(() => {
    render(<App />);
  });

  it('Todo numero mayor a 999999999 deberia dar error', () => {
    expect(calc(999999999, '+', 0.01)).toHaveLastReturnedWith('ERROR');
  });

  it('Suma de enteros debe de dar un entero', () => {
    expect(calc(10, '+', 11)).toHaveLastReturnedWith('21');
  });

  it('Operaciones ente enteros y decimales deberia resultar en decimal', () => {
    expect(calc(50, '*', 1.5)).toHaveLastReturnedWith('75.0');
  });

  it('Divisiones periodicas deberian truncarse', () => {
    expect(calc(1, '/', 3)).toHaveLastReturnedWith('0.3333333');
  });

  it('Operacion modulo debe de resultar un entero', () => {
    expect(calc(12, '%', 3)).toHaveLastReturnedWith('0');
  });

  it('Leyes de signos se respetan', () => {
    expect(calc(-5, '*', 5)).toHaveLastReturnedWith('-25');
  });

  it('El negativo cuenta como un digito', () => {
    expect(calc(999999999, '*', -1)).toHaveLastReturnedWith('ERROR');
  });

  it('El decimal cuenta como un digito', () => {
    expect(calc(999999999, '/', 10)).toHaveLastReturnedWith('ERROR');
  });

  afterAll(cleanup);
});
