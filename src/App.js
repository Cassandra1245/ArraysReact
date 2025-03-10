import React, { useState } from 'react';
import './App.css';

function App() {

  const [array, setArray] = useState([
    { Matricula: '1425BTY', Marca: 'Peugeot', Modelo: '3008', Tipo: 'híbrido' },
    { Matricula: '1762MNY', Marca: 'Mercedes', Modelo: 'EQS', Tipo: 'Diesel' },
    { Matricula: '9882TPK', Marca: 'Renault', Modelo: '4 E-Tech', Tipo: 'Eléctrico' },
    { Matricula: '6634TRV', Marca: 'Volswagen', Modelo: 'Golf', Tipo: 'Gasolina' },
    { Matricula: '2285RPL', Marca: 'Toyota', Modelo: 'RAV4', Tipo: 'hibrido' },
    { Matricula: '1782PRT', Marca: 'Peugeot', Modelo: '5008', Tipo: 'diesel' }
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Autos:</p>
        <div>
          {array.map((auto, index) => (
            <div key={index} className="StyledTextComponent">
              <p>{auto.Matricula} - {auto.Marca} {auto.Modelo}({auto.Tipo})</p>
            </div>
          ))}
        </div>
      </header >
    </div >
  );
}

export default App;
