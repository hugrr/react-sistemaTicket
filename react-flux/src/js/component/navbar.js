import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-dark site-header sticky-top py-1">
				<div className="container d-flex flex-column flex-md-row justify-content-between">
					<Link to="/usuarios">
						<span className="py-2 d-none d-md-inline-block">usuario</span>
					</Link>
					<Link to="/">
						<span className="py-2 d-none d-md-inline-block">grupo</span>
					</Link>
					<Link to="/">
						<span className="py-2 d-none d-md-inline-block">avisos</span>
					</Link>
					<Link to="/">
						<span className="py-2 d-none d-md-inline-block">eventos</span>
					</Link>
					<Link to="/">
						<span className="py-2 d-none d-md-inline-block">mapas</span>
					</Link>
					<Link to="/">
						<span className="py-2 d-none d-md-inline-block">votacion</span>
					</Link>
				</div>
			</nav>
		);
	}
}
