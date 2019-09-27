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
								<a>
									Sistema Tickets{" "}
									<em>
										{" "}
										<span className="icon">
											<i className="ti-check-box" />
										</span>
									</em>
								</a>
							</div>
						</div>
						<div className="col-xs-8 text-right menu-1">
							<ul>
								<li>
									<Link to="/userAdmin">Mi cuenta</Link>
								</li>

								<li className="btn-cta">
									<Link to="/">
										<span>Inicio</span>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
