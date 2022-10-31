import './App.css';
import NavBar from './components/navBar/navBar.js';
import Timeline from './components/timeline/timeline';
import About from './components/about/about.js';
import background from './assets/background.jpg';
import Sponsor from './components/sponsors/sponsor.js';
import asset from './assets/sponsors-bg-image.png';

function App() {
  return (
    <div className="App">
        <img className="background" src={background} alt="background"></img>
        <NavBar />
        <About />
        <Timeline />
        <img className="background" src={asset} alt="background"></img>
        <Sponsor/>
    </div>
  );
}
export default App;
