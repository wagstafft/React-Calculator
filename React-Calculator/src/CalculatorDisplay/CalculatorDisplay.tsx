import React from 'react';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './CalculatorDisplay.css';

interface CalculatorDisplayProps {
    displayValue: string;
    lastOperand: string;
    previousDisplayValue: string;
}

function getDisplayString(previousDisplayValue: string, lastOperand: string, displayValue: string) {
    let displayString = `${lastOperand ? previousDisplayValue : ''}`;
    displayString += `${lastOperand ? lastOperand : ''}`;
    displayString += `${displayValue}`;
    return displayString;
}

function CalculatorDisplay(props: CalculatorDisplayProps) {
    return (
        <div className="calculator-display">
            {getDisplayString(props.previousDisplayValue, props.lastOperand, props.displayValue)}
        </div>
    )
}

export default CalculatorDisplay;
