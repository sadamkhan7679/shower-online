import React, { useContext, useState } from "react";
import Layout from "../components/MyLayout";
import H1Header from "../components/H1Header";
import WebshopProduct from "../components/WebshopProduct";
import Head from "next/head";
import CartContext from "../contexts/CartContext";

const webshop = ({ prods }) => {
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

	const filterProds = prods.filter((product) => product.id === 1);
	//prods.map((product)
	return (
		<div>
			<style jsx>{`
				.webshopBg {
					background-repeat: no-repeat;
					background-image: url("images/webshop/bg-webshop.webp");
					height: 200px;
					background-color: #f6f6f6;
					border-color: #d2d3d4;
				}
			`}</style>
			<Layout title="Shower Online" keywords="Shower Online webshop">
				<Head>
					<title>Shower Online | Webshop</title>
					<meta name="description" content="webshop belgisch maatwerk douchebak douchewand" />
					<meta name="keywords" content="Shower Online, Maatwerk, douchewanden, douchebakken" />
				</Head>
				{/*<div className="webshopBg"></div>*/}
				<div className="container ">
					<H1Header title="Webshop" />

					<div className="row ">
						<div className="card-deck pt-4 mx-auto justify-content-center">
							{prods.map((product) => (
								<WebshopProduct
									key={product.id}
									id={product.id}
									title={product.name}
									price={product.price}
									urlimg={product.image}
									urlpath={product.urlpath}
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

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
//note: this only works on PAGES not on components
export async function getStaticProps() {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	const prods = (await import("./product.json")).default;

	// By returning { props: posts }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			prods,
		},
	};
}

export default webshop;
