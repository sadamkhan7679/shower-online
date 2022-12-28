import React from "react";
import Layout from "../components/MyLayout";
import H1Header from "../components/H1Header";
import FaqContainer from "../components/FaqContainer";
import Head from "next/head";

const faq = () => (
	<div>
		<Layout>
			<Head>
				<title>Shower Online | Veel gestelde vragen</title>
				<meta name="description" content="veel gestelde vragen ivm douchebakken en  douchewanden " />
				<meta name="keywords" content="Shower Online, Maatwerk, douchewanden, douchebakken, veel gestelde vragen" />
			</Head>
			<div className="container">
				<H1Header title="Veel gestelde vragen" />

				<FaqContainer />
			</div>
		</Layout>
	</div>
);

export default faq;
