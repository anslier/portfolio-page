import React from "react";

function Experience() {
	return (
		<div id="experiences">
			<div class="min-h-screen bg-base-200 pt-12 place-items-center">
				<h4 class="font-bold pb-2 border-b border-gray-200 text-3xl text-center">
					My Experiences
				</h4>

				{/* 1 */}
				{/* <ul class="steps pt-4 content-center pl-12 pr-12">
					<li class="step step-primary">
						Assistant Urban Planner Intern (June 2015 - August 2015)
					</li>

					<li class="step"></li>
					<li class="step"></li>
					<li class="step"></li>
				</ul>

				<p className="mb-4 text-gray-700 text-center text-2xl pt-2">
					Majlis Daerah Kuala Selangor
				</p>

				<p className="mb-4 text-base text-gray-700 text-center">
					Served as an urban planner assistant, involved in meetings,
					assisting in determining best land uses scenario, developing
					technical skills and assisting during field work.
				</p> */}

				{/* 2 */}
				{/* <ul class="steps pt-4 content-center  justify-items-stretch">
					<li class="step step-primary"></li>
					<li class="step step-primary">
						Aeon SL1M Trainee (August 2017 - September 2017)
					</li>
					<li class="step"></li>
					<li class="step"></li>
				</ul>

				<p className="mb-4 text-gray-700 text-center text-2xl pt-2">
					AEON CO. (M) BHD. Cheras Selatan
				</p>

				<p className="mb-4 text-base text-gray-700 text-center">
					Worked in Meat Department and actively participating in the
					overall process of retailing from preparation till the
					customer servicing.
				</p> */}

				{/* 3 */}
				{/* <ul class="steps pt-4 content-center pl-12 pr-12">
					<li class="step step-primary"></li>
					<li class="step step-primary"></li>
					<li class="step step-primary">
						Maybank SL1M Trainee (January 2018 – September 2018)
					</li>
					<li class="step"></li>
				</ul>

				<p className="mb-4 text-gray-700 text-center text-2xl pt-2">
					Malayan Banking Berhad, Bukit Jelutong, Selangor.
				</p>

				<p className="mb-4 text-base text-gray-700 text-center">
					Employed in Service Fulfillment Unit which deals with
					customer issues escalated through phone or email. Personally
					dealing with solving customer issues regarding Maybank card
					usage.
				</p> */}

				{/* 4 */}
				{/* <ul class="steps pt-4 content-center pl-12 pr-12">
					<li class="step step-primary"></li>
					<li class="step step-primary"></li>
					<li class="step step-primary"></li>
					<li class="step step-primary">
						Junior Artificial Intelligence Engineer (April 2022 –
						May 2022)
					</li>
				</ul>

				<p className="mb-4 text-gray-700 text-center text-2xl pt-2">
					Skymind CNS Sdn. Bhd.
				</p>

				<p className="mb-4 text-base text-gray-700 text-center">
					Creating a full stack application to predict the
					temperatures based on past data. Technologies used are
					Spring Boot for the backend, Vaadin Flow for the frontend,
					Deeplearning4j for the deep learning framework and secured
					using 0Auth2.
				</p> */}

				<ul class="steps steps-vertical pt-12 pl-40 pr-40">
					<li class="step text-2xl">
						Assistant Urban Planner Intern at Majlis Daerah Kuala
						Selangor (June 2015 - August 2015)
					</li>
					<p class="mb-4">
						Served as an urban planner assistant, involved in
						meetings, assisting in determining best land uses
						scenario, developing technical skills and assisting
						during field work.
					</p>

					<li class="step step-accent text-2xl">
						Aeon SL1M Trainee at AEON CO. (M) BHD. Cheras Selatan
						(August 2017 - September 2017)
					</li>
					<p class="mb-4">
						Worked in Meat Department and actively participating in
						the overall process of retailing from preparation till
						the customer servicing.
					</p>

					<li class="step step-secondary text-2xl">
						Maybank SL1M Trainee at Malayan Banking Berhad, Bukit
						Jelutong, Selangor (January 2018 – September 2018)
					</li>
					<p class="mb-4">
						Employed in Service Fulfillment Unit which deals with
						customer issues escalated through phone or email.
						Personally dealing with solving customer issues
						regarding Maybank card usage.
					</p>

					<li class="step step-primary text-2xl">
						Junior Artificial Intelligence Engineer at Skymind CNS
						Sdn. Bhd. (April 2022 – May 2022){" "}
					</li>
					<p class="mb-4">
						Creating a full stack application to predict the
						temperatures based on past data. Technologies used are
						Spring Boot for the backend, Vaadin Flow for the
						frontend, Deeplearning4j for the deep learning framework
						and secured using 0Auth2.
					</p>
				</ul>
			</div>
		</div>
	);
}

export default Experience;
