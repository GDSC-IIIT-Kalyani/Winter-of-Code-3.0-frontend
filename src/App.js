import './App.css';
import NavBar from './components/navBar/navBar.js';
import Timeline from './components/timeline/timeline';
import About from './components/about/about.js';
import Organisations from './components/organisations/organisations';
import background from './assets/background.jpg';

function App() {
  return (
    <div className="App">
        <img className="background" src={background} alt="background"></img>
        <NavBar />
        <About />
        <Timeline />
        <Organisations />
    </div>
  );
}
export default App;
