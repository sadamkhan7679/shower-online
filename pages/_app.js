import { CartProvider } from "../contexts/CartContext";
// import "react-image-gallery/styles/scss/image-gallery.scss";

function MyApp({ Component, pageProps }) {
	return (
		<CartProvider>
			<Component {...pageProps} />
		</CartProvider>
	);
}
export default MyApp;
