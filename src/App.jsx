import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ProductCard } from './components/ProductCard/ProductCard';
import electricSkates from './db';
import RouterPaths from './Routes/Router';


function App() {
  return (
    <>
      <RouterPaths />
    </>

  );
}


export default App;
