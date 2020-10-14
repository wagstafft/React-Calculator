import React from 'react';
import Button from 'react-bootstrap/Button';
import './CalculatorButton.css';

interface CalculatorButtonProps {
    Text: string;
    HandleClick: any;
}

function CalculatorButton(props: CalculatorButtonProps) {
    return (
        <Button className="calculatorButton btn btn-lg btn-secondary" onClick={props.HandleClick}> {props.Text}</Button>
    )
}

export default CalculatorButton;
