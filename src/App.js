import "./App.css";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Home from "./pages/Home/Home";
import Projectspage from "./pages/allProjects/ProjectsPage.js";
import { clarity } from "clarity-js";

function App() {
  clarity();
  clarity("track", "pageview");
  clarity("track", "click");
  clarity("track", "form");
  clarity("track", "scroll");
  clarity("track", "input");
  clarity("track", "change");
  clarity("track", "error");
  clarity("track", "custom", "customEvent");
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projectspage />} />
      </Routes>
    </Router>
  );
}

clarity("track", "click");

export default App;
