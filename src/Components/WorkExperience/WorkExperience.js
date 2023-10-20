import React from "react";
import "./WorkExperience.css";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdGroupWork } from "react-icons/md";

const WorkExperience = () => {
	const data = [
		{
			company_name: "Google",
			position: "Full Stack Developer",
			des: "Just a description that will change latter ",
			year: "2012-2021",

			techskills: [
				{
					name: "Node JS",
				},

				{
					name: "Node JS",
				},

				{
					name: "Node JS",
				},
			],
		},
		{
			company_name: "Google",
			position: "Full Stack Developer",
			des: "Just a description that will change latter ",
			year: "2012-2021",

			techskills: [
				{
					name: "Node JS",
				},

				{
					name: "Node JS",
				},

				{
					name: "Node JS",
				},
			],
		},
		{
			company_name: "Google",
			position: "Full Stack Developer",
			des: "Just a description that will change latter ",
			year: "2012-2021",

			techskills: [
				{
					name: "Node JS",
				},

				{
					name: "Node JS",
				},

				{
					name: "Node JS",
				},
			],
		},
		{
			company_name: "Google",
			position: "Full Stack Developer",
			des: "Just a description that will change latter ",
			year: "2012-2021",

			techskills: [
				{
					name: "Node JS",
				},

				{
					name: "Node JS",
				},

				{
					name: "Node JS",
				},
			],
		},
		{
			company_name: "Google",
			position: "Full Stack Developer",
			des: "Just a description that will change latter ",
			year: "2012-2021",

			techskills: [
				{
					name: "Node JS",
				},

				{
					name: "Node JS",
				},

				{
					name: "Node JS",
				},
			],
		},
	];

	const colors = [
		"#F1C40F",
		"#4B088A",
		"#8181F7",
		"#FE2EF7",
		"#585858",
		"#800000",
		"#0088FE",
		"#00C49F",
		"#FFBB28",
		"#FF8042",
		"#001CCE",
		"#00C79F",
		"#FFBB24",
		"#FF1042",
	];

	return (
		<div className="container work-experience">
			<div className="section-title">
				<h5>Work Experience</h5>
				<span className="line"></span>
			</div>
			<div className="timeline-section">
				<VerticalTimeline lineColor=" rgb(11, 138, 106)">
					{data.map((item, index) => (
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{
								background: colors[index],
								color: "#fff",
							}}
							contentArrowStyle={{
								borderRight: `7px solid  ${colors[index]}`,
							}}
							date={item.year}
							dateClassName="date-class"
							iconStyle={{
								background: colors[index],
								color: "#fff",
							}}
							icon={<MdGroupWork />}
						>
							<h3 className="vertical-timeline-element-title">
								{item.company_name}
							</h3>
							<h4 className="vertical-timeline-element-subtitle">
								{item.position}
							</h4>

							<div className="row">
								{item.techskills.map((tec, index) => (
									<div
										className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
										key={index}
									>
										<div className="tech-skills">
											<p>{tec.name}</p>
										</div>
									</div>
								))}
							</div>

							<p>{item.des}</p>
						</VerticalTimelineElement>
					))}
				</VerticalTimeline>
			</div>
		</div>
	);
};

export default WorkExperience;
