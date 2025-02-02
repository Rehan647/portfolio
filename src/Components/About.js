import React from 'react'

function About() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row align-items-center gx-4">
                    <div className="col-md-5">
                        <div className="ms-md-2 ms-lg-5"><img className="img-fluid rounded-3" src="D7C528F7-0F96-4689-806B-4CF0BA9F0640.jpeg" /></div>
                    </div>
                    <div className="col-md-6 offset-md-1">
                        <div className="ms-md-2 ms-lg-5">
                            <span className="text-muted">My Story</span>
                            <h2 className="display-5 fw-bold text-primary ">About Me</h2>
                            <p className="lead">Hi, my name is Rehan, and I am a passionate Mobile Solutions Development student at Conestoga College. I specialize in creating user-friendly and innovative applications, with expertise in Java, JavaScript, React, Swift, and SQL. I have a strong foundation in Data Structures and Algorithms and have successfully solved over 150 problems on LeetCode, including DSA and SQL challenges. My goal is to excel in software design and development, contributing to cutting-edge technologies that make a real impact. Let's build the future, one line of code at a time!
                            </p>

                        </div>
                    </div></div></div>

            <div className="container-fluid mt-5 py-4">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 shadow-sm p-4 rounded-3 bg-light">

                        {/* Education Header */}
                        <h2 className="display-5 fw-bold text-primary text-center mb-4">Education</h2>


                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <h4 className="fw-bold">Mobile Solutions Development</h4>
                                <p className="mb-1">Conestoga College, Waterloo, Ontario</p>
                                <em className="text-muted">2024 - Present</em>
                            </div>

                            <div className="col-md-6 mb-4">
                                <h4 className="fw-bold">Bachelor of Computer Applications (BCA)</h4>
                                <p className="mb-1">Chaudhary Ranbir Singh University, India</p>
                                <em className="text-muted">2020 - 2023</em>
                            </div>
                        </div>

                        {/* Certificates Section */}
                        <h3 className="fw-bold text-success mt-4 text-center">Certificates</h3>
                        <ul className="list-unstyled lead text-center">
                            <li>React: LinkedIn Learning</li>
                        </ul>

                    </div>
                </div>
            </div>



        </section>
        
    )
}

export default About
