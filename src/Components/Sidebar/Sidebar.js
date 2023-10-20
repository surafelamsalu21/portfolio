import React, { useState } from "react";
import "./Sidebar.css";
import SideBarList from "./SideBarList";
import Home from "../Home/Home";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
const Sidebar = () => {
	const [expandSidebar, setExpandsSidebar] = useState(true);

	const handleExpandClick = () => {
		setExpandsSidebar(!expandSidebar);
	};

	return (
		<div className="container-fluid sidebar-section">
			<div
				className={
					expandSidebar ? "sidebar-expand sidebar" : "sidebar"
				}
			>
				<div className="icon-for-sidebar-expand-and-collapsed">
					<p onClick={handleExpandClick}>
						{expandSidebar ? (
							<BsChevronLeft size={30} />
						) : (
							<BsChevronRight size={30} />
						)}
					</p>
				</div>
				<SideBarList expandSidebar={expandSidebar} />
			</div>
			<div className="container-fluid">
				<Home />
			</div>
		</div>
	);
};

export default Sidebar;
