import React from 'react'

function Project() {
  return (
    <>   	<h1 class="display-5 fw-bold text-primary">My Projects</h1> 
    <section class="py-5">
       
	<div class="container">
		<div class="row gx-4 align-items-center justify-content-between">
			<div class="col-md-5 order-2 order-md-1">
				<div class="mt-5 mt-md-0">
					
					<h2 class="display-5 fw-bold text-primary">TRAVELL BUDDY</h2>
					<p class="lead">The Travel Buddy app is an innovative iOS application built to showcase proficiency in Swift programming and iOS app development. It allows users to seamlessly plan, manage, and track their trips while providing an intuitive interface and engaging user experience. 
                        This project demonstrates a wide array of key features and functionalities, highlighting both technical and design skills. .</p>
					
				</div>
			</div>
			<div class="col-md-6 offset-md-1 order-1 order-md-2">
				<div class="row gx-2 gx-lg-3">
					<div class="col-6">
						<div class="mb-2"><img class="img-fluid rounded-3" src="Screenshot 2025-02-02 at 3.24.33 PM.png"/></div>
					</div>
					<div class="col-6">
						<div class="mb-2"><img class="img-fluid rounded-3" src="Screenshot 2025-02-02 at 3.30.30 PM.png"/></div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</section>
<section class="py-5">
       
       <div class="container">
           <div class="row gx-4 align-items-center justify-content-between">
               <div class="col-md-5 order-2 order-md-1">
                   <div class="mt-5 mt-md-0">
                       
                       <h2 class="display-5 fw-bold text-primary">Dynamic Web Project</h2>
                       <p class="lead">This project features a fully functional website built using HTML,
                         CSS, JavaScript, and PHP. It includes a secure user login system with password hashing, 
                         role-based access with admin functionality, and a manager creation feature. Data is 
                         efficiently stored and managed using a database, ensuring smooth interactions and 
                         secure user data. The project demonstrates a blend of front-end 
                        and back-end development skills with an emphasis on security and usability.</p>
                       
                   </div>
               </div>
               <div class="col-md-6 offset-md-1 order-1 order-md-2">
                   <div class="row gx-2 gx-lg-3">
                       <div class="col-6">
                           <div class="mb-2"><img class="img-fluid rounded-3" src="Screenshot 2025-02-02 at 3.32.42 PM.png"/></div>
                       </div>
                       <div class="col-6">
                           <div class="mb-2"><img class="img-fluid rounded-3" src="Screenshot 2025-02-02 at 3.25.23 PM.png"/></div>
                       </div>
                       
                   </div>
               </div>
           </div>
       </div>
   </section>
   
   <div className="mt-4 mb-5">
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
</>

  )
}

export default Project
