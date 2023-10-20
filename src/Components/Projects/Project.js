import React from "react";
import "./Project.css";
import "./ProjectList";
import ProjectList from "./ProjectList";
const Project = () => {
	const data = [
		{
			name: "MERN Stack Job Portal",
			des: "Random Projects For Description Okay",
			project_link: "#",
			tech_used: [
				{
					tech_name: "Node JS",
				},
				{
					tech_name: "Node JS",
				},
				{
					tech_name: "Node JS",
				},
				{
					tech_name: "Node JS",
				},
				{
					tech_name: "Node JS",
				},
			],
		},
		{
			name: "MERN Stack Job Portal",
			des: "Random Projects For Description Okay",
			project_link: "#",
			tech_used: [
				{
					tech_name: "Node JS",
				},
				{
					tech_name: "Node JS",
				},
				{
					tech_name: "Node JS",
				},
				{
					tech_name: "Node JS",
				},
				{
					tech_name: "Node JS",
				},
			],
		},
		{
			name: "MERN Stack Job Portal",
			des: "Random Projects For Description Okay",
			project_link: "#",
			tech_used: [
				{
					tech_name: "Node JS",
				},
				{
					tech_name: "Node JS",
				},
				{
					tech_name: "Node JS",
				},
				{
					tech_name: "Node JS",
				},
				{
					tech_name: "Node JS",
				},
			],
		},
		{
			name: "MERN Stack Job Portal",
			des: "Random Projects For Description Okay",
			project_link: "#",
			tech_used: [
				{
					tech_name: "Node JS",
				},
				{
					tech_name: "Node JS",
				},
				{
					tech_name: "Node JS",
				},
				{
					tech_name: "Node JS",
				},
				{
					tech_name: "Node JS",
				},
			],
		},
		{
			name: "MERN Stack Job Portal",
			des: "Random Projects For Description Okay",
			project_link: "#",
			tech_used: [
				{
					tech_name: "Node JS",
				},
				{
					tech_name: "Node JS",
				},
				{
					tech_name: "Node JS",
				},
				{
					tech_name: "Node JS",
				},
				{
					tech_name: "Node JS",
				},
			],
		},
		{
			name: "MERN Stack Job Portal",
			des: "Random Projects For Description Okay",
			project_link: "#",
			tech_used: [
				{
					tech_name: "Node JS",
				},
				{
					tech_name: "Node JS",
				},
				{
					tech_name: "Node JS",
				},
				{
					tech_name: "Node JS",
				},
				{
					tech_name: "Node JS",
				},
			],
		},
	];
	return (
		<div className="container">
			<div className="section-title">
				<h5>Projects</h5>
				<span className="line"></span>
			</div>

			<div className="row">
				{data.map((item, index) => (
					<div
						className="col-xl-6 col-lg-6 col-md-6 col-sm-12"
						key={index}
					>
						<ProjectList {...item} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Project;
