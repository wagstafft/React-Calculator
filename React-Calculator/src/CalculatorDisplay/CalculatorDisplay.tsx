import React from 'react';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './CalculatorDisplay.css';

interface CalculatorDisplayProps {
    DisplayValue: string;
    LastOperand: string;
    TallyValue: string;
    DisplayText: string;
}

function CalculatorDisplay(props: CalculatorDisplayProps) {
    // let tallyValue = props.TallyValue && props.TallyValue !== '0' ? <Col> {props.TallyValue} </Col> : '';
    // let lastOperand = props.LastOperand ? <Col> {props.LastOperand} </Col> : '';
    return (
        <div className="CalculatorDisplay">
            {props.DisplayText}
            {/* {tallyValue}
            <Col>
                {props.DisplayValue}
            </Col>
            {lastOperand} */}
        </div>
    )
}

export default CalculatorDisplay;
