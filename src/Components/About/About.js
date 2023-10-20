import React from "react";
import "./About.css";
import profilePic from "../../image/Surafel Profile.jpg";

const About = () => {
	return (
		<div className="container about-section">
			<div className="row">
				<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
					<div className="about-image">
						<img src={profilePic} alt="Surafel Amsalu" />
					</div>
				</div>
				<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
					<div className="about-details">
						<div className="about-title">
							<h5>About Me </h5>
							<span className="line"></span>
						</div>

						<p>
							<br />
							I'm Surafel Amsalu, an AI Engineer and Data
							Scientist from Addis Ababa, Ethiopia. I hold
							a Master's degree in Artificial Intelligence
							and Data Science from Bahir Dar University, a
							Bachelor's degree in Computer Science from
							Axum University, and a Bachelor of Arts in
							Management from Blue Mark College. With this
							educational foundation, I've cultivated a
							diverse skill set, including expertise in
							computer vision, deep learning, machine
							learning, SQL, data cleaning, data
							visualization, and Python.
							<br /> <br /> As a Freelancer, I've been
							delivering exceptional results on a wide
							range of projects, helping clients worldwide
							transform data into actionable insights.
							Notably, I've built a robust portfolio in
							computer vision, predictive modeling, and
							data science, and my personal project in
							herbal plant identification using
							cutting-edge algorithms demonstrates my
							commitment to advancing technology.
							Additionally, I hold certificates in database
							administration and Python programming,
							reflecting my dedication to continuous
							learning and improvement.
							{/* My proficiency in English and Amharic, both
							at a professional level, further enhances my
							ability to communicate and collaborate
							effectively. Connect with me on LinkedIn or
							explore my GitHub profile to learn more about
							my work and contributions to the AI and data
							science community. */}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
