import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
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