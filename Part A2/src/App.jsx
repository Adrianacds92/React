import React from 'react';
import './index.css';
import { FaUserAlt } from 'react-icons/fa';

function App() {
  return (
    <div>
      <header className='titlle'>
        <div className='quadrado'></div>
      <p className='button'><span className='btn1'>BTN1</span></p>
      <p className='btn2'>BTN2</p>
      <p className='btn3'>BTN3</p>
      <p className='btn4'>BTN4</p>
      </header>
      <div className='retangulo'> <span className='icon'><FaUserAlt /></span></div>
      <div className='circulo'></div>
    </div>
  );
}

export default App;
