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
    previousDisplayValue: number
};

export default function Calculator() {
    const [state, setState] = useState<CalculatorState>({
        displayValue: '0',
        lastOperand: '',
        previousDisplayValue: 0
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
            previousDisplayValue: 0
        });
    }

    function clickedEqual(): void {
        if (state.lastOperand === '') {
            return;
        }

        let changedState: CalculatorState = {
            displayValue: state.displayValue,
            lastOperand: state.lastOperand,
            previousDisplayValue: state.previousDisplayValue
        };

        let changedDisplayValue = state.previousDisplayValue

        if (state.lastOperand === '+') {
            changedDisplayValue += +state.displayValue;
        } else if (state.lastOperand === '-') {
            changedDisplayValue -= +state.displayValue;
        }

        changedState.previousDisplayValue = 0;
        changedState.displayValue = changedDisplayValue.toString();
        changedState.lastOperand = '';
        setState(changedState);
    }

    function changeDisplayValue(text: string): void {
        setState({
            displayValue: text,
            previousDisplayValue: state.previousDisplayValue,
            lastOperand: state.lastOperand
        });
    }

    function clickedOperand(operand: string): void {
        let changedState: CalculatorState = {
            displayValue: state.displayValue,
            lastOperand: state.lastOperand,
            previousDisplayValue: state.previousDisplayValue
        };

        if (state.lastOperand === '') {
            changedState.previousDisplayValue = +state.displayValue;
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
            previousDisplayValue: state.previousDisplayValue
        };

        if (event.key === '0') {
            changedState.displayValue = clickedNum('0');
            setState(changedState);
        } else if (+event.key) {
            changedState.displayValue = clickedNum(event.key);
            setState(changedState);
            // Handle backspace and del
        } else if (event.keyCode === 8 || event.keyCode === 46) {
            clear();
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
        window.addEventListener('keydown', handleKeyPressed);
        return () => {
            window.removeEventListener('keydown', handleKeyPressed);
        }
    });

    return (
        <Container fluid={false} className="calculator container">
            <Row>
                <Col xs={{ span: 5, offset: 4 }} className="calculator col">
                    <CalcDisplay displayValue={state.displayValue} lastOperand={state.lastOperand} previousDisplayValue={state.previousDisplayValue.toString()} />
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