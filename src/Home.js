import './Home.css';
import Character from './components/character';
import Navbar from './components/Nav';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>        
      </header>
      <body>
        <Character></Character>
      </body>
    </div>
  );
}

export default App;
