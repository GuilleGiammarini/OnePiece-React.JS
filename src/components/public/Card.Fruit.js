import React from 'react';
import { Link } from 'react-router-dom';

const CardFruit = ({ fruta }) => {
  if (!fruta) {
    return null; 
  }

  const mostrarImagen = (filename) => {
    if (filename && filename.endsWith('.png')) {
      return (
        <img style={{ display: 'block', margin: 'auto', maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} src={filename} alt="imagen"/>
      );
    }
    return <img style={{ display: 'block', margin: 'auto', maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} src="nof.png" alt="imagen"/>
  };

  return (
    <div className="col">
      <div className="card shadow-sm my-card position-relative" style={{ width: '18rem', backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
        <div className="text-center">
          {mostrarImagen(fruta.filename)}
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '10px', borderTop: '1px solid #dee2e6' }}>
            <h3 className="mb-0 text-center text-dark">{fruta.name}</h3>
            <h5 className="mb-0 text-center text-dark">{fruta.type}</h5>
          </div>
        </div>
        <div className="position-absolute top-0 end-0 m-2">
          <div className="dropdown">
            <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id={`dropdownMenuButton-${fruta.id}`} data-bs-toggle="dropdown" aria-expanded="false">
              MÁS
            </button>
            <ul className="dropdown-menu dropdown-menu-lg" aria-labelledby={`dropdownMenuButton-${fruta.id}`} style={{ minWidth: '300px' }}>
              <li><p className="dropdown-item-text">{fruta.description}</p></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFruit;