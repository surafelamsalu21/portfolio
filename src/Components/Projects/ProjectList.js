import React, { useState } from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";

const ProjectList = ({ name, des, project_link, tech_used }) => {
	const [show, setShow] = useState(false);

	const handle_show_and_col = () => {
		setShow(!show);
	};

	return (
		<div
			className={
				show ? "project-list-opened project-list" : "project-list"
			}
			onClick={handle_show_and_col}
			// onMouseEnter={() => setShow(true)}
			// onMouseLeave={() => setShow(false)}
		>
			<div className="title-and-collapse-option">
				<h5>{name}</h5>
				<p>
					{show ? (
						<FcCollapse size={20} />
					) : (
						<FcExpand size={20} />
					)}
				</p>
			</div>

			<div className="description">
				{show ? (
					<p>{des}</p>
				) : (
					<p>
						{des.substring(0, 5)}
						{/* <p style={{ color: "green" }}>Read More</p> */}
					</p>
				)}
			</div>

			<div className="row">
				{tech_used &&
					tech_used.map((tech_used, index) => (
						<div
							className="col-xl-3 col-lg-3 col-md-6 col-sm-12"
							key={index}
						>
							<div className="tech-used-in-project">
								<p>{tech_used.tech_name}</p>
							</div>
						</div>
					))}
			</div>
			<div className="live-demo-button">
				<a target="_" href={project_link}>
					Live Demo
				</a>
			</div>
		</div>
	);
};

export default ProjectList;
