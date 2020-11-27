import React, { useState } from "react";
import "../styles/ContactForm.css";

import axios from "axios";

function ContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	const [message, setMessage] = useState("");

	const sendEmail = async (e) => {
		e.preventDefault();

		console.log(`NAME: ${name}`);
		console.log(`EMAIL: ${email}`);
		console.log(`CONTACT NO.: ${number}`);
		console.log(`MESSAGE: ${message}`);

		setName("");
		setEmail("");
		setNumber("");
		setMessage("");

		await axios.post("/api/form", {
			name: name,
			email: email,
			contact_number: number,
			message: message,
		});
	};
	return (
		<div>
			<form className="contactForm" onSubmit={sendEmail}>
				<input
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Name"
				/>

				<input
					type="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
				/>

				<input
					type="number"
					name="contact_number"
					value={number}
					onChange={(e) => setNumber(e.target.value)}
					placeholder="Contact"
				/>

				<textarea
					name="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder="Type your message here..."
					rows="4"
				/>

				<button type="submit" disabled={name ? false : true}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default ContactForm;
