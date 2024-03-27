import React from 'react';
import CardFruit from './Card.Fruit';

const CardsFruits = ({ frutas }) => {
  const cardsList = frutas && frutas.map((fruta) => <CardFruit fruta={fruta} key={fruta.id} />);

  return (
    <div className="album py-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {cardsList}
        </div>
      </div>
    </div>
  );
};

export default CardsFruits;