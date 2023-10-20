import React, { useState } from "react";
import "./TechStack.css";
const TechStack = () => {
	const data = [
		{
			name: "Full Stack Developer",
		},
		{
			name: "Full Stack Developer",
		},
		{
			name: "Full Stack Developer",
		},
		{
			name: "Full Stack Developer",
		},
		{
			name: "Full Stack Developer",
		},
		{
			name: "Full Stack Developer",
		},
		{
			name: "Full Stack Developer",
		},
		{
			name: "Full Stack Developer",
		},
		{
			name: "Full Stack Developer",
		},
		{
			name: "Full Stack Developer",
		},
		{
			name: "Full Stack Developer",
		},
		{
			name: "Full Stack Developer",
		},
		{
			name: "Full Stack Developer",
		},
		{
			name: "Full Stack Developer",
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

	const [show_more_tech_stack, setShow_more_tech_stack] = useState(9);
	const load_more = () => {
		setShow_more_tech_stack((prev) => prev + 3);
	};
	return (
		<div className="container techstack-section">
			<div className="section-title">
				<h5>Tech Stack</h5>
				<span className="line"></span>
			</div>
			<div className="row">
				{data.slice(0, show_more_tech_stack).map((item, index) => (
					<div
						className="col-xl-4 col-lg-4 col-sm-12"
						key={index}
					>
						<div
							className={
								index === 0
									? "tech-content-marked tech-content"
									: "tech-content"
							}
						>
							<span
								className="tech-number"
								style={{
									backgroundColor: colors[index],
								}}
							>
								{index + 1}
							</span>
							<p>{item.name}</p>
						</div>
					</div>
				))}
			</div>

			{show_more_tech_stack >= data.length ? null : (
				<span className="load-more-tech-stack" onClick={load_more}>
					Load More
				</span>
			)}
		</div>
	);
};

export default TechStack;
