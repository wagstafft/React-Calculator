import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from './Calculator';

beforeEach(() => {
  render(<Calculator />);
});

afterEach(() => {
});

function clickCalcButton(searchText: string) {
  let element = screen.queryAllByText(searchText).length === 1 ? screen.queryByText(searchText) : screen.queryAllByText(searchText)[1];
  if (element) {
    fireEvent.click(element);
  }
}

function clickSeriesOfButtons(text: string) {
  for (let char of text) {
    clickCalcButton(char);
  }
}

test('DisplayValueConcatination', () => {
  // Make sure we don't somehow already have this value
  expect(screen.queryByText('123456789')).toBeFalsy();

  // Click each button
  clickSeriesOfButtons('1234567890')

  // Check final value
  expect(screen.queryByText('1234567890')).toBeTruthy();
});

test('InitialCalculatorZeroButtonDoesNothing', () => {
  // Don't want 0 button being clicked to concatinate anything when the display value is 0
  expect(screen.queryByText('00')).toBeFalsy();
  fireEvent.click(screen.queryAllByText('0')[1]);
  expect(screen.queryByText('00')).toBeFalsy();
});

test('adding two numbers', () => {
  expect(screen.queryByText('111')).toBeFalsy();
  expect(screen.queryByText('222')).toBeFalsy();
  clickSeriesOfButtons('111')
  expect(screen.queryByText('111')).toBeTruthy();
  expect(screen.queryByText('222')).toBeFalsy();
  clickSeriesOfButtons('+111=');
  expect(screen.queryByText('222')).toBeTruthy();
});

test('subtracting two numbers', () => {
  expect(screen.queryByText('246')).toBeFalsy();
  expect(screen.queryByText('123')).toBeFalsy();
  clickSeriesOfButtons('246');
  expect(screen.queryByText('246')).toBeTruthy();
  expect(screen.queryByText('123')).toBeFalsy();
  clickSeriesOfButtons('-123=');
  expect(screen.queryByText('123')).toBeTruthy();
});

test('clear input', () => {
  expect(screen.queryByText('123')).toBeFalsy();
  clickSeriesOfButtons('123');
  expect(screen.queryByText('123')).toBeTruthy();
  clickCalcButton('X');
  expect(screen.queryByText('123')).toBeFalsy();
});

test('test displayTextString', () => {
  expect(screen.queryByText('123+123')).toBeFalsy();
  clickSeriesOfButtons('123+123');
  expect(screen.queryByText('123+123')).toBeTruthy();
});

test('display negative number', () => {
  expect(screen.queryByText('-123')).toBeFalsy();
  clickSeriesOfButtons('-123=');
  expect(screen.queryByText('-123')).toBeTruthy();
});