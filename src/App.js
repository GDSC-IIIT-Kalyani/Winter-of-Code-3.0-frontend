import './App.css';
// import NavBar from './components/navBar/navBar.js';
import Timeline from './components/timeline/timeline';
import About from './components/about/about.js';
import Organisations from './components/organisations/organisations';
import Projects from './components/projects/projects';
import background from './assets/background.jpg';
import Sponsor from './components/sponsors/sponsor.js';
import Footer from './components/footer/footer';
import Faq from './components/faq/faq';
import WelcomePage from './components/welcomePage/welcomePage';

function App() {
  return (
    <div className="App">
        {/* <img className="background" src={background} alt="background"></img> */}
        <WelcomePage />
        <About />
        <Timeline />
        <Organisations />
        <Projects />
        <Sponsor/>
        {/* <Faq /> */}
        {/* <Footer /> */}
    </div>
  );
}
export default App;