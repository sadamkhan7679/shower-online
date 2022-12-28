import React from "react";
import Link from "next/link";

function FooterNavLink({ href, title }) {
	return (
		<div>
			<style jsx>{`
				.footerNavItem {
					color: #999999;
				}
				.footerNavItem:hover {
					color: white;
				}
			`}</style>
			<Link href={href}>
				<li className="pb-3">
					<a className="footerNavItem" href="#">
						{title}
					</a>
				</li>
			</Link>
		</div>
	);
}

class Footer extends React.Component {
	render() {
		return (
			<div className="">
				<style jsx>{`
					.text {
						color: white;
					}
					@media screen and (max-width: 600px) {
						.content {
							text-align: center;
							line-height: 1.8;
						}
					}

					@media screen and (min-width: 601px) {
						line-height: 1.8;
					}
				`}</style>
				<footer className="pt-4 mt-5 py-5 border-top  bg-dark">
					<div className="container-fluid">
						<div className="row no-gutters">
							<div className="col-sm-0  col-lg-2 "></div>
							<div className="col-sm-12 col-lg-8">
								<div className="container">
									<div className="row no-gutters text ">
										<div className="col-sm-12 col-md-4 content pb-2">
											<h5>SHOWER-ONLINE</h5>
											<p className="content">
												Shower-Online België: <br />
												Beschikbaar: Enkel op afspraak <br />
												<i className="fas fa-phone pr-2" />: +32(0)496 50 45 05 <br />
												<i className="fa fa-envelope pr-2" />:
												<Link href="/contact">
													<a className="text-muted pl-2" href="#">
														cedrik@eauplus.be
													</a>
												</Link>
												<br />
												Smid Lambrechtstraat 72 <br />
												9406 Ninove <br />
												België
											</p>
										</div>
										<div className="col-sm-12 col-md-4 content pb-3">
											<h5>INFORMATIE</h5>
											<ul className="list-unstyled text-small">
												<FooterNavLink href="/infoCleanwall" title="Clean Wall Systeem" />
												<FooterNavLink href="/infoColors" title="Onze kleuren" />
												<FooterNavLink href="/infoHpl" title="HPL Toplaag" />
												<FooterNavLink href="/faq" title="Veel gestelde vragen" />
												<FooterNavLink href="/contact" title="Contact" />
												<FooterNavLink href="/manual" title="Handleiding" />
												<FooterNavLink href="/privacy" title="Privacyverklaring" />
											</ul>
										</div>
										<div className="col-sm-12 col-md-4 content pb-3">
											<h5>CATEGORIEËN</h5>
											<ul className="list-unstyled text-small">
												<FooterNavLink href="/products" title="Webshop" />
												<FooterNavLink href="/douchebak" title="Douchebakken" />
												<FooterNavLink href="/douchewand" title="Waterdichte douchewanden" />
											</ul>
										</div>
									</div>
									<div className="row no-gutters text ">
										<div className="container">
											<p className="m-0 text-center text-white"> &copy; Alle rechten voorbehouden</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-0  col-lg-2 "></div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default Footer;
