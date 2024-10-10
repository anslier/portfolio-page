import React from "react";

function ProgrammingSkills() {
	return (
		<div id="programmingSkills">
			<div className="min-h-screen bg-base-200 pt-12 place-items-center">
				<h4 className="font-bold pb-2 border-b border-gray-200 text-3xl text-center">
					My Programming Skills
				</h4>

				<div className="flex justify-center">
					<ul className="list-disc">
						<div className="flex items-center">
							<li className="px-5 py-10">
								PHP: Proficient in PHP development, utilizing frameworks like PHPLens and ADODB for
								database interaction and performance optimization. Developed application for managing
								financial transactions. Experienced in building and maintaining dynamic websites, web
								services, APIs using PHP.
							</li>
						</div>

						<div className="flex items-center">
							<li className="px-5 py-10">
								SQL Databases: Experienced in working with SQL databases, including Oracle, MariaDB, and PostgreSQL. Proficient in writing complex queries, optimizing database performance, and designing database schemas. Designed and implemented the database schema for a FinTech application.
							</li>
						</div>

						<div className="flex items-center">
							<li className="px-5 py-10">
								Frontend Development: Proficient in building modern and responsive user interfaces using React, along with styling frameworks like Bootstrap, Tailwind CSS, and Chakra UI.
							</li>
						</div>

						<div className="flex items-center">
							<li className="px-5 py-10">
								Java: Experienced in Java development, including backend programming with the Spring Boot framework and deep learning using Deeplearning4j. Familiar with Deeplearning4j for implementing neural networks.
							</li>
						</div>

						<div className="flex items-center">
							<li className="px-5 py-10">
								Python: Proficient in Python programming, specializing in machine learning and deep learning using libraries like scikit-learn and TensorFlow.
							</li>
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default ProgrammingSkills;
