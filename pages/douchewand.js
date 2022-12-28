import React, { useContext, useState } from "react";
import CartContext from "../contexts/CartContext";
import Layout from "../components/MyLayout";
import H1Header from "../components/H1Header";
import WebshopProduct from "../components/WebshopProduct";
import Head from "next/head";

const DoucheWand = ({ prods }) => {
	const { products, setProducts } = useContext(CartContext);
	const [forceUpdate, setForceUpdate] = useState(0);

	const addProduct = (id, title, price, urlimg, urlpath) => {
		const product = {
			id,
			title,
			price,
			urlimg,
			urlpath,
			quantity: 1,
		};
		let tempArray = products;
		let availble = 0;

		tempArray.map((prod) => {
			if (prod.id === product.id) {
				availble = 1;
				prod.quantity++;
			}
		});

		if (!availble) {
			tempArray.push(product);
			setProducts(tempArray);
			localStorage.setItem("cart", JSON.stringify(tempArray));
		} else {
			setProducts(tempArray);
			localStorage.setItem("cart", JSON.stringify(tempArray));
		}

		setForceUpdate(!forceUpdate);
	};
	return (
		<div>
			<Layout>
				<Head>
					<title>Shower Online | Douchewand</title>
					<meta name="description" content="belgisch maatwerk douchewand op maat" />
					<meta name="keywords" content="Shower Online Maatwerk douchewanden" />
				</Head>
				<div className="container">
					<H1Header title="Waterdichte douchewanden" />

					<div className="row ">
						<div className="card-deck pt-4 mx-auto justify-content-center">
							{prods
								.filter((product) => product.category.some((cat) => cat.includes("douchewand")))
								.map((filterarray) => (
									<WebshopProduct
										key={filterarray.id}
										id={filterarray.id}
										title={filterarray.name}
										price={filterarray.price}
										urlimg={filterarray.image}
										urlpath={filterarray.urlpath}
										addProduct={addProduct}
									></WebshopProduct>
								))}
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
};

export async function getStaticProps() {
	//we retrieve product.json and then filter on category to display only part of them
	const prods = (await import("./product.json")).default;
	return {
		props: {
			prods,
		},
	};
}

export default DoucheWand;
