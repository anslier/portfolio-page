import React from "react";
import Contact from "./components/Contact";
import Credentials from "./components/Credentials";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Works from "./components/Works";

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Works />
			<Credentials />
			<Experience />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
