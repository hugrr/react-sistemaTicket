import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class Sidenav extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		//                 (

		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return store.login === true ? (
						<div classNameName="text-center mt-5">
							<nav>
								<div className="sidebar-sticky ">
									<ul className="nav flex-column">
										<li className="nav-item text-center">
											<Link to="/usuarios">
												<span className="nav-link active">
													<i className="fas fa-user" />
													&nbsp;mi cuenta
												</span>
											</Link>
										</li>
										<li className="nav-item text-center">
											<Link to="/avisos">
												<span className="nav-link active">
													<i className="fas fa-clipboard" />
													&nbsp;avisos
												</span>
											</Link>
										</li>
										<li className="nav-item text-center">
											<Link to="/eventos">
												<span className="nav-link active">
													<i className="fas fa-calendar-alt" />
													&nbsp;Eventos
												</span>
											</Link>
										</li>
										<li className="nav-item text-center">
											<Link to="/grupo">
												<span className="nav-link active">
													<i className="fas fa-users" />
													&nbsp; Grupo
												</span>
											</Link>
										</li>
									</ul>
								</div>
							</nav>
						</div>
					) : (
						<></>
					);
				}}
			</Context.Consumer>
		);
	}
}
