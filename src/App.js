import './App.css';
import NavBar from './components/navBar/navBar.js';
import Timeline from './components/timeline/timeline';
import About from './components/about/about.js';
import background from './assets/background.jpg';

function App() {
  return (
    <div className="App">
        <img className="background" src={background} alt="background"></img>
        <NavBar />
        <About />
        <Timeline />
    </div>
  );
}
export default App;
