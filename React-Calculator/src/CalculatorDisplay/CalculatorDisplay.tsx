import React from 'react';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './CalculatorDisplay.css';

interface CalculatorDisplayProps {
    displayValue: string;
    lastOperand: string;
    tallyValue: string;
}

function getDisplayString(tallyValue: string, lastOperand: string, displayValue: string) {
    let displayString = `${lastOperand ? tallyValue : ''}`;
    displayString += `${lastOperand ? lastOperand : ''}`;
    displayString += `${displayValue}`;
    return displayString;
}

function CalculatorDisplay(props: CalculatorDisplayProps) {
    return (
        <div className="calculator-display">
            {getDisplayString(props.tallyValue, props.lastOperand, props.displayValue)}
        </div>
    )
}

export default CalculatorDisplay;
