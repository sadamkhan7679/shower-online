import React from "react";
import Link from "next/link";

const LineItem = ({ item, updateQuantity, deleteItem }) => {
	return (
		<div className="item">
			<style jsx>{`
				.item {
					display: grid;
					grid-template-columns: 1.5fr 0.7fr 0.5fr 0.2fr;
					margin-bottom: 1.5em;
					border: 1px solid rgb(228, 228, 228);
					border-radius: 7px;
					padding: 1em;
				}
				.item-child {
					display: flex;
					align-items: center;
					justify-content: flex-start;
					padding-right: 10px;
				}
				.img-wrp {
					display: flex;
					align-items: center;
				}
				img {
					width: 110px;
					height: 120px;
					margin-right: 1em;
					cursor: pointer;
				}
				.price {
					font-weight: 600;
				}
				svg {
					cursor: pointer;
				}
				.delete {
					margin-bottom: 1rem;
				}
				a {
					cursor: pointer !important;
				}
				.quantity-input {
					display: flex;
					align-items: center;
					justify-content: center;
					border: 1px solid #777;
					border-radius: 100px;
					margin-bottom: 1rem;
				}
				.quantity-icon {
					font-size: 20px;
					font-weight: 700;
					padding: 0 15px;
					height: 30px;
					background: transparent;
					border: 0;
					margin-top: -3px;
					outline: none;
				}
				.quantity {
					display: flex;
					align-items: center;
					justify-content: center;
					height: 30px;
					font-size: 15px;
					font-weight: 500;
					padding: 0 10px;
					margin: 0 !important;
					border-left: 1px solid #777;
					border-right: 1px solid #777;
				}
				p {
					text-align: left !important;
				}
				@media only screen and (max-width: 630px) {
					.item {
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
					}
					.img-wrp {
						flex-direction: column;
					}
				}
			`}</style>
			<div className="img-wrp item-child">
				<Link href={`/products/${item.urlpath}`}>
					<img src={item.urlimg} alt="product" />
				</Link>
				<Link href={`/products/${item.urlpath}`}>
					<p className="title">{item.title}</p>
				</Link>
			</div>
			<div className="item-child">
				<div className="quantity-input">
					<button className="quantity-icon" onClick={() => updateQuantity("-", item.id, item.quantity)}>
						<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24">
							<path d="M0 9h24v6h-24z" />
						</svg>
					</button>
					<p className="quantity">{item.quantity}</p>
					<button className="quantity-icon" onClick={() => updateQuantity("+", item.id, item.quantity)}>
						+
					</button>
				</div>
			</div>
			<div className="item-child">
				<p className="price">{item.price}€</p>
			</div>
			<div className="item-child">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					className="delete"
					onClick={() => {
						deleteItem(item.id);
					}}
				>
					<path d="M17.573 1.848c.083.699-.476 1.152-1.182 1.152h-8.774c-.704 0-1.266-.452-1.182-1.156-1.329.281-4.435 1.159-4.435 2.516 0 .303.103.7.235 1.361 3.175 2.953 15.758 3.088 19.476.244.159-.824.289-1.278.289-1.611 0-1.333-3.091-2.223-4.427-2.506zm3.113 6.897c-.868 4.587-2.184 10.54-2.709 13.287-1.079 1.312-3.545 1.968-6.013 1.968s-4.935-.656-6.013-1.968c-.529-2.884-1.834-8.868-2.684-13.414.679.274 1.408.492 2.149.67 0 0 2.132 10.441 2.382 11.747.722.514 2.237.965 4.166.965 1.933 0 3.452-.454 4.17-.969.224-1.131 2.411-11.661 2.411-11.661.733-.165 1.46-.367 2.141-.625zm-13.069-6.763c.922 0 1.669-1.08 1.669-1.982h5.437c0 .902.747 1.982 1.668 1.982h-8.774z" />
				</svg>
			</div>
		</div>
	);
};

export default LineItem;
