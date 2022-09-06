import React from "react";

import weather from "../images/weather.png";
import carDatabase from "../images/car-database.png";
import aphileus from "../images/aphileus.png";
import portfolio from "../images/portfolio.png";
import hurea from "../images/hurea.png";
import productsDatabase from "../images/products-database.png";

function Works() {
	return (
		<div className="min-h-screen bg-base-200" id="works">
			<h4 class="font-bold pb-2 border-b border-gray-200 text-3xl text-center">
				My Works
			</h4>

			<div className="flex flex-row items-center justify-center w-full gap-10 mt-8 space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
				<div className="shadow-xl card card-compact w-96 bg-base-100">
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
						<div className="justify-end card-actions">
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

				<div className="shadow-xl card card-compact w-96 bg-base-100">
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
						<div className="justify-end card-actions">
							<a href="https://github.com/alifskymind/hurea">
								<button class="btn btn-primary">
									Github link
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className="shadow-xl card card-compact w-96 bg-base-100">
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
						<div className="justify-end card-actions">
							<a href="https://github.com/anslier/example-car-shop-database">
								<button class="btn btn-primary">
									Github link
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-row items-center justify-center w-full gap-10 mt-8 space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
				<div className="shadow-xl card card-compact w-96 bg-base-100">
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
						<div className="justify-end card-actions">
							<a href="https://github.com/anslier/tensorflow-predict-weather-cnn">
								<button class="btn btn-primary">
									Github link
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className="shadow-xl card card-compact w-96 bg-base-100">
					<figure>
						<img
							// src="https://placeimg.com/400/225/arch"
							src={portfolio}
							alt="alif-portfolio-page"
						/>
					</figure>
					<div className="card-body">
						<h2 className="pt-20 card-title">
							alif-portfolio-page
						</h2>
						<p class="">
							A single page portfolio website to showcase my works
							built with ReactJS and Tailwind CSS.
						</p>
						<div className="justify-end card-actions">
							<a href="https://github.com/anslier/portfolio-page">
								<button class="btn btn-primary">
									Github link
								</button>
							</a>
						</div>
					</div>
				</div>

				{/* projects database */}
				<div className="shadow-xl card card-compact w-96 bg-base-100">
					<figure>
						<img
							// src="https://placeimg.com/400/225/arch"
							src={productsDatabase}
							alt="productsDatabase"
						/>
					</figure>
					<div className="card-body">
						<h2 className="pt-20 card-title">products-database</h2>
						<p class="">
							Full stack web application with all CRUD
							functionalities built using Spring Boot for backend,
							ReactJS for frontend, MUI for the UI tools and
							MariaDB.
						</p>
						<div className="justify-end card-actions">
							<a href="https://github.com/anslier/products-database">
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
