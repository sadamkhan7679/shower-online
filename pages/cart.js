import React, { useContext, useState, useEffect } from "react";
import Layout from "../components/MyLayout";
import CartContext from "../contexts/CartContext";
import Link from "next/link";
import CartLineItem from "../components/CartLineItem";
import CartCustomerForm from "../components/CartCustomerForm";
import CartSuccess from "../components/CartSuccess";
import ErrorPopup from "../components/ErrorPopup";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const Cart = () => {
	const { products, setProducts } = useContext(CartContext);
	const [forceUpdate, setForceUpdate] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalItems, setTotalItems] = useState(0);
	const [action, setAction] = useState(0);
	const [isActive, setIsActive] = useState(0);
	const [loading, setLoading] = useState(0);
	const [error, setError] = useState(null);

	const updateQuantity = (type, id, quantity) => {
		const tempProducts = products;

		if (quantity > 1 && type == "-") {
			quantity--;
		}
		if (type == "+") {
			quantity++;
		}

		tempProducts.map((prod) => {
			if (prod.id == id) {
				prod.quantity = quantity;
			}
		});

		setProducts(tempProducts);
		localStorage.setItem("cart", JSON.stringify(tempProducts));
		setForceUpdate(!forceUpdate);
	};

	const updateTotalPrice = () => {
		let price = 0;
		products.map((prod) => {
			price = price + prod.price * prod.quantity;
		});
		setTotalPrice(price.toFixed(2));
	};

	const updateTotalItems = () => {
		let nbr = 0;
		products.map((prod) => {
			nbr = nbr + prod.quantity;
		});
		setTotalItems(nbr);
	};

	const deleteItem = (id) => {
		let tempProducts = products;

		tempProducts = tempProducts.filter((prod) => {
			return prod.id !== id;
		});

		setProducts(tempProducts);
		localStorage.setItem("cart", JSON.stringify(tempProducts));
		setForceUpdate(!forceUpdate);
	};

	const sendOrder = async (name, adress, postalcode, town, phonenumber, email, desc) => {
		try {
			const response = await fetch("/api/sendOrder", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name,
					adress,
					postalcode,
					town,
					phonenumber,
					email,
					desc,
					products,
				}),
			});

			if (response.status !== 200) {
				console.log("an error has occurred");
				setError("An error Occured, Please Try Again!");
			} else {
				setAction(1);
				setLoading(0);
				console.log("order send");
				localStorage.removeItem("cart");
				setProducts([]);
			}
		} catch (error) {
			setLoading(0);
			console.error(error);
		}
	};

	useEffect(() => {
		updateTotalPrice();
		updateTotalItems();
	});

	return (
		<GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
			<div>
				<style jsx>
					{`
						h1 {
							font-size: 24px;
							font-weight: 500 !important;
							text-align: center;
							margin-bottom: 1.75em;
							margin-top: 2em;
							color: #333;
						}
						.cart-grid {
							display: grid;
							grid-template-columns: 74% 24%;
							grid-gap: 2%;
						}
						.item {
							display: flex;
							margin-bottom: 1.5em;
							border: 1px solid #e4e4e4;
							border-radius: 7px;
							align-items: center;
							padding: 1em;
							justify-content: space-between;
						}
						img {
							width: 110px;
							height: 120px;
							margin-right: 1em;
						}
						.top-box {
							border: 1px solid #444;
							margin-bottom: 2em;
							display: flex;
							justify-content: center;
							flex-direction: column;
							padding: 1.5em;
							border-radius: 7px;
						}
						span {
							color: #888;
							line-height: 1.6em;
							margin-bottom: 0.5em;
						}
						.img-wrp {
							display: flex;
							justify-content: center;
							align-items: center;
						}
						.total-price {
							color: #111;
							font-size: 22px;
							font-weight: 600;
							position: absolute;
							transform: translate(5px, -5px);
						}
						.btn-fill {
							background: #343a40;
							border-radius: 5px;
							color: #fff;
							padding: 0 22px !important;
							font-weight: 600;
							transition: all 0.5s;
							outline: none;
							cursor: pointer;
							border: 2px solid #343a40;
							margin: 0;
							margin-top: 1.29em;
							height: 45px !important;
							font-size: 14px;
						}
						.btn-outline {
							width: 100%;
							border-radius: 5px;
							padding: 0 22px !important;
							font-weight: 600;
							font-size: 14px;
							transition: all 0.5s;
							outline: none;
							cursor: pointer;
							margin: 0;
							margin-top: 1.29em;
							height: 45px !important;
							color: #343a40;
							background: transparent;
							border: 2px solid #343a40;
						}
						.title {
							font-size: 15px;
							font-weight: 500;
							color: #666;
							max-width: 250px;
							line-height: 1.5em;
						}
						.price {
							font-weight: 600;
						}
						svg {
							cursor: pointer;
						}
						.quantity {
							font-size: 15px;
							font-weight: 500;
						}
						@media only screen and (max-width: 1086px) {
							.cart-grid {
								display: flex;
								flex-direction: column;
							}
							.right-side {
								display: flex;
								justify-content: space-between;
								flex-wrap: wrap;
							}
							.right-side div {
								margin: 0 1em;
								width: 320px;
							}
						}
						@media only screen and (max-width: 780px) {
							.right-side div {
								margin: 1em 0;
								width: 100%;
							}
							.container {
								max-width: 800px !important;
							}
						}
					`}
				</style>
				<Layout title="Shower Online | Cart" keywords="Shower Online Maatwerk winkelmandje">
					<div className="container">
						<h1>Mijn winkelmandje</h1>
						{/*when registration was succesfull we display a popup.*/}
						<CartSuccess
							action={action}
							setAction={setAction}
							message="Je bestelling is succesvol verstuurd. We nemen zo snel mogelijk contact met je op. "
						/>
						{error ? <ErrorPopup error={error} setIsActive={setIsActive} setError={setError} /> : null}
						{/*when active we hide the basket and display the cartCustomerForm component*/}
						{isActive ? (
							<CartCustomerForm sendOrder={sendOrder} loading={loading} setLoading={setLoading} />
						) : (
							<div className="cart">
								<div className="cart-grid">
									<div className="items">
										{products.map((product, index) => (
											<CartLineItem key={index} item={product} updateQuantity={updateQuantity} deleteItem={deleteItem} />
										))}
									</div>
									<div className="right-side">
										<div className="top-box">
											<span>Aantal items: {totalItems}</span>
											<span>
												Totaal Bedrag: <span className="total-price">€ {totalPrice}</span>
											</span>
											<Link href="/products">
												<button className="btn-outline">Verder winkelen</button>
											</Link>
											<button className="btn-fill" onClick={() => setIsActive(1)}>
												Bevestig bestelling
											</button>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</Layout>
			</div>
		</GoogleReCaptchaProvider>
	);
};

export default Cart;
