import React from "react";
import "./Education.css";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUserGraduate } from "react-icons/fa";

const Education = () => {
	const data = [
		{
			name: "University Name",
			degree: "MSC in ....",
			year: "2020-2022",
			des: "Description about the university",
		},
		{
			name: "University Name",
			degree: "MSC in ....",
			year: "2020-2022",
			des: "Description about the university",
		},
		{
			name: "University Name",
			degree: "MSC in ....",
			year: "2020-2022",
			des: "Description about the university",
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
		<div className="container education-section">
			<div className="section-title">
				<h5>Education</h5>
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
							icon={<FaUserGraduate />}
						>
							<h3 className="vertical-timeline-element-title">
								{item.name}
							</h3>
							<h5
								className="vertical-timeline-element-subtitle"
								// style={{ color: "rgb(11, 138, 106)" }}
							>
								{item.degree}
							</h5>

							<p>{item.des}</p>
						</VerticalTimelineElement>
					))}
				</VerticalTimeline>
			</div>
		</div>
	);
};

export default Education;
