import React from "react";
import Assortment from "../components/Assortment";
import AssortmentCarousel from "../components/AssortmentCarousel";

const AssortmentContainer = () => (
	<div className="container">
		<style jsx>{`
			@media screen and (max-width: 600px) {
				.mediaTitle {
					margin-bottom: 15px;
					margin-top: 10px;
					text-align: center;
				}

				.content {
					text-align: center;
				}
			}

			@media screen and (min-width: 601px) {
				.mediaTitle {
					margin-bottom: 15px;
					line-height: 1.2;
					margin-top: 10px;
				}
			}
		`}</style>

		<div className="row pt-1 no-gutters">
			<div className="col-12 ">
				<div className="row no-gutters">
					<AssortmentCarousel></AssortmentCarousel>
				</div>
			</div>
		</div>
		<div className="row pt-4 ">
			<div className="container">
				<div className="row no-gutters">
					<div className="col-lg-4">
						<Assortment title="Waterdichte douchewanden" subtext="Bekijk onze douchewanden" imageUrl="images/index/assortment-1-2.webp"></Assortment>
					</div>
					<div className="col-lg-4">
						<Assortment title="Webshop parts" subtext="Bekijk onze componenten" imageUrl="images/index/assortment-2-3.webp"></Assortment>
					</div>
					<div className="col-lg-4">
						<Assortment
							title="Douchevloeren op maat"
							subtext="Stel uw eigen douchevloer samen"
							imageUrl="images/index/assortment-3-1.webp"
						></Assortment>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default AssortmentContainer;
