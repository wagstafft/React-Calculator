import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CalculatorButton from './CalcButton';


beforeEach(() => {

});

afterEach(() => {
});

test('renders text', () => {
    let displayText = 'Test Text';
    expect(screen.queryByText(displayText)).toBeFalsy();
    render(<CalculatorButton Text={displayText} HandleClick={() => console.log('test')} />);
    expect(screen.queryByText(displayText)).toBeTruthy();
});