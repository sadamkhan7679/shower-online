import React, { useState } from "react";
import Link from "next/link";
import OrderModal from "../components/OrderModal";

const WebshopProduct = ({ id, title, price, urlimg, urlpath, addProduct }) => {
	const [isActive, setIsActive] = useState(-1);

	return (
		<div id="">
			<style jsx>{`
				.card {
					width: 21.5em;
					//height: 40em;
					margin: 0 auto;
				}

				.card:hover {
					border-color: grey;
				}
				.popover {
					background-color: rgba(0, 0, 0, 0.85);
					border-radius: 5px;
					box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
					color: #fff;
					font-size: 12px;
					font-weight: 500;
					font-family: "Helvetica", sans-serif;
					padding: 7px 10px;
					z-index: 4;
					position: absolute;
					left: -60px;
					top: -1px;
				}
				.popover:before {
					border-left: 7px solid rgba(0, 0, 0, 0.85);
					border-bottom: 7px solid transparent;
					border-top: 7px solid transparent;
					content: "";
					display: block;
					left: 100%;
					position: absolute;
				}
			`}</style>

			<div className="container">
				<div className="card mb-5">
					<Link href="/products/[id]" as={`/products/${urlpath}`}>
						<a href="#">
							<img src={urlimg} className="card-img-top img-fluid" alt={title} />
						</a>
					</Link>
					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						<p className="card-text">€ {price}</p>
					</div>
					<div className="card-footer bg-transparent border-light">
						<div className="container">
							<div className="row ">
								<div className="col-6 ">
									<div className="py-1 px-2 row justify-content-center">
										{isActive == id ? <span className="popover">Toegevoegd aan je winkelmandje!</span> : null}
										<button
											type="button"
											className="btn btn-dark w-100"
											onClick={() => {
												addProduct(id, title, price, urlimg, urlpath);
												setIsActive(id);
												setTimeout(() => {
													setIsActive(-1);
												}, 500);
											}}
										>
											<i className="fas fa-shopping-cart pr-2"></i>
										</button>
									</div>
								</div>

								<div className="col-6 ">
									<div className="py-1 px-2 row justify-content-center">
										{/*<Link href="/products/[id]" as={`/products/${id}`}> */}
										<Link href="/products/[id]" as={`/products/${urlpath}`}>
											<button type="button" className="btn btn-dark w-100">
												<i className="fa fa-list pr-2"></i>Details
											</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default WebshopProduct;
