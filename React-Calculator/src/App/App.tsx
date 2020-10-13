import React, { FC, ChangeEvent, FormEvent, useState } from 'react';
import logo from '../logo.svg';
import Calculator from '../Calculator/Calculator';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
export default function App() {
  return (
    <Jumbotron>
      <Calculator />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
      </ Jumbotron>
  );
}