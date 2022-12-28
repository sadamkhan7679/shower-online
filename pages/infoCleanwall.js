import React from "react";
import Layout from "../components/MyLayout";
import H1Header from "../components/H1Header";
import Link from "next/link";
import Head from "next/head";

function cleanwallCard({ title, text }) {
	return (
		<div>
			<style jsx>{`
				.cardTitle {
					font-size: 24px;
				}
			`}</style>
			<div className="card ">
				<div className="card-body ">
					<p>test</p>
					<p className="card-title">{title}</p>
					<p className="card-text">{text}</p>
				</div>
			</div>
		</div>
	);
}

class InfoCleanwall extends React.Component {
	render() {
		return (
			<div>
				<style jsx>{`
					.cleanwallBg {
						background-repeat: no-repeat;
						background-image: url("/images/cleanwall/titlebar-3.webp");
						height: 300px;
						background-color: #f6f6f6;
						border-color: #d2d3d4;
					}

					.fill-left {
						overflow: hidden;
						min-height: 300px;
						background-size: cover;
						background-position: center;
						background-image: url("/images/cleanwall/cleanwall-1.webp");
					}
					.fill-right {
						overflow: hidden;
						min-height: 300px;
						background-size: cover;
						background-position: center;
						background-image: url("/images/cleanwall/cleanwall-2.webp");
					}
					.specTitle {
						//font-size: 64px;
						font-weight: 700;
						padding-bottom: 10px;
					}

					.specListItem {
						list-style-type: none;
					}
					.card {
						min-width: 21.5em;
						//height: 40em;
						margin: 0 auto;
						border: 0;
					}
				`}</style>
				<Layout>
					<Head>
						<title>Shower Online | Cleanwall</title>
						<meta name="description" content="cleanwall douchewanden" />
						<meta name="keywords" content="Shower Online, cleanwall, douchewanden, sol" />
					</Head>
					<div className="cleanwallBg"></div>
					<div className="container">
						<H1Header title="S.O.L Clean Wall System" />
						<p>
							De S.O.L Clean Wall System zijn hoge druklaminaat platen hebben een toplaag van het merk HPL Arpa Industriale. Ze combineren een
							uitstekende esthetische kwaliteit met eigenschappen en deugden die van belang zijn voor degenen die interieurontwerpsoplossingen
							opvatten of creëren.
						</p>
						<br />
						<div className="row">
							<div className="col-lg-6">
								<h4>Bestand tegen krassen en chemische stoffen.</h4>
								<p>
									Arpa’s HPL is een materiaal dat zowel makkelijk mee werkt als extreem sterk is: bestand tegen krassen, impact, schuur, chemische
									stoffen en warmte.
								</p>
								<p>
									Deze eigenschappen maken het ideaal voor een breed scala aan toepassingen. Om extra eigenschappen te waarborgen: Kan een
									Arpa-laminaat in feite antibacterieel en brandvast zijn, daarom bijzonder geschikt voor toepassingen op openbare plaatsen of in
									gevallen waarin een hoge mate van hygiëne bijzonder belangrijk is, van keukens, laboratoria waar analyses worden uitgevoerd, tot
									transportmiddelen, naar ziekenhuizen.
								</p>
							</div>
							<div className="col-lg-6">
								<h4>Meer dan 50 jaar onderzoek en technologie.</h4>
								<p>
									Al sinds 1954 ontwikkelt en produceert Arpa lndustriale hoogwaardige HPL-panelen voor de meest uiteenlopende toepassingen: van
									architectuur tot interieur design, van zorginstellingen tot scheepswerven, van transport tot horeca, van winkelinterieurs tot
									keukeninrichting.
								</p>
								<p>
									Arpa lndustriale biedt een zeer uitgebreid programma platen met een brede keus aan decors en oppervlaktestructuren. Arpa HPL-platen
									worden geproduceerd in de 150.000 m2 grote fabriek in Bra, in de regio Piemonte, en getuigen van de geniale Italiaanse creativiteit
									die bol staat van energie en originaliteit.
								</p>
							</div>
						</div>

						<div className="row mb-5">
							<div className="col-lg-6 py-3">
								<div className="fill-left" />
							</div>
							<div className="col-lg-6 py-3">
								<div className="fill-right" />
							</div>
						</div>
						<div className="row">
							<div className="col bg-light p-5 text-center">
								<h4>De S.O.L Clean Wall Systemen hebben alle voordelen</h4>
								<div className="pt-3">
									De Clean Wall System is HPL oppervlakte dat vuilafstotend is en schimmel-en bacteriewerend. <br />
									Eenvoudig te plaatsen en licht in gewicht is door de S.O.L technologie en tevens brandvertragend is.
									<br />
									Bestand tegen chemicaliën en geschikt voor voeding.
								</div>
								<div className="py-5 px-2 row justify-content-center">
									<Link href="/douchewand">
										<button type="button" className="btn btn-dark ">
											<i className="fa fa-list pr-2"></i>Douchewanden
										</button>
									</Link>
								</div>
							</div>
						</div>
						<div className="row pt-5">
							<div className="col ">
								<h4 className="text-center">Europese Standaard EN438</h4>
								<br />
								<div className="text-center">Classificatie en typen van S.O.L Clean Wall System volgens Europese standaard EN438.</div>
							</div>
						</div>
						<div className="row py-5">
							<div className="col">
								<div className="card-group">
									<div className="card">
										<div className="card-body">
											<div className="specTitle">VGP</div>
											<li className="specListItem">V: Suitable for Vertical use </li>
											<li className="specListItem">G: General Purpose</li>
											<li className="specListItem">P: Postforming</li>
										</div>
									</div>
									<div className="card">
										<div className="card-body">
											<div className="specTitle">HGS</div>
											<li className="specListItem">H: Suitable for Horizontal use</li>
											<li className="specListItem">G: General Purpose</li>
											<li className="specListItem">S: Standard</li>
										</div>
									</div>
									<div className="card">
										<div className="card-body">
											<div className="specTitle">BTS</div>
											<li className="specListItem">B: Coloured core</li>
											<li className="specListItem">T: Thin ({"<"} 2mm)</li>
											<li className="specListItem">S: Standard</li>
										</div>
									</div>
									<div className="card">
										<div className="card-body">
											<div className="specTitle">MCS</div>
											<li className="specListItem">M: Metallic surface</li>
											<li className="specListItem">C: Compact ( {"<"} 2mm)</li>
											<li className="specListItem">S: Standard</li>
										</div>
									</div>

									<div className="card">
										<div className="card-body">
											<div className="specTitle">BCS</div>
											<li className="specListItem">B: Coloured core</li>
											<li className="specListItem">C: Compact ({">="} 2mm)</li>
											<li className="specListItem">S: Standard</li>
										</div>
									</div>
									<div className="card">
										<div className="card-body">
											<div className="specTitle">CGF</div>
											<li className="specListItem">C: Compact ({">="} 2mm)</li>
											<li className="specListItem">G: General Purpose</li>
											<li className="specListItem">F: Flame retardant</li>
										</div>
									</div>
									<div className="card">
										<div className="card-body">
											<div className="specTitle">MTP</div>
											<li className="specListItem">M: Metallic surfaces</li>
											<li className="specListItem">T: Thin ({"<"}2mm)</li>
											<li className="specListItem">P: Postforming</li>
										</div>
									</div>
									<div className="card">
										<div className="card-body">
											<div className="specTitle">CGS</div>
											<li className="specListItem">C: Compact({">"} 2mm)</li>
											<li className="specListItem">G: General purpose</li>
											<li className="specListItem">S: Standard</li>
										</div>
									</div>

									<div className="card">
										<div className="card-body">
											<div className="specTitle">MTS</div>
											<li className="specListItem">M: Metallic surface</li>
											<li className="specListItem">T: Thin( {"<"} 2mm)</li>
											<li className="specListItem">S: Standard</li>
										</div>
									</div>
									<div className="card">
										<div className="card-body">
											<div className="specTitle">HGF</div>
											<li className="specListItem">H: Suitable for Horizontal use</li>
											<li className="specListItem">G: General Purpose</li>
											<li className="specListItem">F: Flame retardant</li>
										</div>
									</div>
									<div className="card">
										<div className="card-body">
											<div className="specTitle">VGF</div>
											<li className="specListItem">V: Suitable for Vertical use</li>
											<li className="specListItem">G: General Purpose</li>
											<li className="specListItem">F: Flame retardant</li>
										</div>
									</div>
									<div className="card">
										<div className="card-body">
											<div className="specTitle">HGP</div>
											<li className="specListItem">H: Suitable for Horizontal use</li>
											<li className="specListItem">G: General purpose</li>
											<li className="specListItem">P: Postforming</li>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Layout>
			</div>
		);
	}
}
export default InfoCleanwall;
