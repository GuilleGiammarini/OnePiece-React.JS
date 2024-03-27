import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Main from './Main';

export default function Home() {
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <video autoPlay muted loop id="background-video" style={{ position: 'fixed', top: 0, left: 0, minWidth: '100%', minHeight: '100%', zIndex: -1 }}>
        <source src="one-piece-live.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Routes>
        <Route exact path="/" element={
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
            <img src="logo.svg" className="App-logo" alt="logo" style={{ height: '40vmin', pointerEvents: 'none', marginBottom: '20px' }} />
            <p style={{ fontSize: 'calc(10px + 2vmin)', color: 'white', fontWeight: 'bold' }}>Bienvenido a la Web de One Piece</p>
            <Link to="/main" className="App-link" style={{ color: '#61dafb' }}><img src="1.png" alt="Imagen 1" /></Link>
          </div>
        } />
      </Routes>
    </div>
  );
}