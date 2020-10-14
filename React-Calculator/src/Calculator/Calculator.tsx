import React, { useState } from 'react';
import CalcButton from '../CalculatorButton/CalculatorButton';
import CalcDisplay from '../CalculatorDisplay/CalculatorDisplay';
import '../App/App.css';
import './Calculator.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function Calculator() {
    const [displayValue, setDisplayValue] = useState<string>('0');
    const [lastOperand, setLastOperand] = useState<string>('');
    const [tallyValue, setTallyValue] = useState<number>(0);

    function clickedNum(displayNum: string, num: string): string {
        if (displayValue === '0') {
            return num;
        } else {
            return displayNum + num;
        }
    }

    function clear(): void {
        setDisplayValue('0');
        setLastOperand('');
        setTallyValue(0);
    }

    function clickedEqual(): void {
        if (lastOperand === '') {
            return;
        }

        let changedDisplayValue = tallyValue

        if (lastOperand === '+') {
            changedDisplayValue += +displayValue;
        } else if (lastOperand === '-') {
            changedDisplayValue -= +displayValue;
        }

        setTallyValue(0);
        setDisplayValue(changedDisplayValue.toString());
        setLastOperand('');
    }

    function clickedOperand(operand: string): void {
        if (lastOperand === '') {
            setTallyValue(+displayValue);
            setDisplayValue('0');
        }

        setLastOperand(operand);
    }

    document.onkeypress = function (event) {
        //alert(event);
        event = event || window.event;
        console.log(event);
        if (event.key === '0') {
            setDisplayValue(clickedNum(displayValue, '0'));
        }
        if (+event.key) {
            setDisplayValue(clickedNum(displayValue, event.key));
        } else {
            //alert ('not num');
            switch (event.key) {
                case '-':
                    clickedOperand('-');
                    break;
                case '+':
                    clickedOperand('+');
                    break;
                case '=':
                case 'Enter':
                    clickedEqual();
                    break;
            }
        }
    };

    function getDisplayString() {
        return `${tallyValue ? tallyValue : ''}${lastOperand && displayValue ? lastOperand : ''}${displayValue}`;
    }

    return (
        <Container className="Calculator">
            <Row>
                <Col>
                    <CalcDisplay DisplayText={getDisplayString()} DisplayValue={displayValue} LastOperand={lastOperand} TallyValue={tallyValue.toString()} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <CalcButton Text='7' HandleClick={() => setDisplayValue(clickedNum(displayValue, '7'))} />
                    <CalcButton Text='8' HandleClick={() => setDisplayValue(clickedNum(displayValue, '8'))} />
                    <CalcButton Text='9' HandleClick={() => setDisplayValue(clickedNum(displayValue, '9'))} />
                    <CalcButton Text='X' HandleClick={() => clear()} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <CalcButton Text='4' HandleClick={() => setDisplayValue(clickedNum(displayValue, '4'))} />
                    <CalcButton Text='5' HandleClick={() => setDisplayValue(clickedNum(displayValue, '5'))} />
                    <CalcButton Text='6' HandleClick={() => setDisplayValue(clickedNum(displayValue, '6'))} />
                    <CalcButton Text='-' HandleClick={() => clickedOperand('-')} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <CalcButton Text='1' HandleClick={() => setDisplayValue(clickedNum(displayValue, '1'))} />
                    <CalcButton Text='2' HandleClick={() => setDisplayValue(clickedNum(displayValue, '2'))} />
                    <CalcButton Text='3' HandleClick={() => setDisplayValue(clickedNum(displayValue, '3'))} />
                    <CalcButton Text='+' HandleClick={() => clickedOperand('+')} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <CalcButton Text='0' HandleClick={() => setDisplayValue(clickedNum(displayValue, '0'))} />
                    <CalcButton Text='=' HandleClick={() => clickedEqual()} />
                </Col>
            </Row>
        </Container>
    );
}