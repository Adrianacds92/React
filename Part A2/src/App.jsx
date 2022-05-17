import React from 'react';
import './index.css';
import { FaUserAlt } from 'react-icons/fa';

function App() {
  return (
    <div>
      <header className='title'>
        <div className='area'></div>
      <p className='button'><span className='btn1'>BTN1</span></p>
      <p className='btn2'>BTN2</p>
      <p className='btn3'>BTN3</p>
      <p className='btn4'>BTN4</p>
      </header>
      <div className='area-header'> <span className='icon'><FaUserAlt /></span></div>
      <div className='round'></div>
    </div>
  );
}

export default App;
