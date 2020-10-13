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
      <Calculator />
  );
}