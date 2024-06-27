import React, { Component } from 'react';
import Character from './components/character';
import Navbar from './components/Nav';


function App() {
  return (
    <div className="App">
      <header class="Nav">
        <Navbar></Navbar>        
      </header>
      <body>
        <Character></Character>
      </body>
    </div>
  );
}

export default App;
