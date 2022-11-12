import "./App.css";
import { BrowserRouter as Router, Routes, Route, /* Link */ } from "react-router-dom";
import StudentDetails from "./pages/StudentDetails/StudentDetails";
import Home from "./pages/Home/Home";
import Projectspage from "./pages/allProjects/ProjectsPage.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/studentApplication" element={<StudentDetails />} />
        <Route exact path="/projects" element={<Projectspage />} />
      </Routes>
    </Router>
  );
}
export default App;
