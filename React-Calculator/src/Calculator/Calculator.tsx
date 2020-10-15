import React, { useState, useEffect } from 'react';
import CalcButton from '../CalculatorButton/CalculatorButton';
import CalcDisplay from '../CalculatorDisplay/CalculatorDisplay';
import '../App/App.css';
import './Calculator.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

interface CalculatorState {
    displayValue: string,
    lastOperand: string,
    tallyValue: number
};

export default function Calculator() {
    const [state, setState] = useState<CalculatorState>({
        displayValue: '0',
        lastOperand: '',
        tallyValue: 0
    });

    function clickedNum(num: string): string {
        if (state.displayValue === '0') {
            return num;
        } else {
            return state.displayValue + num;
        }
    }

    function clear(): void {
        setState({
            displayValue: '0',
            lastOperand: '',
            tallyValue: 0
        });
    }

    function clickedEqual(): void {
        if (state.lastOperand === '') {
            return;
        }

        let changedState: CalculatorState = {
            displayValue: state.displayValue,
            lastOperand: state.lastOperand,
            tallyValue: state.tallyValue
        };

        let changedDisplayValue = state.tallyValue

        if (state.lastOperand === '+') {
            changedDisplayValue += +state.displayValue;
        } else if (state.lastOperand === '-') {
            changedDisplayValue -= +state.displayValue;
        }

        changedState.tallyValue = 0;
        changedState.displayValue = changedDisplayValue.toString();
        changedState.lastOperand = '';
        setState(changedState);
    }

    function changeDisplayValue(text: string): void {
        setState({
            displayValue: text,
            tallyValue: state.tallyValue,
            lastOperand: state.lastOperand
        });
    }

    function clickedOperand(operand: string): void {
        let changedState: CalculatorState = {
            displayValue: state.displayValue,
            lastOperand: state.lastOperand,
            tallyValue: state.tallyValue
        };

        if (state.lastOperand === '') {
            changedState.tallyValue = +state.displayValue;
            changedState.displayValue = '0';
        }

        changedState.lastOperand = operand;
        setState(changedState);
    }

    function handleKeyPressed(event: any) {
        event.preventDefault();
        let changedState: CalculatorState = {
            displayValue: state.displayValue,
            lastOperand: state.lastOperand,
            tallyValue: state.tallyValue
        };

        if (event.key === '0') {
            changedState.displayValue = clickedNum('0');
            setState(changedState);
        } else if (+event.key) {
            changedState.displayValue = clickedNum(event.key);
            setState(changedState);
        } else {
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
                default:
                    break;
            }
        }
    }

    useEffect(() => {
        window.addEventListener('keypress', handleKeyPressed);
        return () => {
            window.removeEventListener('keypress', handleKeyPressed);
        }
    });

    return (
        <Container fluid={false} className="calculator container">
            <Row>
                <Col xs={{ span: 5, offset: 4 }} className="calculator col">
                    <CalcDisplay displayValue={state.displayValue} lastOperand={state.lastOperand} tallyValue={state.tallyValue.toString()} />
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 5, offset: 4 }} className="calculator col">
                    <CalcButton text='7' handleClick={() => changeDisplayValue(clickedNum('7'))} />
                    <CalcButton text='8' handleClick={() => changeDisplayValue(clickedNum('8'))} />
                    <CalcButton text='9' handleClick={() => changeDisplayValue(clickedNum('9'))} />
                    <CalcButton text='Clr' handleClick={() => clear()} />
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 5, offset: 4 }} className="calculator col">
                    <CalcButton text='4' handleClick={() => changeDisplayValue(clickedNum('4'))} />
                    <CalcButton text='5' handleClick={() => changeDisplayValue(clickedNum('5'))} />
                    <CalcButton text='6' handleClick={() => changeDisplayValue(clickedNum('6'))} />
                    <CalcButton text='-' handleClick={() => clickedOperand('-')} />
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 5, offset: 4 }} className="calculator col">
                    <CalcButton text='1' handleClick={() => changeDisplayValue(clickedNum('1'))} />
                    <CalcButton text='2' handleClick={() => changeDisplayValue(clickedNum('2'))} />
                    <CalcButton text='3' handleClick={() => changeDisplayValue(clickedNum('3'))} />
                    <CalcButton text='+' handleClick={() => clickedOperand('+')} />
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 5, offset: 4 }} className="calculator col">
                    <CalcButton text='0' handleClick={() => changeDisplayValue(clickedNum('0'))} />
                    <CalcButton text='=' handleClick={() => clickedEqual()} />
                </Col>
            </Row>
        </Container >
    );
}