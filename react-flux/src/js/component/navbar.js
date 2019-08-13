import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
				<a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
					<img
						src="https://i.ibb.co/fkS5Vsr/LIKE-A-CLUB-1.png"
						width="70"
						height="70"
						className="d-inline-block align-top"
						alt=""
					/>
				</a>
				<ul className="navbar-nav px-3">
					<li className="nav-item text-nowrap">
						<a className="nav-link" href="#">
							Sign out
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}
