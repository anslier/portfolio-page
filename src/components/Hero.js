import React from "react";

// import face from "../images/face.png";
import passport from "../images/passport.png";

function Hero() {
	return (
		<div>
			<div class="hero min-h-screen bg-base-200">
				<div class="hero-content flex-col lg:flex-row-reverse">
					<div class="flex flex-wrap justify-center">
						{/* <div class="w-6/12 sm:w-4/12 px-4"> */}
						<div class="w-64 px-4">
							<img
								// src="https://images.unsplash.com/photo-1657040298696-282743ad6406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
								// src={face}
								src={passport}
								// class="max-w-sm rounded-lg shadow-2xl"
								class="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
								alt="{face}"
							/>
						</div>
					</div>
					<div>
						<h1 class="text-5xl font-bold">
							Alif Asyraf Bin Rose Affendy
						</h1>

						<p class="py-6">
							I am a Full-Stack Software Engineer skilled in creating user-friendly
							interfaces with HTML, CSS, and JavaScript, and building robust back-end systems
							with PHP and SQL. Experienced in managing the entire software development
							lifecycle, from design and development to testing and deployment.
							Comfortable working with databases and optimizing query performance.
							Familiar with AI/ML concepts and their potential applications in software development.
						</p>
						<div class="btn-group">
							<a href="#contact">
								<button class="btn btn-primary">
									Contact me
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
