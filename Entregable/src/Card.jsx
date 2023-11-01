
import React from 'react'

const Card = ({nombre, animal}) => {
  return (
    <div className="card">
      <h2>ANIMAL FAVORITO</h2>
      <p>Nombre: {nombre}</p>
      <p>Animal Favorito: {animal}</p>
    </div>
  );
}

export default Card;
