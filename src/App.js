import './App.css';
import NavBar from './components/navBar/navBar.js';
import Timeline from './components/timeline/timeline';
import background from './assets/background.jpg';

function App() {
  return (
    <div className="App">
        <img className="background" src={background}></img>
        <NavBar />
        <Timeline />
    </div>
  );
}
export default App;
