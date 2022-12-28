import React from "react";
import TailorMade from "../components/TailorMade";
import Link from "next/link";

const TailorMadeContainer = () => (
	<div id="">
		<style jsx>{`
			.tailorIcon {
				padding-top: 25px;
				font-size: 52px;
				width: 100px;
				height: 100px;
				text-align: center;
				text-decoration: none;
				margin: 5px;
				border-radius: 50%;
				background: #333333;
				color: white;
			}
			.tailorTitle {
				text-align: center;
				padding-top: 20px;
				font-size: 42px;
				font-weight: bold;
			}
			.card {
				border: 0;
				background-color: #f6f6f6;
				min-width: 150px;
			}

			.card-text {
				padding-top: 30px;
				font-weight: bold;
				text-align: center;
			}
			.tailorContainer {
				padding-top: 5%;
				padding-bottom: 5%;
				background-color: #f6f6f6;
			}
			@media screen and (min-width: 1100px) {
				.tailorContainer {
					padding-left: 20%;
					background-color: #f6f6f6;
					padding-right: 20%;
				}
			}
		`}</style>

		<div className="container-fluid tailorContainer">
			<h2 className="tailorTitle">Tailor Made for you</h2>

			<br />
			<div className="card-group">
				<div className="card ">
					<div className="card-body text-center">
						<i className="fas fa-tint tailorIcon" />
						<p className="card-text ">100% Waterdicht & Schimmelvrij</p>
					</div>
				</div>
				<div className="card ">
					<div className="card-body text-center">
						<i className="fab fa-yelp tailorIcon" />
						<p className="card-text">Krasbestendig</p>
					</div>
				</div>
				<div className="card ">
					<div className="card-body text-center">
						<i className="fas fa-paint-brush tailorIcon" />
						<p className="card-text">UV Bestendig en Kleurvast</p>
					</div>
				</div>
				<div className="card ">
					<div className="card-body text-center">
						<i className="fas fa-child tailorIcon" />
						<p className="card-text">Onzichtbare Antislip</p>
					</div>
				</div>
				<div className="card ">
					<div className="card-body text-center">
						<i className="fas fa-palette tailorIcon" />
						<p className="card-text">Leverbaar in 7 kleuren</p>
					</div>
				</div>
			</div>
			<div className="py-5 row justify-content-center ">
				<Link href="douchebak">
					<button type="button" className="btn btn-dark ">
						<i className="fas fa-shopping-cart pr-2"></i>Producten Bekijken
					</button>
				</Link>
			</div>
		</div>
	</div>
);

export default TailorMadeContainer;
