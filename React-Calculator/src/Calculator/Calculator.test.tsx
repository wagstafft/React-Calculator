import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App/App';
import CalcButton from '../CalculatorButton/CalcButton';
import Calculator from './Calculator';
import { assert } from 'console';
// let container: any = null;
// let testRenderer: any = null;
// let testInstance: any = null;

// Arrange
// Act
// Assert

beforeEach(() => {
  // container = document.createElement("div");
  // document.body.appendChild(container);
  // testRenderer = TestRenderer.create(<App />);
  // testInstance = testRenderer.root;
});

afterEach(() => {
  // unmountComponentAtNode(container);
  // container.remove();
  // container = null;
});

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

function clickCalcButton(searchText: string) {
  let element = screen.queryByText(searchText);
  if (element) {
    fireEvent.click(element);
  }
}

test('DisplayValueConcatination', () => {
  render(<Calculator />);

  // Make sure we don't somehow already have this value
  expect(screen.queryByText('123456789')).toBeFalsy();

  // Click each button
    
  clickCalcButton('1');
  clickCalcButton('2');
  clickCalcButton('3');
  clickCalcButton('4');
  clickCalcButton('5');
  clickCalcButton('6');
  clickCalcButton('7');
  clickCalcButton('8');
  clickCalcButton('9');
  clickCalcButton('0');

  // Check final value
  expect(screen.queryByText('1234567890')).toBeTruthy();
});

test('InitialCalculatorZeroButtonDoesNothing', () => {
  render(<Calculator />);

  // Don't want 0 button being clicked to concatinate anything when the display value is 0
  expect(screen.queryByText('00')).toBeFalsy();
  fireEvent.click(screen.queryAllByText('0')[1]);
  expect(screen.queryByText('00')).toBeFalsy();
});

