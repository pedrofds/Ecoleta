import React, { useState } from 'react';
import './App.css';
import Header from './_Header';

/*
Componente
Propriedade
Estado e Imutabilidade
*/

export default function () {
  const [counter, setCounter] = useState(0);// Conceito Estado e Imutabilidade // [valor do estado, função para atualizar o valor do estado]

  function handleButtonClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header title={`Contador ${counter}`}/>

      <h1>{counter}</h1>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>
  );
}
//export default App;