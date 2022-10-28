import './App.css';
import NavBar from './components/navBar/navBar.js';
import About from './components/about/about.js';

function App() {
  return (
    <div className="App" style={{position: "relative" }}>
      <div className="background" style={{position:"absolute"}}>
        <NavBar />
        <About />
      </div>
    </div>
  );
}

export default App;
