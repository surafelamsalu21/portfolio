import React from "react";
import "./Contact.css";
import { BiSolidSend } from "react-icons/bi";

const Contact = () => {
	return (
		<div className="container contact-section">
			<div className="row">
				<div className="col-xl-5 col-lg-5 col-sm-5">
					<div className="contact-form-image">
						<img
							src="https://thumbs.dreamstime.com/b/little-boy-gamer-little-boy-gamer-front-big-screen-generative-ai-269783815.jpg"
							alt="Game Boy"
						/>
					</div>
				</div>

				<div className="col-xl-7 col-lg-7 col-sm-7">
					<div className="contact-form-design">
						<div className="text-center">
							<h5>Contact Me</h5>
						</div>
						<form>
							<div className="contact-form">
								<label className="form-label">
									Name
								</label>
								<input
									type="text"
									className="form-control"
								/>
							</div>

							<div className="contact-form">
								<label className="form-label">
									Email
								</label>
								<input
									type="email"
									className="form-control"
								/>
							</div>

							<div className="contact-form">
								<label className="form-label">
									Job Types
								</label>
								<select className="custom-select-tag">
									<option>Types of Option</option>
									<option>Types of Option</option>
									<option>Types of Option</option>
									<option>Types of Option</option>
								</select>
							</div>
							<div className="contact-form">
								<label className="form-label">
									Message
								</label>
								<textarea
									rows="5"
									type="email"
									className="form-control"
								/>
							</div>
							<div className="button-submit">
								<p className="send-button">
									Send
									<BiSolidSend size={20} />
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
