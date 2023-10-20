import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import MyCv from "./SURAFEL's Resume.pdf";
const Home = () => {
	return (
		<div className="container-fluid home">
			<div className="container home-content">
				<h1>Hi i'm</h1>
				<h3>
					<Typewriter
						options={{
							strings: [
								"Surafel Amsalu",
								"Python Expert",
								"AI Engineer",
								"Data Scientist",
							],
							autoStart: true,
							loop: true,
							delay: 7,
						}}
					/>
				</h3>
				<div className="button-for-action">
					<div className="hire-me-button">Hire Me</div>

					<div className="ger-resume-button">
						<a href={MyCv} download="Surafel_Amsalu_CV.pdf">
							Get Resume
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
