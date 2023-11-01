import React, { useState } from 'react';
import Card from './Card'

function App() {
  
  const [nombre, setNombre] = useState('')
  const [animal, setAnimal] = useState('')
  const [error, setError] = useState('');
  const [dato, setDato] = useState(null);

  const handleSumbit = (event) => {
    event.preventDefault()
    if (nombre.trim().length < 3 || animal.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      setDato(null);
    } else {
      setError('');
      setDato({ nombre, animal });
    }
 
  }

  return (
    <div className="App">
      <h1>Animales</h1>
      <form onSubmit={handleSumbit}>
                <div>
                <label>Ingresa tu nombre: </label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                </div>
                <div>
                <label>Ingresa tu animal favorito: </label>
                <input type="text" value={animal} onChange={(e) => setAnimal(e.target.value)}/>
                </div>
                <button type="submit">Enviar</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {dato && <Card nombre={dato.nombre} animal={dato.animal} />}
    </div>
  );
}

export default App;
