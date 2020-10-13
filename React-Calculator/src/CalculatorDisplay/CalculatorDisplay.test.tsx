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
  expect(screen.queryByText(displayValue)).toBeFalsy();
  expect(screen.queryByText(lastOperand)).toBeFalsy();
  render(<CalculatorDisplay DisplayValue={displayValue} LastOperand={lastOperand}/>);
  expect(screen.queryByText(displayValue)).toBeTruthy();
  expect(screen.queryByText(lastOperand)).toBeTruthy();
});