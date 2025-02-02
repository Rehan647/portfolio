import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Column: Text Content */}
        <div className="col-md-6">
          <h2 className="display-4 fw-bold text-primary">Hi, I am Rehan</h2>
          <h3 className="text-muted mb-4">Software Developer</h3>
          <p className="lead">
            Welcome to my portfolio. I'm a Mobile Solutions Development student at Conestoga College with a passion for crafting innovative web and mobile applications. Explore my projects and see how I bring ideas to life through clean code and creative solutions!
          </p>
          <div className="mt-4">
            <a
              href="https://www.linkedin.com/in/rehan5068"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary me-2"
            >
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
            <a
              href="https://github.com/Rehan647"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark me-2"
            >
              <i className="bi bi-github"></i> GitHub
            </a>
            <a
              href="https://www.youtube.com/@studyhub-so8ws"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-danger"
            >
              <i className="bi bi-youtube"></i> YouTube
            </a>
          </div>
        </div>

        
        <div className="col-md-6 text-center">
          <img
            src="40063371-C0C0-49C5-A895-099A6DC94C8B.jpeg"
            alt="Rehan's Profile"
            className="img-fluid rounded-circle shadow"
            style={{ maxWidth: '300px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;