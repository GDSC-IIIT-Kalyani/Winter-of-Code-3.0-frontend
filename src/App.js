import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Loader from "./components/loader/loader";

const About = lazy(() => import("./components/about/about"));
const Faq = lazy(() => import("./components/faq/faq"));
const NavBar = lazy(() => import("./components/navBar/navBar"));
const Organisations = lazy(() => import("./components/organisations/organisations"));
const Sponsor = lazy(() => import("./components/sponsors/sponsor"));
const Timeline = lazy(() => import("./components/timeline/timeline"));
const Projectspage = lazy(() => import("./pages/allProjects/ProjectsPage.js"));
const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </Router>
  );
}

export default App;
