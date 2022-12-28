import React from "react";
import Link from "next/link";

const AssortmentCarousel = () => (
	<div className="container ">
		<style jsx>{`
			.carousel-inner img {
				width: 100%;
				height: 100%;
			}

			.assortmentCar {
				max-height: 600px;
				overflow: hidden;
			}

			@media screen and (max-width: 600px) {
				.assortmentCar {
					max-height: 292px;
					overflow: hidden;
				}

				.assortmentTitle {
					position: absolute;
					top: 15px;
					left: 45px;
					bottom: 0;
					right: 0;
					margin: auto;
					color: white;
				}

				.assortmentTitleFont {
					font-weight: bold;
					font-size: 30px;
				}

				.assortmentSubFont {
					font-size: 24px;
				}
			}

			@media screen and (min-width: 601px) {
				.assortmentTitle {
					position: absolute;
					top: 60px;
					left: 140px;
					bottom: 0;
					right: 0;
					margin: auto;
					color: white;
				}

				.assortmentTitleFont {
					font-weight: bold;
					font-size: 68px;
				}

				.assortmentSubFont {
					font-size: 48px;
				}
			}
			/* Medium devices (landscape tablets, 768px and up) */
			@media screen and (min-width: 768px) {
				.assortmentTitle {
					position: absolute;
					top: 60px;
					left: 140px;
					bottom: 0;
					right: 0;
					margin: auto;
					color: white;
				}

				.assortmentTitleFont {
					font-weight: bold;
					font-size: 68px;
				}

				.assortmentSubFont {
					font-size: 48px;
				}
			}
		`}</style>
		<div>
			<div id="assortmentCarousel" className="carousel slide " data-ride="carousel">
				<ul className="carousel-indicators">
					<li data-target="#assortmentCarousel" data-slide-to="0" className="active"></li>
					<li data-target="#assortmentCarousel" data-slide-to="1"></li>
				</ul>
				<div className="carousel-inner ">
					<div className="carousel-item active">
						<img
							src="images/assortment-carousel/assortment-carousel1-1.webp"
							alt="douchewanden en douchebakken"
							className="img-fluid assortmentCar"
						/>
						<div className="assortmentTitle">
							<div className="assortmentTitleFont">
								Douchewanden & <br /> Douchebakken
							</div>
							<div className="assortmentSubFont">Maatwerk uit België</div>
							<br />
							<div className="">
								<Link href="douchewand">
									<button type="button" className="btn btn-dark mr-2">
										Douchewanden
									</button>
								</Link>
								<Link href="douchebak">
									<button type="button" className="btn btn-dark ">
										Douchebakken
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<img
							src="images/assortment-carousel/assortment-carousel2.webp"
							alt="uniek assortiment zelf samenstellen"
							className="img-fluid assortmentCar"
						/>
						<div className="assortmentTitle">
							<div className="assortmentTitleFont">Uniek Assortiment</div>
							<div className="assortmentSubFont">Zelf samenstellen</div>
							<br />
							<div className="">
								<Link href="douchebak">
									<button type="button" className="btn btn-dark mr-2">
										Douchebak op maat
									</button>
								</Link>
								<Link href="douchewand">
									<button type="button" className="btn btn-dark ">
										Douchewanden
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>

				<a className="carousel-control-prev" href="#assortmentCarousel" data-slide="prev">
					<span className="carousel-control-prev-icon"></span>
				</a>
				<a className="carousel-control-next" href="#assortmentCarousel" data-slide="next">
					<span className="carousel-control-next-icon"></span>
				</a>
			</div>
		</div>
	</div>
);

export default AssortmentCarousel;
