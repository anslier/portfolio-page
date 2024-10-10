import React from "react";

function Experience() {
	return (
		<div id="experiences">
			<div className="min-h-screen bg-base-200 pt-12 place-items-center">
				<h4 className="font-bold pb-2 border-b border-gray-200 text-3xl text-center">
					My Experiences
				</h4>

				<ul className="steps steps-vertical pt-12 pl-40 pr-40">
					<li className="step step-success text-2xl">
						Full-Stack Software Engineer at JurisTech (January 2023 – Present)
					</li>
					<p className="mb-4">
						Develop and maintain core features for a high-traffic
						FinTech web application, leveraging PHP, Oracle SQL, and a
						range of web technologies. This involves collaborating with
						cross-functional teams to gather and refine requirements,
						design robust solutions, and implement new functionalities,
						including APIs and integrations with third-party services.
						Responsibilities encompass the full software development
						lifecycle, from database design and optimization using Oracle
						SQL to front-end development with HTML, CSS, and JavaScript.
						Mentor junior developers on best practices in PHP, SQL, and
						web development, emphasizing code quality, maintainability,
						and performance. Key technologies utilized include PHP,
						ADODB, PHPLens, Oracle SQL, JavaScript, HTML, CSS, and various
						API integration frameworks to deliver robust, scalable, and
						secure software solutions.
					</p>

					<li className="step step-primary text-2xl">
						Junior Artificial Intelligence Engineer at Skymind CNS
						Sdn. Bhd. (April 2022 – May 2022)
					</li>
					<p className="mb-4">
						Creating a full stack application to predict the
						temperatures based on past data. Technologies used are
						Spring Boot for the backend, Vaadin Flow for the
						frontend, Deeplearning4j for the deep learning framework
						and secured using OAuth2.
					</p>

					<li className="step step-secondary text-2xl">
						Maybank SL1M Trainee at Malayan Banking Berhad, Bukit
						Jelutong, Selangor (January 2018 – September 2018)
					</li>
					<p className="mb-4">
						Employed in Service Fulfillment Unit which deals with
						customer issues escalated through phone or email.
						Personally dealing with solving customer issues
						regarding Maybank card usage.
					</p>

					<li className="step step-accent text-2xl">
						Aeon SL1M Trainee at AEON CO. (M) BHD. Cheras Selatan
						(August 2017 - September 2017)
					</li>
					<p className="mb-4">
						Worked in Meat Department and actively participating in
						the overall process of retailing from preparation till
						the customer servicing.
					</p>

					<li className="step text-2xl">
						Assistant Urban Planner Intern at Majlis Daerah Kuala
						Selangor (June 2015 - August 2015)
					</li>
					<p className="mb-4">
						Served as an urban planner assistant, involved in
						meetings, assisting in determining best land uses
						scenario, developing technical skills and assisting
						during field work.
					</p>
				</ul>
			</div>
		</div>
	);
}

export default Experience;
