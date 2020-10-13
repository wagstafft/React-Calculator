import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface CalculatorDisplayProps {
    DisplayValue: string;
    LastOperand: string;
}

function CalculatorDisplay(props: CalculatorDisplayProps) {
    return (
        <div>
            <Col>
                {props.DisplayValue}
            </Col>
            <Col>
                {props.LastOperand}
            </Col>
        </div>
    )
}

export default CalculatorDisplay;
