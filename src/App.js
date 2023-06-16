import "./App.css";
import About from "./components/About/AboutPage";
import Contact from "./components/Contact/ContactPage";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects/ProjectsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <main>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
     
    </main>
    
    </>
  );
}

export default App;
