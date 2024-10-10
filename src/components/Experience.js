import React from "react";

function Experience() {
	return (
		<div id="experiences">
			<div className="min-h-screen bg-base-200 pt-12 place-items-center">
				<h4 className="font-bold pb-2 border-b border-gray-200 text-3xl text-center">
					My Experiences
				</h4>

				<ul className="steps steps-vertical pt-12 pl-40 pr-40">
					<li className="step step-info text-2xl">
						<p className="font-bold">
							Full-Stack Software Engineer at JurisTech (Juris Technologies) (January 2023 – Present)
						</p>
						<p className="mb-4 text-base text-gray-700">
							Develop and maintain core features for a high-traffic FinTech web application, leveraging PHP, Oracle SQL, and a range of web technologies. This involves collaborating with cross-functional teams to gather and refine requirements, design robust solutions, and implement new functionalities, including APIs and integrations with third-party services. Responsibilities encompass the full software development lifecycle, from database design and optimization using Oracle SQL to front-end development with HTML, CSS, and JavaScript. Mentor junior developers on best practices in PHP, SQL, and web development, emphasizing code quality, maintainability, and performance. Key technologies utilized include PHP, ADODB, PHPLens, Oracle SQL, JavaScript, HTML, CSS, and various API integration frameworks to deliver robust, scalable, and secure software solutions.
						</p>
					</li>

					<li className="step step-primary text-2xl">
						<p className="font-bold">
							Junior Artificial Intelligence Engineer at Skymind CNS Sdn. Bhd. (April 2022 – May 2022)
						</p>
						<p className="mb-4 text-base text-gray-700">
							Created a full stack application to predict temperatures based on past data. Technologies used included Spring Boot for the backend, Vaadin Flow for the frontend, Deeplearning4j for the deep learning framework, and security through OAuth2.
						</p>
					</li>

					<li className="step step-secondary text-2xl">
						<p className="font-bold">
							Maybank SL1M Trainee at Malayan Banking Berhad, Bukit Jelutong, Selangor (January 2018 – September 2018)
						</p>
						<p className="mb-4 text-base text-gray-700">
							Employed in the Service Fulfillment Unit, which deals with customer issues escalated through phone or email. Personally dealt with solving customer issues regarding Maybank card usage.
						</p>
					</li>

					<li className="step step-accent text-2xl">
						<p className="font-bold">
							Aeon SL1M Trainee at AEON CO. (M) BHD. Cheras Selatan (August 2017 - September 2017)
						</p>
						<p className="mb-4 text-base text-gray-700">
							Worked in the Meat Department and actively participated in the overall process of retailing, from preparation to customer servicing.
						</p>
					</li>

					<li className="step text-2xl">
						<p className="font-bold">
							Assistant Urban Planner Intern at Majlis Daerah Kuala Selangor (June 2015 - August 2015)
						</p>
						<p className="mb-4 text-base text-gray-700">
							Served as an urban planner assistant, involved in meetings, assisting in determining best land use scenarios, developing technical skills, and assisting during field work.
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Experience;
