import React from 'react';
import CardEpisode from './Card.Episode';

const CardsEpisodes = ({ episodios }) => {
  const cardsList = episodios && episodios.map((e) => <CardEpisode episodio={e} key={e.id} />);

  return (
    <div className="album py-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
      <div className="container">
        {cardsList}
      </div>
    </div>
  );
};

export default CardsEpisodes;