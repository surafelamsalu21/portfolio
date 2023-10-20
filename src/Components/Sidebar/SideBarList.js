import React from "react";
import "./SideBarList.css";
import profilePic from "../../image/Surafel Profile.jpg";

import {
	FcNightPortrait,
	FcHome,
	FcTodoList,
	FcContacts,
	FcFactory,
	FcSalesPerformance,
} from "react-icons/fc";
import { MdCastForEducation } from "react-icons/md";

import { MdBiotech } from "react-icons/md";
const SideBarList = ({ expandSidebar }) => {
	const imageStyle = {
		borderRadius: "50%", // 50% for a circle
		height: "170px",
		width: "170px",
		objectFit: "cover",
		border: "3px solid #CA9D88",
		"margin-bottom": "10px",
	};

	return (
		<React.Fragment>
			{expandSidebar ? (
				<div className="navbar-items">
					<div className="sidebar-profile-pic">
						<img
							src={profilePic}
							alt="Surafel Amsalu"
							style={imageStyle}
						/>
					</div>
					<ul>
						<li className="nav-item">
							<FcHome size={25} />
							Home
						</li>

						<li className="nav-item">
							<FcNightPortrait size={25} />
							About
						</li>

						<li className="nav-item">
							<FcFactory color="orange" size={25} />
							Work Experience
						</li>
						<li className="nav-item">
							<MdBiotech size={25} />
							Tech Stack
						</li>
						<li className="nav-item">
							<MdCastForEducation size={25} />
							Education
						</li>

						<li className="nav-item">
							<FcTodoList size={25} />
							Projects
						</li>

						<li className="nav-item">
							<FcSalesPerformance size={25} />
							Testimonial
						</li>
						<li className="nav-item">
							<FcContacts size={25} />
							Contact
						</li>
					</ul>
				</div>
			) : (
				<div className="navbar-items-only-icons">
					<ul>
						<li className="nav-item">
							<FcHome size={25} />
						</li>

						<li className="nav-item">
							<FcNightPortrait size={25} />
						</li>

						<li className="nav-item">
							<FcFactory color="orange" size={25} />
						</li>

						<li className="nav-item">
							<MdBiotech color="orange" size={25} />
						</li>

						<li className="nav-item">
							<MdCastForEducation
								color="orange"
								size={25}
							/>
						</li>

						<li className="nav-item">
							<FcTodoList size={25} />
						</li>

						<li className="nav-item">
							<FcSalesPerformance size={25} />
						</li>
						<li className="nav-item">
							<FcContacts size={25} />
						</li>
					</ul>
				</div>
			)}
		</React.Fragment>
	);
};

export default SideBarList;
