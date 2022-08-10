import React from "react";

import weather from "../images/weather.png";
import carDatabase from "../images/car-database.png";
import aphileus from "../images/aphileus.png";
import portfolio from "../images/portfolio.png";
import hurea from "../images/hurea.png";

function Works() {
	return (
		<div className="min-h-screen bg-base-200" id="works">
			<h4 class="font-bold pb-2 border-b border-gray-200 text-3xl text-center">
				My Works
			</h4>

			<div className="flex flex-row w-full gap-10 justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-8">
				<div className="card card-compact w-96 bg-base-100 shadow-xl">
					<figure>
						<img
							// src="https://placeimg.com/400/225/arch"
							src={aphileus}
							alt="aphileus: a Predict the Temperature App"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">
							aphileus: a Predict the Temperature App
						</h2>
						<p>
							This is a full stack application that can be used to
							predict the future temperatures. It also shows the
							previous temperatures in a detailed chart. Built
							using Spring Boot, Vaadin Flow and Deeplearning4j.
							Secured using 0Auth2.
						</p>
						<div className="card-actions justify-end">
							{/* <button className="btn btn-primary">
								Github link
							</button> */}
							<a href="https://github.com/alifskymind/aphileus">
								<button class="btn btn-primary">
									Github link
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className="card card-compact w-96 bg-base-100 shadow-xl">
					<figure>
						<img
							// src="https://placeimg.com/400/225/arch"
							src={hurea}
							alt="hurea: Predict temperature web application"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">
							hurea: Predict temperature web application
						</h2>
						<p class="pb-6">
							A full stack web application to predict
							temperatures. Built using Spring Boot, NextJS and
							Deeplearning4j. Styled with Tailwind CSS.
						</p>
						<div className="card-actions justify-end">
							<a href="https://github.com/alifskymind/hurea">
								<button class="btn btn-primary">
									Github link
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className="card card-compact w-96 bg-base-100 shadow-xl">
					<figure>
						<img
							// src="https://placeimg.com/400/225/arch"
							src={carDatabase}
							alt="example-car-shop-database"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">
							example-car-shop-database
						</h2>
						<p class="pb-14">
							An example full stack project with spring boot and
							react complete will all CRUD operations and secured
							using Spring Security JWT. Styled with MUI.
						</p>
						<div className="card-actions justify-end">
							<a href="https://github.com/anslier/example-car-shop-database">
								<button class="btn btn-primary">
									Github link
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-row w-full gap-10 justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-8">
				<div className="card card-compact w-96 bg-base-100 shadow-xl">
					<figure>
						<img
							// src="https://placeimg.com/400/225/arch"
							src={weather}
							alt="tensorflow-predict-weather-cnn"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">
							tensorflow-predict-weather-cnn
						</h2>
						<p>
							Predict the type of weather based on image provided
							with cnn network using tensorflow framework.
						</p>
						<div className="card-actions justify-end">
							<a href="https://github.com/anslier/tensorflow-predict-weather-cnn">
								<button class="btn btn-primary">
									Github link
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className="card card-compact w-96 bg-base-100 shadow-xl">
					<figure>
						<img
							// src="https://placeimg.com/400/225/arch"
							src={portfolio}
							alt="alif-portfolio-page"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">alif-portfolio-page</h2>
						<p class="pb-20">
							A single page portfolio website to showcase my works
							built with ReactJS and Tailwind CSS.
						</p>
						<div className="card-actions justify-end">
							<a href="https://github.com/anslier/tensorflow-predict-weather-cnn">
								<button class="btn btn-primary">
									Github link
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Works;
