import React from "react";
import Layout from "../components/MyLayout";
import ContactComp from "../components/Contact";
import H1Header from "../components/H1Header";

const Contact = () => (
	<div>
		<Layout title="Shower Online | Contact" keywords="Shower Online Maatwerk contact vraag">
			<div className="container">
				<H1Header title="Contacteer ons" />
				<ContactComp msg="Jouw bericht"></ContactComp>
			</div>
		</Layout>
	</div>
);

export default Contact;
