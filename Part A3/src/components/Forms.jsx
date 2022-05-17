import React from "react";

function Forms() {
  return (
    <section className="forms">
        <div className="inputs">
            <input type="text" placeholder="Descrição" className="description"/>
            <input type="date" placeholder="Data" className="date"/>
            <input type="text" placeholder="Local" className="local"/>
        </div>
        <div className="btn">
            <button type="submit">Adicionar</button>
            <button type="submit" className="clear">Limpar</button>
        </div>
    </section>
  );
}

export default Forms;