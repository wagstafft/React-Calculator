import React from 'react';
import { render, screen } from '@testing-library/react';
import CalculatorButton from './CalculatorButton';


beforeEach(() => {

});

afterEach(() => {
});

test('renders text', () => {
    let displayText = 'Test Text';
    expect(screen.queryByText(displayText)).toBeFalsy();
    render(<CalculatorButton text={displayText} handleClick={() => console.log('test')} />);
    expect(screen.queryByText(displayText)).toBeTruthy();
});