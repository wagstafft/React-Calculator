import React from 'react';
import Button from 'react-bootstrap/Button'
interface CalcButtonProps {
    Text: string;
    HandleClick: any;
}

function CalculatorButton(props: CalcButtonProps) {
    return (
        <Button className="btn btn-secondary" onClick={props.HandleClick}> {props.Text}</Button>
    )
}

export default CalculatorButton;
