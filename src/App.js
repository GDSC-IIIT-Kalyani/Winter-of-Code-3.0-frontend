import './App.css';
import NavBar from './components/navBar/navBar.js';
import background from './assets/background.jpg';

function App() {
  return (
    <div className="App">
        <img className="background" src={background}></img>
        <NavBar />
    </div>
  );
}
export default App;
