import React from "react";

// import face from "../images/face.png";
import face from "../images/passport.png";

function Hero() {
	return (
		<div>
			<div class="hero min-h-screen bg-base-200">
				<div class="hero-content flex-col lg:flex-row-reverse">
					<div class="flex flex-wrap justify-center">
						<div class="w-6/12 sm:w-4/12 px-4">
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
							I am a full stack developer and a fully certified
							artificial intelligence engineer. I am specialized
							in creating a full stack web application with spring
							boot as the backend and react for the frontend. I am
							also proficient in building machine learning and
							deep learning models. I am open for new
							opportunities and projects.
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
