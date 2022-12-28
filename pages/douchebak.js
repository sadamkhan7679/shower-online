import Layout from "../components/MyLayout";
import H1Header from "../components/H1Header";
import React from "react";
import Head from "next/head";
import ImageGallery from "react-image-gallery";
import douchebakData from "./douchebak.json";

const douchebak = () => (
	<div>
		<style jsx>{`
			.image-gallery {
				width: 40%;
				height: auto;
			}

			.image-gallery-slide img {
				width: 100%;
				height: auto;
				max-height: 80vh;
				object-fit: cover;
				overflow: hidden;
				object-position: center center;
			}

			.fullscreen .image-gallery-slide img {
				max-height: 100vh;
			}
		`}</style>
		<Layout>
			<Head>
				<title>Shower Online | Douchebak</title>
				<meta name="description" content="belgisch maatwerk douchebak op maat" />
				<meta name="keywords" content="Shower Online Maatwerk douchewanden douchebakken" />
			</Head>
			<div className="container">
				<H1Header title="Maatwerk douchevloer op maat" />

				<div className="row">
					<div className="col-md-6">
						<ImageGallery items={douchebakData.urlimage} showPlayButton={false} />

						{/*
          	<img
							src="/images/douchebak/douchebak-1.png"
							alt="sol douchebak"
							className="img-fluid"
						/>
          */}
					</div>
					<div className="col-md-6 pt-4">
						<p>Gelieve ons te contacteren indien u andere vormen wenst.</p>
						<p>Breedte: 70cm - 120cm</p>
						<p>Lengte: 80cm - 298cm</p>
					</div>
				</div>
				<div className="row pt-5">
					<div className="col-md-2">Omschrijving </div>
					<div className="col-md-10 border p-4">
						<h4>S.O.L douchebakken zijn 100% maatwerk</h4>

						<ul>
							<li>Zeer vlak</li>
							<li>Hoogte 28mm </li>
							<li>Anti-slip </li>
							<li>Vele modellen en uitvoeringen</li>
							<li>Duurzaam</li>
							<li>Levering inclusief vlakke afvoerkap</li>
						</ul>
						<br />

						<p>
							De toplaag van S.O.L is een antislip, krasvast, kleurvast, brandvast (Klasse 1), slijtvast, drukvast en heeft een hele goede akoestische
							demping. Deze toplaag is aangebracht op een harde structuur van 28mm.Deze unieke combinatie zorgt voor een licht geheel, met een
							uitzonderlijke stevigheid , stabiliteit maar ook de akustische kenmerken zijn een belangrijk troef. De bodemplaat is onder afschot
							geperst en gelijmd, waardoor een goede afvloei van water gegarandeerd wordt en kan tot een lengte van 300 cm worden gemaakt. Antislip
							met een R-waarde {">"} 13, en toch gemakkelijk schoon te houden en inox waterdichte wandaansluiting door de ingebouwde tegellip of
							plaatlip en een zachte gepatenteerde toplaag, voelt ontzettend zacht aan en een perfecte onzichtbare anti-slip. Zo zorgen wij voor uw
							perfecte douchevloer die altijd past !!!
						</p>
						<p>Extra info:</p>
						<ul>
							<li>Leverbaar in 5 kleuren</li>
							<li>Voorzien van afschot</li>
							<li>Douchebak op maat te bestellen maximale lengte 298 cm</li>
							<li>Op de mm nauwkeurig afgewerkt</li>
							<li>Antislip R11, Natte opstelling C</li>
							<li>Onderhoudsvrij, 100% bacterievrij</li>
							<li>Waterdicht en ondoordringbaar</li>
							<li>Douchebak te plaatsen op iedere ondergrond, vlak in te bouwen</li>
							<li>Zeer licht in gewicht, makkelijk te plaatsen</li>
							<li>28 mm hoogte</li>
						</ul>
					</div>
				</div>
				<br />
			</div>
		</Layout>
	</div>
);

export default douchebak;
