import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="gtco-nav" role="navigation">
				<div className="gtco-container">
					<div className="row">
						<div className="col-sm-4 col-xs-12">
							<div id="gtco-logo">
								<a href="index.html">
									Like A Club <em>.</em>
								</a>
							</div>
						</div>
						<div className="col-xs-8 text-right menu-1">
							<ul>
								<li>
									<a href="features.html">Features</a>
								</li>
								<li>
									<a href="tour.html">Tour</a>
								</li>
								<li className="has-dropdown">
									<a href="#">Dropdown</a>
									<ul className="dropdown">
										<li>
											<a href="#">Web Design</a>
										</li>
										<li>
											<a href="#">eCommerce</a>
										</li>
										<li>
											<a href="#">Branding</a>
										</li>
										<li>
											<a href="#">API</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="pricing.html">Pricing</a>
								</li>
								<li>
									<a href="contact.html">Contact</a>
								</li>
								<li className="btn-cta">
									<a href="#">
										<span>Get started</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
