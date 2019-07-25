import React from "react";
import { Link } from "react-router-dom";

export class Sidenav extends React.Component {
	render() {
		return (
			<div className="row">
				<nav className="col-md-2 d-none d-md-block bg-light sidebar">
					<div className="sidebar-sticky">
						<ul className="nav flex-column">
							<li className="nav-item">
								<a className="nav-link active">
									<i className="fas fa-user" />
									users
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link active">
									<i className="fas fa-users" />
									group
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link active">
									<i className="fas fa-clipboard" />
									avisos
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link active">
									<i className="fas fa-calendar-day" />
									event
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
