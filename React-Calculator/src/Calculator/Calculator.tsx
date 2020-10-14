import React, { useState, useEffect } from 'react';
import CalcButton from '../CalculatorButton/CalculatorButton';
import CalcDisplay from '../CalculatorDisplay/CalculatorDisplay';
import '../App/App.css';
import './Calculator.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

interface ICalculatorState {
    displayValue: string,
    lastOperand: string,
    tallyValue: number
};

export default function Calculator() {
    const [state, setState] = useState<ICalculatorState>({
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

        let changedState: ICalculatorState = {
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
        let changedState: ICalculatorState = {
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
        let changedState: ICalculatorState = {
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

    function getDisplayString() {
        let displayString = `${state.lastOperand ? state.tallyValue : ''}`;
        displayString += `${state.lastOperand ? state.lastOperand : ''}`;
        displayString += `${state.displayValue}`;
        return displayString;
    }

    return (
        <Container fluid={false} className="Calculator">
            <Row>
                <Col xs={{ span: 5, offset: 4 }}>
                    Testing automatic deployment
                    <CalcDisplay DisplayText={getDisplayString()} DisplayValue={state.displayValue} LastOperand={state.lastOperand} TallyValue={state.tallyValue.toString()} />
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 5, offset: 4 }}>
                    <CalcButton Text='7' HandleClick={() => changeDisplayValue(clickedNum('7'))} />
                    <CalcButton Text='8' HandleClick={() => changeDisplayValue(clickedNum('8'))} />
                    <CalcButton Text='9' HandleClick={() => changeDisplayValue(clickedNum('9'))} />
                    <CalcButton Text='Clr' HandleClick={() => clear()} />
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 5, offset: 4 }}>
                    <CalcButton Text='4' HandleClick={() => changeDisplayValue(clickedNum('4'))} />
                    <CalcButton Text='5' HandleClick={() => changeDisplayValue(clickedNum('5'))} />
                    <CalcButton Text='6' HandleClick={() => changeDisplayValue(clickedNum('6'))} />
                    <CalcButton Text='-' HandleClick={() => clickedOperand('-')} />
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 5, offset: 4 }}>
                    <CalcButton Text='1' HandleClick={() => changeDisplayValue(clickedNum('1'))} />
                    <CalcButton Text='2' HandleClick={() => changeDisplayValue(clickedNum('2'))} />
                    <CalcButton Text='3' HandleClick={() => changeDisplayValue(clickedNum('3'))} />
                    <CalcButton Text='+' HandleClick={() => clickedOperand('+')} />
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 5, offset: 4 }}>
                    <CalcButton Text='0' HandleClick={() => changeDisplayValue(clickedNum('0'))} />
                    <CalcButton Text='=' HandleClick={() => clickedEqual()} />
                </Col>
            </Row>
        </Container >
    );
}