import React from "react";
import Layout from "../components/MyLayout";
import H1Header from "../components/H1Header";
import ContactComp from "../components/Contact";
import Head from "next/head";

const InfoColors = () => (
	<div>
		<style jsx>{`
			.card {
				// margin: 0 0 1rem;
				//width: 25rem;
				margin-bottom: 3rem;
			}
		`}</style>
		<Layout>
			<Head>
				<title>Shower Online | Onze kleuren</title>
				<meta name="description" content="verschillende kleuren douchebak douchewand" />
				<meta name="keywords" content="Shower Online, Maatwerk, douchewanden, douchebakken" />
			</Head>
			<div className="container">
				<H1Header title="Onze Kleuren" />

				<div className="row">
					<div className="col-lg-6">
						<h4>Wij hebben gekozen voor HPL, maar wat is nu juist HPL?</h4>
						<p>
							HPL is samengesteld uit een aantal lagen. Een harde transparante kunsthars bovenlaag (melamine) met daaronder een in kleur en dessin
							bedrukte décorlaag. Vervolgens worden enkele lagen met fenolhars geïmpregneerd kraftpapier aangebracht. Dit pakket wordt onder hoge druk
							en bij een zeer hoge temperatuur samengeperst tot een harde bekledingsplaat met een dikte van 0,7 mm. Deze HPL-toplaag kan vervolgens
							worden aangebracht op een ondergrond, van bijvoorbeeld onze harde PVC kern.
						</p>

						<img src="/images/colors/hpl.webp" alt="hpl white" className="img-fluid" />
					</div>
					<div className="col-lg-6">
						<h4>Onderhoud en verzorging</h4>
						<p>
							HPL is een zeer sterk materiaal dat goed tegen krassen en hogere temperaturen kan. Het oppervlak is glad en niet poreus, waardoor het
							hygiënisch is en gemakkelijk schoon te houden. Hierdoor is HPL zeer onderhoudsvriendelijk. Normaal, dagelijks vuil kan worden verwijderd
							met een zachte, vochtige doek. Hardnekkiger vlekken en aangekoekte resten kunt u verwijderen met een sopje van zachte zeep of
							gebruikelijke milde (niet schurende) huishoudelijke schoonmaakmiddelen.
						</p>
						<img src="/images/hpl/hplplaat.webp" alt="hpl plaat" className="img-fluid" />
					</div>
				</div>
				<div className="row pt-5">
					<div className="col-12 py-5">
						<h2 className="text-center">S.O.L Kleuren pallet</h2>
					</div>

					<div className="col-sm-12 col-md-4">
						<div className="card">
							<img src="/images/colors/stonelook.webp" className="card-img-top img-fluid" alt="HPL Stone Look" />
							<div className="card-body">
								<h5 className="card-title">HPL Stone look</h5>
								<div className="card-text">
									<p>
										Het materiaal “HPL Lava Stone Look ” kan gebruikt worden voor douchebak en doucheplaten. Het oppervlak is strak egaal, zeer kras
										bestendig en extreem poriëndicht.
									</p>
									<ul>
										<li>Is schimmelvrij</li>
										<li>Lengte plaat is L248 x B123</li>
										<li>Zeer makkelijk in onderhoude</li>
										<li>Is niet blinkend</li>
										<li>Afmeting / hoogte 248cm op breedte 123cm</li>
										<li>Prijs per plaat 379€ excl BTW</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="col-sm-12 col-md-4">
						<div className="card">
							<img src="/images/colors/betonlook.webp" className="card-img-top img-fluid" alt="HPL Beton Look" />
							<div className="card-body">
								<h5 className="card-title">HPL Stone look</h5>
								<div className="card-text">
									<p>
										Het materiaal “HPL Beton look ” kan gebruikt worden voor douchebak en doucheplaten. Het oppervlak is strak egaal , zeer kras
										bestendig en extreem poriëndicht.
									</p>
									<ul>
										<li>Is schimmelvrij</li>
										<li>Lengte plaat is L248 x B123</li>
										<li>Zeer makkelijk in onderhoude</li>
										<li>Is niet blinkend</li>
										<li>Afmeting / hoogte 248cm op breedte 123cm</li>
										<li>Prijs per plaat 379€ excl BTW</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="col-sm-12 col-md-4">
						<div className="card">
							<img src="/images/colors/antracite.webp" className="card-img-top img-fluid" alt="HPL Beton Look" />
							<div className="card-body">
								<h5 className="card-title">HPL Antracite gebouchardeerd</h5>
								<div className="card-text">
									<p>
										Het materiaal “HPL Antracite gebouchardeerd ” kan gebruikt worden voor douchebak en douchewanden. het oppervlak is strak egaal ,
										zeer kras bestendig en extreem poriëndicht.
									</p>
									<ul>
										<li>Is schimmelvrij</li>
										<li>Lengte plaat is L248 x B123</li>
										<li>Zeer makkelijk in onderhoude</li>
										<li>Is niet blinkend</li>
										<li>Afmeting / hoogte 248cm op breedte 123cm</li>
										<li>Prijs per plaat 379€ excl BTW</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-4">
						<div className="card">
							<img src="/images/colors/witgehouchardeerd.webp" className="card-img-top img-fluid" alt="HPL Beton Look" />
							<div className="card-body">
								<h5 className="card-title">HPL Wit gebouchardeerd</h5>
								<div className="card-text">
									<p>
										Het materiaal “HPL Wit gebouchardeerd ” kan gebruikt worden voor douchebak en doucheplaten. Het oppervlak is strak egaal , zeer
										kras bestendig en extreem poriëndicht.
									</p>
									<ul>
										<li>Is schimmelvrij</li>
										<li>Lengte plaat is L248 x B123</li>
										<li>Zeer makkelijk in onderhoude</li>
										<li>Is niet blinkend</li>
										<li>Afmeting / hoogte 248cm op breedte 123cm</li>
										<li>Prijs per plaat 379€ excl BTW</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-4">
						<div className="card">
							<img src="/images/colors/corian.webp" className="card-img-top img-fluid" alt="HPL Beton Look" />
							<div className="card-body">
								<h5 className="card-title">Mat Corian Look</h5>
								<div className="card-text">
									<p>
										Het materiaal “ Mat Corian Look ” kan gebruikt worden voor douchebak en (prijs op aanvraag douchewanden). Bestaat uit een top laag
										van 3 mm in een matte Corian look / ALU / PU.
									</p>
									<p>Kan enkel als douchebak worden gebruikt. Als wand afwerken zijn de platen op aanvraag.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="text-center py-5">
					<h4>Stalen Aanvragen</h4>

					<div>
						Via volgend formulier kan u gratis stalen bekomen. <br />
						Het stalen pakket bestaat uit de 4 wandkleuren, hoekprofiel en het stopprofiel.
					</div>
				</div>

				<ContactComp></ContactComp>
			</div>
		</Layout>
	</div>
);
export default InfoColors;
