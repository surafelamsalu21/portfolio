import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import TechStack from "./Components/Tech Stack/TechStack";
import Project from "./Components/Projects/Project";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import Education from "./Components/Education/Education";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
const App = () => {
	return (
		<>
			<Sidebar />
			<About />
			<Education />
			<TechStack />
			<Project />
			<WorkExperience />
			<Testimonial />
			<Contact />
		</>
	);
};

export default App;
