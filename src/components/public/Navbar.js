import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <span className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <Link to="/">
            <img className="App-logo" style={{ maxWidth: '52px', maxHeight: '52px' }} src="onepiece.png" alt="" />
            </Link>
          </span>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/main" className="nav-link px-2 text-white">
                Personajes
              </Link>
            </li>
            <li>
              <Link to="/mainfruit" className="nav-link px-2 text-white">
                Frutas del Diablo
              </Link>
            </li>
            <li>
              <Link to="/mainepisodes" className="nav-link px-2 text-white">
                Episodios
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;