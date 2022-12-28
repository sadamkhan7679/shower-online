import React from "react";
import { useRouter } from "next/router";

const CartSuccess = ({ action, setAction, message }) => {
	const router = useRouter();
	return (
		<div className="popup-container" style={!action ? { display: "none" } : {}}>
			<style jsx>{`
				.popup-container {
					position: fixed;
					border: 2px solid black;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					z-index: 5000;
					max-width: 400px;
					background: #fff;
					border-radius: 10px;
					width: 100%;
					padding: 3em 2em;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					box-shadow: 0 13px 10px -7px rgba(0, 0, 0, 0.2);
				}
				svg {
					fill: #26d0ce;
				}
				h2 {
					font-size: 28px;
					color: #343a40;
					margin: 1em;
				}
				p {
					font-size: 14px;
					color: #444;
					font-weight: 500;
				}
				.popup-btn {
					padding: 12px 28px;
					border-radius: 4px;
					font-weight: 600;
					white-space: nowrap;
					margin-top: 2em;
					cursor: pointer;
					font-size: 16px;
					line-height: 18px;
					color: #fff;
					background: #343a40;
					border: none;
					outline: none;
				}
			`}</style>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="64"
				height="64"
				viewBox="0 0 24 24"
			>
				<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" />
			</svg>

			<h2>Bedankt !</h2>
			<p>{message}</p>
			<button
				className="popup-btn"
				onClick={() => {
					setAction(0);
					router.push("/");
				}}
			>
				Doorgaan
			</button>
		</div>
	);
};

export default CartSuccess;
