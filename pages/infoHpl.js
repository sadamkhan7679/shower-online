import React from "react";
import Layout from "../components/MyLayout";
import H1Header from "../components/H1Header";
import Link from "next/link";
import Head from "next/head";

const InfoHpl = () => (
	<div>
		<Layout>
			<Head>
				<title>Shower Online | HPL Toplaag</title>
				<meta name="description" content="webshop belgisch maatwerk douchebak douchewand" />
				<meta name="keywords" content="Shower Online, Maatwerk, douchewanden, douchebakken, HPL Toplaag" />
			</Head>
			<div className="container">
				<H1Header title="Wat is een HPL Toplaag" />

				<div className="row">
					<div className="col-lg-6">
						<h4>Wat is HPL?</h4>
						<p>
							HPL is de afkorting van High Pressure Laminate,ook wel laminaat of kunststofplaat genoemd. High Pressure Laminate (HPL) is een
							combinatie van papierpulp en fenolhars, met een harde toplaag van melaminehars.
						</p>
						<p>
							Melaminehars is de hardste synthetisch gemaakte organische stof. Hieruit resulteert ook de grote krasen slijtvastheid van de HPL. De
							taaie en elastische fenolkern maakt het materiaal slagvast. Deze eigenschappen gaan gepaard met een verregaande bestendigheid tegen
							chemicaliën en een grote hittebestendigheid.
						</p>
					</div>
					<div className="col-lg-6">
						<h4>Productieproces</h4>
						<p>
							HPL is samengesteld uit een aantal lagen. Een harde transparante kunsthars bovenlaag (melamine) met daaronder een in kleur en dessin
							bedrukte papieren décorlaag. Vervolgens worden enkele lagen met fenolhars geïmpregneerd kraftpapier aangebracht. Dit pakket wordt onder
							hoge druk en bij een zeer hoge temperatuur samengeperst tot een harde bekledingsplaat met een dikte van 0,7 mm. Deze HPL-toplaag kan
							vervolgens worden aangebracht op een ondergrond, van bijvoorbeeld watervast sandwich paneel van S.O.L
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col bg-light p-5 text-center">
						<h2>Bekijk ons assortiment</h2>

						<div className="py-5 px-2 row justify-content-center">
							<Link href="/webshop">
								<button type="button" className="btn btn-dark ">
									<i className="fas fa-shopping-cart pr-2"></i>Shoppen
								</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="row pt-5">
					<div className="col-lg-6">
						<h4>Onderhoud en eigenschappen</h4>
						<p>
							HPL is een zeer sterk materiaal dat goed tegen krassen en hogere temperaturen kan. Het oppervlak is glad en niet poreus, waardoor het
							hygiënisch is en gemakkelijk schoon te houden. Hierdoor is HPL relatief onderhoudsvriendelijk. Dagelijks afnemen met een vochtige doek
							en uw HPL douche blijft als nieuw. Wanneer u op de volgende punten let, zult u nog langer plezier hebben van uw Met HPL afgewerkte
							docuhewanden of douchebak.
						</p>

						<img src="/images/hpl/hpl-white.webp" alt="hpl white" className="img-fluid w-100" />
					</div>
					<div className="col-lg-6">
						<h4>Onderhoud en verzorging</h4>
						<p>
							Dankzij het sterke, hygiënische oppervlak heeft HPL geen speciale verzorging nodig. Het is eenvoudig schoon te maken en er zijn geen
							speciale schoonmaakmiddelen benodigd. Gebruik nooit (vloeibare) schuurmiddelen of schuursponsjes.
						</p>
						<p>Wij gebruiken de HPL van het merk ARPA de nr1 voor “High quality panels for bathroom design”.</p>
						<img src="/images/hpl/hplplaat.webp" alt="hpl plaat" className="img-fluid w-100" />
					</div>
				</div>
			</div>
		</Layout>
	</div>
);
export default InfoHpl;
