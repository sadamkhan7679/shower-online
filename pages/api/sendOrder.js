const nodemailer = require("nodemailer");

const maillist = [process.env.ENV_ORDER_MAILADRESS1, process.env.ENV_ORDER_MAILADRESS2];

export default async (req, res) => {
	const { name, adress, postalcode, town, phonenumber, email, desc, products } = await req.body;
	let transporter = nodemailer.createTransport({
		host: "email-smtp.eu-central-1.amazonaws.com", // SMTP server
		port: 465, //465 - 587
		secure: true,
		auth: {
			user: process.env.ENV_SEND_ORDER_SES_SMTP_USERNAME,
			pass: process.env.ENV_SEND_ORDER_SES_SMTP_PWD,
		},
	});

	try {
		let mailOptions = {
			from: "Order@shower-online.com",
			to: maillist,
			subject: "ShowerOnline - Bestelling",
			html: `
          <b>Naam:</b> ${name}<br/>
          <b>Adres:</b> ${adress}<br/>
          <b>Postcode:</b> ${postalcode}<br/>
          <b>Woonplaats:</b> ${town}<br/>
          <b>Telefoon:</b> ${phonenumber}<br/>
          <b>Email:</b> ${email}<br/>
          <br/>
          <b>Extra info:</b> ${desc}<br/>
          <br/>
         ${products.map((prod) => "<b>Product:</b> " + prod.title + "<br/><b>Hoeveelheid:</b> " + prod.quantity + "<br/><br/>")}
          `,
		};

		transporter.sendMail(mailOptions, (err, data) => {
			if (err) {
				console.log(err);
				res.status(400).send(err);
			} else {
				console.log("email sent");
				res.send({ message: "Email sent!!!" });
				res.status(200).end();
				localStorage.removeItem("cart");
			}
		});
	} catch (error) {
		res.status(400).send(error.message);
	}
};
