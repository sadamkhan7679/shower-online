import React from "react";

const TailorMade = ({ title, alt, faclass }) => (
	<div id="">
		<style jsx>{`
			.socialMediaBtns {
				padding-left: auto;
			}

			.tailorIcon {
				padding-top: 20px;
				font-size: 32px;
				width: 75px;
				height: 75px;
				text-align: center;
				text-decoration: none;
				margin: 5px;
				border-radius: 50%;
				background: grey;
				color: white;
			}

			.fab:hover {
				opacity: 0.5;
			}
		`}</style>

		<div className="container">
			<div className="row">
				<div className="py-5  bg-primary border">
					<div className="socialMediaBtns mt-2 py-5 ">
						<i className={faclass + "tailorIcon"} />
					</div>
					<p className="iconTitle">{title}</p>
				</div>
			</div>
		</div>
	</div>
);

export default TailorMade;
