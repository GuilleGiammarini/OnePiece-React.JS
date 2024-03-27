import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  const companyName = "Guillermo L.G. ";

  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
        <p className="col-md-4 mb-0 text-black">&copy; {year} {companyName}</p>

        <span className="d-flex align-items-center mb-2 mb-lg-0 text-black text-decoration-none">
          <img className="App-logo" style={{ maxWidth: '52px', maxHeight: '52px' }} src="onepiece.png" alt="" />
        </span>

        <ul className="nav col-md-4 justify-content-end">
          <li>
            <Link to="/main" className="nav-link px-2 text-black">
              Personajes
            </Link>
          </li>
          <li>
            <Link to="/mainfruit" className="nav-link px-2 text-black">
              Frutas del Diablo
            </Link>
          </li>
          <li>
              <Link to="/mainepisodes" className="nav-link px-2 text-black">
                Episodios
              </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
