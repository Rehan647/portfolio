// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';

function App() {
  return (
    <Router>
    <div className="App">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  {/* <a className="navbar-brand ms-auto fw-bold" href="#">Portfolio</a>  */}
  <Link className="navbar-brand ms-auto fw-bold fs-4" to="/">Portfolio</Link>  {/* Aligned brand text and made it bold */}
  
  <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link fw-bold fs-5" to="/">Home</Link>  {/* Made text bold */}
      <Link className="nav-item nav-link fw-bold fs-5" to="/about">About</Link>  {/* Made text bold */}
      <Link className="nav-item nav-link fw-bold fs-5" to="/project">Project</Link>  {/* Made text bold */}
    </div>
  </div>
</nav>

  
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
