import React from 'react';
import './index.css';
// import { FaUserAlt } from 'react-icons/fa';
import Header from "./components/Header";
function App() {
  return (
    <>
    <Header />
   
    <section className="forms">
        <div className="inputs">
            <input type="text" placeholder="Descrição" className="description"/>
            <input type="date" placeholder="Data" className="date"/>
            <input type="text" placeholder="Local" className="local"/>
        </div>
        <div className="buttons">
            <button type="submit">Adicionar</button>
            <button type="submit" className="clear">Limpar</button>
        </div>
    </section>
    <section className="card">
        <div>
            <h1>24.03.2022</h1>
            <h2>Fortaleza-CE</h2>
            <span>Encontro com o Alpha</span>
        </div>
        <div>
            <h1>24.03.2022</h1>
            <h2>Fortaleza-CE</h2>
            <span>Encontro com o Alpha</span>
        </div>
        <div>
            <h1>24.03.2022</h1>
            <h2>Fortaleza-CE</h2>
            <span>Encontro com o Alpha</span>
        </div>
        
        
    </section>
    </>
    // <div>
    //   <header className='titlle'>
    //     <div className='quadrado'></div>
    //   <p className='button'><span className='btn1'>BTN1</span></p>
    //   <p className='btn2'>BTN2</p>
    //   <p className='btn3'>BTN3</p>
    //   <p className='btn4'>BTN4</p>
    //   </header>
    //   <div className='retangulo'> <span className='icon'><FaUserAlt /></span></div>
    //   <div className='circulo'></div>

    // </div>
  );
}

export default App;
