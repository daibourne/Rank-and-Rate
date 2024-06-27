import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Vote from './pages/Vote';
import Ranking from './pages/Ranking';
import AddCharacter from './pages/AddCharacter';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Vote' element={<Vote/>}/>
        <Route path='/Ranking' element={<Ranking/>}/>
        <Route path='/AddCharacter' element={<AddCharacter/>}/>
      </Routes>
    </Router>
  )
}

export default App;
