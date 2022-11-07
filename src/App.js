import "./App.css";
import { BrowserRouter as Router, Routes, Route, /* Link */ } from "react-router-dom";
import StudentDetails from "./pages/StudentDetails/StudentDetails";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/studentApplication" element={<StudentDetails />} />
      </Routes>
    </Router>
  );
}
export default App;
