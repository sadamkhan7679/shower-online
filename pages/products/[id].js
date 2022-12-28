import React, { useContext, useState } from "react";
import CartContext from "../../contexts/CartContext";
import Head from "next/head";
import Layout from "../../components/MyLayout";
import { getAllProductIds, getProductData } from "../../lib/products";
import SocialShare from "../../components/SocialShare";
import ImageGallery from "react-image-gallery";

const Product = ({ productData }) => {
	const { products, setProducts } = useContext(CartContext);
	const [forceUpdate, setForceUpdate] = useState(0);
	const [isActive, setIsActive] = useState(-1);

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
					<title>{productData.name}</title>
				</Head>
				<div className="container">
					<div className="row">
						<div className="col-md-6 py-5 px-5 ">
							<ImageGallery items={productData.urlimage} showPlayButton={false} />
						</div>
						<div className="col-md-6 py-5 px-5">
							<h3>{productData.name}</h3>
							<p> € {productData.price} </p>
							<p className="pb-2"> {productData.productref}</p>
							<div dangerouslySetInnerHTML={{ __html: productData.contentHtml }} />
							<div className="py-3 px-2 row  ">
								<button
									type="button"
									className="btn btn-dark w-50"
									onClick={() => {
										addProduct(productData.id, productData.name, productData.price, productData.urlimage[0], productData.producturl);
										setIsActive(productData.id);
										setTimeout(() => {
											setIsActive(-1);
										}, 500);
									}}
								>
									<i className="fas fa-shopping-cart pr-2"></i>
								</button>
							</div>
						</div>
					</div>

					<div className="row  ">
						<SocialShare productUrl={productData.producturl} />
					</div>
				</div>
			</Layout>
		</div>
	);
};
export async function getStaticPaths() {
	// Return a list of possible value for id -> eg
	//   {
	//     params: {
	//       id: 'douchebankje'
	//     }
	//   }
	const paths = getAllProductIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	// Fetch necessary data for the blog post using params.id
	const productData = await getProductData(params.id);
	return {
		props: {
			productData,
		},
	};
}

export default Product;
