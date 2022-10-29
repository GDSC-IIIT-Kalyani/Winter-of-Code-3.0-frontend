import './App.css';
import NavBar from './components/navBar/navBar.js';
import About from './components/about/about.js';
import background from './assets/background.jpg';

function App() {
  return (
    <div className="App">
        <img className="background" src={background}></img>
        <NavBar />
        <About />
    </div>
  );
}
export default App;
