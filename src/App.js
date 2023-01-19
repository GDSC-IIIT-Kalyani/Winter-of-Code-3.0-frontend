import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projectspage from "./pages/allProjects/ProjectsPage.js";
import NavBar from "./components/navBar/navBar";
import About from "./components/about/about";
import Timeline from "./components/timeline/timeline";
import Organisations from "./components/organisations/organisations";
import Sponsor from "./components/sponsors/sponsor";
import Faq from "./components/faq/faq";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route
          exact
          path="/projects"
          element={<Projectspage pageTop={true} />}
        />
        <Route exact path="/about" element={<About pageTop={true} />} />
        <Route exact path="/timeline" element={<Timeline pageTop={true} />} />
        <Route
          exact
          path="/organisations"
          element={<Organisations pageTop={true} />}
        />
        <Route exact path="/sponsors" element={<Sponsor pageTop={true} />} />
        <Route exact path="/faqs" element={<Faq pageTop={true} />} />
      </Routes>
    </Router>
  );
}

export default App;
