import logo from './logo.svg';
import './App.css';
import Buttons from './components/Buttons.js';
import ClearButton from './components/ClearButton';
import Screen from './components/Screen';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const[input, setInput] = useState('');

  const agregarInput = (value) =>
  {
    setInput(input + value);
  }

  const calculateResult = () =>
  {
    if( !input || isNaN(input[input.length-1]) )
    {
      setInput('SYNTAX ERROR');
    }
    else
    {
      setInput(evaluate(input));
    }
  }

  return (
    <div className="App">
      <div className='title-container'>
        <h1>FITO'S CALCULATOR</h1>
      </div>
      <div className='calculator-container'>
        <div className='calculator'>
          <div className='calculator-screen'>
            <Screen input={input}/>
          </div>
          <div className='calculator-buttons'>
            <Buttons holdClick={agregarInput}>7</Buttons>
            <Buttons holdClick={agregarInput}>8</Buttons>
            <Buttons holdClick={agregarInput}>9</Buttons>
            <Buttons holdClick={agregarInput}>+</Buttons>

            <Buttons holdClick={agregarInput}>4</Buttons>
            <Buttons holdClick={agregarInput}>5</Buttons>
            <Buttons holdClick={agregarInput}>6</Buttons>
            <Buttons holdClick={agregarInput}>-</Buttons>

            <Buttons holdClick={agregarInput}>1</Buttons>
            <Buttons holdClick={agregarInput}>2</Buttons>
            <Buttons holdClick={agregarInput}>3</Buttons>
            <Buttons holdClick={agregarInput}>*</Buttons>

            <Buttons holdClick={calculateResult}>=</Buttons>
            <Buttons holdClick={agregarInput}>0</Buttons>
            <Buttons holdClick={agregarInput}>.</Buttons>
            <Buttons holdClick={agregarInput}>/</Buttons>
          </div>
          <div className='calculator-clearButton'>
            <ClearButton cleanScreen={() => setInput('')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
