import Layout from "../components/MyLayout";
import React from "react";
import TailorMadeContainer from "../components/TailorMadeContainer";
import AssortmentContainer from "../components/AssortmentContainer";
import H1Header from "../components/H1Header";
import Head from "next/head";

const Index = ({ users }) => (
	<div>
		<style jsx>{``}</style>
		<Layout>
			<Head>
				<title>Shower Online | Home</title>
				<meta name="description" content="Shower-Online de oplossing voor je douchevloer of wand op maat" />
				<meta name="keywords" content="Shower Online Maatwerk douchewanden douchebakken douchevloer" />
			</Head>

			<AssortmentContainer></AssortmentContainer>
			<TailorMadeContainer></TailorMadeContainer>
			<div className="container">
				<H1Header title="Uw DoucheRuimte op MAAT gemaakt" />
				<div className="row">
					<div className="col-lg-6 ">
						<p>
							SOL- douchevloeren & wanden zijn speciaal ontwikkeld voor de doe-het-zelver en is een doorontwikkeld product van de douchebak fabrikant
							Eauplus, die reeds jaren ervaring heeft in het maken van antislip en antibacteriële douchewanden en douchebakken.
						</p>
						<p>
							De toplagen van een SOL plaat hebben een hoge moleculaire dichtheid, deze laag is ongevoelig voor weersinvloeden zoals vocht, grote
							temperatuursverschillen en UV straling. SOL is dus een zeer duurzame plaat. De plaat is bovendien buitengewoon sterk, het heeft een zeer
							hoge weerstand tegen buiging en breken en slecht 0,6cm dik. Door deze eigenschappen worden SOL platen veel gebruikt voor badkamer &
							buitentoepassingen.
						</p>
						<p>
							De SOL wanden en douchevloeren kunnen niet breken of barsten en zijn 100% kleurvast omdat wij niet werken zoals de bestaande merken met
							een verflaag of acryllaag 0,2mm maar met oerdegelijke HPL.
						</p>
						<p>
							In vergelijking met andere douchewanden zoals PVC of acryl wanden zijn de S.O.L afwerkt met een HPL zo zijn de wanden niet glanzend ,
							kras bestendig en 100% kleurvast. HPL is dankzij het melaminehars, de hardste synthetisch gemaakte organische stof die bestendig is
							tegen chemicaliën en een grote hittebestendigheid.Het oppervlak is glad en niet poreus, waardoor het hygiënisch is en gemakkelijk schoon
							te houden is.
						</p>
					</div>
					<div className="col-lg-6 text">
						<p>
							Wij werken enkel met de HPL van het merk ARPA de nr1 voor ” High quality panels for bathroom“. De installatie is zeer eenvoudig dankzij
							de speciaal ontworpen hoekprofielen en afwerkingprofielen. De panelen zijn slechts 6 mm dik en 123 cm breed op 248 cm hoog en kunnen
							gemakkelijk over de oude tegels geplaats worden.
						</p>
						<p>
							Maatwerk is bij SOL altijd standaard, je kan op een eenvoudige manier zelf uw afmetingen van douchewanden en douchebak opgeven en de
							kostprijs berekenen.
						</p>
						<p>
							Als primeur in Europa hebben wij douchevloeren tot 300 cm lengte, uit één stuk gemaakt en slechts 25kg. De SOL wanden en douchevloeren
							kunnen niet breken of barsten en zijn 100% kleurvast.
						</p>
						<p>
							U koopt rechtsreeks aan bij de fabrikant, hier door kunnen wij onze prijzen lager aanbieden.De lagere prijs berekenen we door aan u !
						</p>
						<p>
							Hierdoor is Shower-Online gemiddeld 25% tot 35% goedkoper dan andere maatwerk douchevloeren van A-merken. Doe zelf de test bij uw
							sanitaire groothandel en vergelijk met andere maatwerk douchemerken zoals Duravit, Bette, Hoesh, Ideal Standart, Artissan, RESOPAL® -HPL
							Aquaconcept, Billi’o,Fiora,enz…
						</p>
						<p>Alles is leverbaar met een korte levertijd.</p>
					</div>
				</div>
			</div>
		</Layout>
	</div>
);

export default Index;
