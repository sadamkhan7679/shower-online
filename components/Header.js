import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import CartContext from "../contexts/CartContext";

const Header = () => {
	const { products } = useContext(CartContext);
	const [totalItems, setTotalItems] = useState(0);

	const updateTotalItems = () => {
		let nbr = 0;
		products.map((prod) => {
			nbr = nbr + prod.quantity;
		});
		setTotalItems(nbr);
	};

	useEffect(() => {
		updateTotalItems();
	});

	return (
		<div className="container ">
			<style jsx>{`
				.nbr {
					position: absolute;
					background: #e47573;
					color: #fff;
					width: 18px;
					height: 18px;
					font-size: 12px;
					font-weight: 700;
					border-radius: 100px;
					transform: translate(25px, -12px);
				}
				.headerTitle {
					color: black;
					font-size: 32px;
					text-align: center;
					font-weight: bold;
				}
				.subTitle {
					color: black;
					font-size: 14px;
					text-alignt: center;
				}

				@media screen and (max-width: 600px) {
					.headerTitle {
						color: black;
						font-size: 28px;
						text-align: center;
						font-weight: bold;
					}
					.subTitle {
						color: black;
						font-size: 14px;
						text-alignt: center;
					}
				}

				.logo {
					padding-top: 10px;
					width: 65px;
					height: 65px;
				}
				.logoCenter {
					display: block;
					margin-left: auto;
					margin-right: auto;
				}

				.floatLeft {
					float: left;
				}
				.floatClear {
					clear: left;
				}

				/*START NAVIGATION MENU CSS*/
				.menu-area {
					background: #d61a5e;
				}
				.dropdown-menu {
					padding: 0;
					margin: 0;
					border: 0 solid transition !important;
					border: 0 solid rgba(0, 0, 0, 0.15);
					border-radius: 0;
					-webkit-box-shadow: none !important;
					box-shadow: none !important;
				}
				.mainmenu a {
					color: #000000;
				}
				.nav-item {
					color: #000000;
					font-size: 16px;
					padding: 16px 12px;
					display: block !important;
				}
				.sub-menu-item {
					color: #000000;
					font-size: 16px;
					padding: 2px 2px;
					display: block !important;
					text-align: left;
				}
				.mainmenu .active a,
				.mainmenu .active a:focus,
				.mainmenu .active a:hover,
				.mainmenu li a:hover,
				.mainmenu li a:focus,
				.navbar-default .navbar-nav > .show > a,
				.navbar-default .navbar-nav > .show > a:focus,
				.navbar-default .navbar-nav > .show > a:hover {
					color: #000000;
					background: #ffffff;
					outline: 0;
				}
				/*==========Sub Menu=v==========*/
				.mainmenu .collapse ul > li:hover > a {
					background: #ffffff;
				}
				.mainmenu .collapse ul ul > li:hover > a,
				.navbar-default .navbar-nav .show .dropdown-menu > li > a:focus,
				.navbar-default .navbar-nav .show .dropdown-menu > li > a:hover {
					background: #ffffff;
				}
				.mainmenu .collapse ul ul ul > li:hover > a {
					background: #ffffff;
				}
				.mainmenu .collapse ul ul,
				.mainmenu .collapse ul ul.dropdown-menu {
					background: #ffffff;
				}
				.mainmenu .collapse ul ul ul,
				.mainmenu .collapse ul ul ul.dropdown-menu {
					background: #ffffff;
				}
				.mainmenu .collapse ul ul ul ul,
				.mainmenu .collapse ul ul ul ul.dropdown-menu {
					background: #ffffff;
				}
				/******************************Drop-down menu work on hover**********************************/
				.mainmenu {
					background: none;
					border: 0 solid;
					margin: 0;
					padding: 0;
					min-height: 20px;
					width: 100%;
				}
				@media only screen and (min-width: 767px) {
					.mainmenu .collapse ul li:hover > ul {
						display: block;
					}
					.mainmenu .collapse ul ul {
						position: absolute;
						top: 100%;
						left: 0;
						min-width: 250px;
						display: none;
					}
					/*******/
					.mainmenu .collapse ul ul li {
						position: relative;
					}
					.mainmenu .collapse ul ul li:hover > ul {
						display: block;
					}
					.mainmenu .collapse ul ul ul {
						position: absolute;
						top: 0;
						left: 100%;
						min-width: 250px;
						display: none;
					}
					/*******/
					.mainmenu .collapse ul ul ul li {
						position: relative;
					}
					.mainmenu .collapse ul ul ul li:hover ul {
						display: block;
					}
					.mainmenu .collapse ul ul ul ul {
						position: absolute;
						top: 0;
						left: -100%;
						min-width: 250px;
						display: none;
						z-index: 1;
					}
				}
				@media only screen and (max-width: 767px) {
					.navbar-nav .show .dropdown-menu .dropdown-menu > li > a {
						padding: 16px 15px 16px 35px;
					}
					.navbar-nav .show .dropdown-menu .dropdown-menu .dropdown-menu > li > a {
						padding: 16px 15px 16px 45px;
					}
					.sub-menu-item {
						color: #000000;
						font-size: 16px;
						padding: 2px 2px;
						display: block !important;
						text-align: center;
					}
				}
				/* END HEADER */
			`}</style>

			<div className="row no-gutters">
				<nav className="navbar navbar-expand-lg navbar-light  mainmenu">
					<Link href="/">
						<div className="navbar-header ">
							<div className="floatLeft ">
								<div className="logoCenter">
									<img className="img-fluid logo " alt="Brand" src="/images/logo/showeronline-logo.png" />
								</div>
							</div>
							<div className="floatLeft">
								<div className="headerTitle">Shower Online</div>
								<div className="subTitle">Maatwerk douchewanden & douchebakken</div>
							</div>
							<div className="floatClear" />
						</div>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav nav-fill w-100">
							<Link href="/douchebak">
								<li className="nav-item">
									<a href="#">Maatwerk douchevloer op maat</a>
								</li>
							</Link>
							<Link href="/douchewand">
								<li className="nav-item">
									<a href="#">Waterdichte douchewanden</a>
								</li>
							</Link>

							<Link href="/products">
								<li className="nav-item">
									<a href="#">Webshop</a>
								</li>
							</Link>

							<li className="nav-item dropdown">
								<a
									className="dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Info
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<Link href="/infoCleanwall">
										<li className="sub-menu-item">
											<a href="#">Clean Wall System</a>
										</li>
									</Link>
									<Link href="/infoHpl">
										<li className="sub-menu-item">
											<a href="#">HPL Toplaag</a>
										</li>
									</Link>
									<Link href="/infoColors">
										<li className="sub-menu-item">
											<a href="#">Onze Kleuren</a>
										</li>
									</Link>
								</ul>
							</li>
							<Link href="/cart">
								<li className="nav-item">
									<a href="#">
										{products.length ? <span className="nbr">{totalItems} </span> : null}
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
											<path d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z" />
										</svg>
									</a>
								</li>
							</Link>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Header;
