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
  let displayText = '1234-5';
    expect(screen.queryByText(displayText)).toBeFalsy();
  render(<CalculatorDisplay TallyValue={'0'} DisplayValue={displayValue} LastOperand={lastOperand} DisplayText={displayText}/>);
  expect(screen.queryByText(displayText)).toBeTruthy();
});