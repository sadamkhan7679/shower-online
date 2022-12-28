import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = (props) => (
	<div>
		<Head>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<meta name="Description" content="Shower Online : De maatwerk specialist voor je douchebak of douchewand" />
			<meta name="keywords" content="douchebak douchewand op maat" />
			<meta name="twitter:card" content="Shower Online" />
			<meta name="twitter:title" content="Shower Online" />
			<meta name="twitter:description" content="Shower Online : De maatwerk specialist voor je douchebak of douchewand" />
			<meta name="twitter:image" content="https://www.shower-online.com/images/logo/showeronline-logo.png" />
			<meta property="og:title" content="Shower Online" />
			<meta property="og:type" content="article" />
			<meta property="og:description" content="Shower Online website" />
			<meta property="og:image" content="https://www.shower-online.com/images/logo/showeronline-logo.png" />
			<meta property="og:url" content="https://www.shower-online.com" />
			<meta property="og:site_name" content="Shower Online" />
			<meta name="theme-color" content="#f2f2f2" />
			<meta name="msapplication-navbutton-color" content="{{mobileHeaderColor}}" />
			<meta name="apple-mobile-web-app-status-bar-style" content="default" />
			<link href="/css/general.css" rel="stylesheet" />
			<link
				rel="stylesheet"
				href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
				integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
				crossOrigin="anonymous"
			/>
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
			<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
			<link rel="icon" href="/favicon.ico" />

			{/*<!-- Global site tag (gtag.js) - Google Analytics -->  */}
			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-150221383-2"></script>
			<script
				dangerouslySetInnerHTML={{
					__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments)}
        gtag("js", new Date());
        gtag("config", "UA-150221383-2");
    `,
				}}
			></script>
		</Head>
		<hr />
		<Header></Header>
		<hr />
		<div className="">{props.children}</div>
		<Footer></Footer>
	</div>
);

export default Layout;
