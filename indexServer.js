const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/form", (req, res) => {
	console.log(req.body);

	const htmlEmail = `
		<h3>Contact Details</h3>
		<ul>
		<li>Name:  ${req.body.name}</li>
		<li>Email:  ${req.body.email}</li>
		<li>Contact No.:  ${req.body.contact_number}</li>
		</ul>
		<h3>Message</h3>
		<p>${req.body.message}</p>
    `;

	let transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "CMDPIONEERwebsite@gmail.com",
			pass: "cmdpioneer",
		},
	});

	let mailOptions = {
		from: "CMDPIONEERwebsite@gmail.com",
		to: "cmdpioneerwebsite@gmail.com",
		replyTo: "CMDPIONEERwebsite@gmail.com",
		subject: "CMD Inquiry",
		text: req.body.message,
		html: htmlEmail,
	};

	transporter.sendMail(mailOptions, (err, info) => {
		if (err) {
			return console.log(err);
		}

		console.log("Message sent: %s", info.message);
		console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));
	});
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Server is listening on port: ${PORT}`);
	console.log(`HELLO ALVIN!`);
});
