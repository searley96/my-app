import logo from "./logo.svg";
import "./App.css";
import About from "./components/AboutPage";
import Contact from "./components/Contact/ContactPage";
import Navbar from "./components/Navbar";
import Projects from "./components/ProjectsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;
