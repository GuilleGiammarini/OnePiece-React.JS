import React from 'react';
import './App.css';
import Navbar from './components/public/Navbar';
import Footer from './components/public/Footer';
import Main from './components/public/Main';
import Home from './components/public/Home';
import MainFruits from './components/public/Main.Fruits';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainEpisodes from './components/public/Main.Episodes';

// Componente que incluye Navbar y Footer
const LayoutWithNavbarAndFooter = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

// Componente que no incluye Navbar y Footer
const LayoutWithoutNavbarAndFooter = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <LayoutWithoutNavbarAndFooter>
                <Home />
              </LayoutWithoutNavbarAndFooter>
            }
          />
          <Route
            path="/main"
            element={
              <LayoutWithNavbarAndFooter>
                <Main />
              </LayoutWithNavbarAndFooter>
            }
          />
          <Route
            path="/mainfruit"
            element={
              <LayoutWithNavbarAndFooter>
                <MainFruits />
              </LayoutWithNavbarAndFooter>
            }
          />
          <Route
            path="/mainepisodes"
            element={
              <LayoutWithNavbarAndFooter>
                <MainEpisodes />
              </LayoutWithNavbarAndFooter>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;