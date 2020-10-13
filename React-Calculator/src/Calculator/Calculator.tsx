import React, { FC, ChangeEvent, FormEvent, useState } from 'react';
import logo from './logo.svg';
import CalcButton from '../CalculatorButton/CalcButton';
import CalcDisplay from '../CalculatorDisplay/CalculatorDisplay';
import '../App/App.css';
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

        let changedTallyValue = tallyValue

        if (lastOperand === '+') {
            changedTallyValue += +displayValue;
            setTallyValue(changedTallyValue);
        } else if (lastOperand === '-') {
            changedTallyValue -= +displayValue;
            setTallyValue(changedTallyValue);
        }

        setDisplayValue(changedTallyValue.toString());
        setLastOperand('');
    }

    function clickedOperand(operand: string): void {
        setLastOperand(operand);
        setTallyValue(+displayValue);
        setDisplayValue('0');
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

    return (
        <Container className="App">
            <Row>
                <CalcDisplay DisplayValue={displayValue} LastOperand={lastOperand}/>
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
            <Row>
                <Col>
                </Col>
            </Row>
        </Container>
    );
}