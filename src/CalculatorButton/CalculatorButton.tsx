import React from 'react';
import Button from 'react-bootstrap/Button';
import './CalculatorButton.css';

interface CalculatorButtonProps {
    text: string;
    handleClick: any;
}

function CalculatorButton(props: CalculatorButtonProps) {
    return (
        <Button className="calculator-button btn btn-lg btn-secondary" onClick={props.handleClick}> {props.text}</Button>
    )
}

export default CalculatorButton;
