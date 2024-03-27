import React from 'react';

const CardEpisode = ({ episodio }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: '1000px', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
      <div className="row g-0">
        <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
          <h5>Episode {episodio.id} </h5>
          <img src="1.png" className="img-fluid rounded-start" />
          <p>{episodio.arc?.title}</p>
          <p>SAGA: {episodio.saga?.title}</p>
          <p>{episodio.release_date}</p>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{episodio.title}</h5>
            <p className="card-text">{episodio.description}</p>
            <p className="card-text"><small className="text-muted">One Piece</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEpisode;