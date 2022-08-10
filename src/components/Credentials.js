import React from "react";

function Credentials() {
	return (
		<div class="min-h-screen bg-base-200 pt-12" id="credentials">
			<h4 class="font-bold pb-2 border-b border-gray-200 text-3xl text-center">
				My Credentials
			</h4>

			<div className="px-4 py-16	 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div className="p-8 rounded shadow-xl sm:p-16">
					<div className="flex flex-col lg:flex-row">
						<div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
							<h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
								AI and Machine Learning Competence for Industry
								4.0 (IKTISASS)
								{/* <br className="hidden md:block" />
								jumps over{" "}
								<span className="inline-block text-deep-purple-accent-400">
									a lazy dog
								</span> */}
							</h2>
						</div>
						<div className="lg:w-1/2">
							<p className="mb-4 text-base text-gray-700">
								Upskilling process with fundamental knowledge
								and hands-on practical training in areas related
								to artificial intelligence. Using scikit-learn
								in python for machine learning model and
								Deeplearning4j for deep learning model.
							</p>

							<p className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
								Selangor Human Resource Development Centre, Shah
								Alam, Selangor (November 2021)
							</p>

							{/* <a
								href="/"
								aria-label=""
								className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
							>
								Learn more
							</a> */}
						</div>
					</div>
				</div>
			</div>

			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div className="p-8 rounded shadow-xl sm:p-16">
					<div className="flex flex-col lg:flex-row">
						<div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
							<h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
								Certified Engineer in Computer Vision
								{/* <br className="hidden md:block" />
								jumps over{" "}
								<span className="inline-block text-deep-purple-accent-400">
									a lazy dog
								</span> */}
							</h2>
						</div>
						<div className="lg:w-1/2">
							<p className="mb-4 text-base text-gray-700">
								To receive this certificate, I need to be tested
								on my skills and knowledge in Computer Vision
								using Deep Learning approach. The theory exam
								tested on fundamentals of Machine Learning, Deep
								Learning and Computer Vision. The coding test
								requires me to solve toy computer vision
								problems using Deeplearning4j framework.
							</p>

							<p className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
								CertifAI Sdn Bhd (December 2021)
							</p>

							{/* <a
								href="/"
								aria-label=""
								className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
							>
								Learn more
							</a> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Credentials;
