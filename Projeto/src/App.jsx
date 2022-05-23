import React from "react";
import './index.css';

import Header from "./components/Header";
import Main from "./components/Main";
import AllList from "./components/AllList";
// import Cadastro from './components/Cadastro';
// import QuadroTarefas from './components/Quadro';

function App() {
  return (
    <>
      <Header />
      <Main />
      <AllList />;
      {/* < Cadastro />
    < QuadroTarefas /> */}
    </>
  );
}

export default App;
