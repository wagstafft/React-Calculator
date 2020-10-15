import React from 'react';
import { render, screen } from '@testing-library/react';
import CalculatorDisplay from './CalculatorDisplay';


beforeEach(() => {

});

afterEach(() => {
});

test('renders', () => {
  let displayValue = '1234';
  let lastOperand = '-';
  let tallyValue = '0';
    expect(screen.queryByText('0-1234')).toBeFalsy();
  render(<CalculatorDisplay tallyValue={tallyValue} displayValue={displayValue} lastOperand={lastOperand}/>);
  expect(screen.queryByText('0-1234')).toBeTruthy();
});