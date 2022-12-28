import React from "react";

const ErrorPopup = ({ error, setError, setIsActive }) => {
	return (
		<div className="popup-container">
			<style jsx>{`
				.popup-container {
					position: fixed;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					z-index: 5000;
					max-width: 450px;
					background: #fff;
					border-radius: 10px;
					width: 100%;
					padding: 3em 2em;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					box-shadow: rgb(237 239 247 / 30%) 0px 6px 6px,
						rgb(237 239 247 / 30%) 0px 6px 6px;
				}
				svg {
					fill: rgb(248, 75, 96);
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
				<path d="M16.971 0h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-4.971 19.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm.55-4.748c-.029.283-.266.498-.55.498s-.521-.215-.55-.498l-.801-8.01c-.08-.8.55-1.492 1.351-1.492s1.431.692 1.351 1.493l-.801 8.009z" />
			</svg>

			<h2>Er is iets misgegaan !</h2>
			<p>{error}</p>
			<button
				className="popup-btn"
				onClick={() => {
					setIsActive(0);
					setError(null);
				}}
			>
				Probeer het later opnieuw.
			</button>
		</div>
	);
};

export default ErrorPopup;
