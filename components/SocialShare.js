import React from "react";
import {
	FacebookShareButton,
	TwitterShareButton,
	FacebookIcon,
	TwitterIcon,
	WhatsappIcon,
	WhatsappShareButton,
	LinkedinIcon,
	LinkedinShareButton,
	PinterestShareButton,
	PinterestIcon,
} from "react-share";

const SocialShare = ({ productUrl }) => (
	<div>
		<style jsx>{`
			.shareBtns {
				padding-top: 10px;
				padding-left: auto;
				min-width: 250px;
				outline: none;

				border-style: none;
			}

			.shareBtns:focus {
				outline: none;
				border: none;
			}

			.shareText {
				padding-top: 30px;
				text-align: center;
			}
		`}</style>
		<div className="container ">
			<hr />

			<div className="row no-gutters  pt-3 justify-content-center ">
				<div className="col-md-3 text-center shareBtns my-2 ">
					<TwitterShareButton url={productUrl} title="Shower Online | Maatwerk douchewanden & douchebakken" className="pl-3">
						<TwitterIcon size={60} round={true} />
					</TwitterShareButton>
					<p className="shareText">Tweet dit product </p>
				</div>

				<div className="col-md-3 text-center shareBtns my-2">
					<FacebookShareButton url={productUrl} title="Shower Online | Maatwerk douchewanden & douchebakken" className="pl-3">
						<FacebookIcon size={60} round={true} />
						<p className="shareText">Deel op facebook</p>
					</FacebookShareButton>
				</div>

				<div className="col-md-3 text-center shareBtns my-2">
					<PinterestShareButton url={productUrl} title="Shower Online | Maatwerk douchewanden & douchebakken" className="pl-3">
						<PinterestIcon size={60} round={true} />
						<p className="shareText">Pin dit product</p>
					</PinterestShareButton>
				</div>

				<div className="col-md-3 text-center shareBtns my-2">
					<WhatsappShareButton url={productUrl} title="Shower Online | Maatwerk douchewanden & douchebakken" className="pl-3">
						<WhatsappIcon size={60} round={true} />
						<p className="shareText">Deel via whatsapp</p>
					</WhatsappShareButton>
				</div>
			</div>
		</div>
	</div>
);
export default SocialShare;
