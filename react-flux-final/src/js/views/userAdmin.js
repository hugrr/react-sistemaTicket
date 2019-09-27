import React, { Fragment } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";

export class UserAdmin extends React.Component {
	constructor(props) {
		super(props);
		this.storeContext = null;
		this.actionsContext = null;
	}
	componentDidMount() {
		this.actionsContext.getMiembro();
		this.actionsContext.getGrupos();
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.storeContext = store;
					this.actionsContext = actions;
					return (
						<Fragment>
							<header
								id="gtco-header"
								className="gtco-cover gtco-cover-sm"
								role="banner"
								style={{ backgroundImage: "url(images/img_2.jpg)" }}>
								<div className="overlay" />
								<div className="gtco-container">
									<div className="row">
										<div className="col-md-12 col-md-offset-0 text-left">
											<div className="row row-mt-15em">
												<div className="col-md-7 mt-text">
													<span className="intro-text-small">Bienvenido</span>
													<h1>Usuario Administrador</h1>
												</div>
											</div>
										</div>
									</div>
								</div>
							</header>
							<div className="gtco-section border-bottom">
								<div className="gtco-container">
									<div className="row">
										<div className="col-md-8 text-left gtco-heading">
											<h2> Mi Cuenta</h2>
											<p>tus datos y ticket para gestionar</p>
											<div className="form-group">
												<Link to="/sendTicket">
													<input
														type="submit"
														value="Asignacion de ticket"
														className="btn btn-primary"
													/>
												</Link>
											</div>
										</div>
									</div>
									<div className="row">
										<Animated
											animationIn="bounceInLeft"
											animationOut="fadeOut"
											isVisible={true}
											data-animate-effect="fadeInLeft">
											<div className="col-md-6">
												<img
													src="images/user2.png"
													className="img-responsive"
													alt="Free HTML5 Bootstrap Template"
												/>
											</div>
											<div className="col-md-6 mt-sm">
												<div className="feature-left">
													<span className="icon">
														<i className="ti-user" />
													</span>
													<div className="feature-copy">
														<h3>Nombre</h3>
														<p>{store.miembro.userAccount} </p>
													</div>
												</div>
												<div className="feature-left">
													<span className="icon">
														<i className="ti-email" />
													</span>
													<div className="feature-copy">
														<h3>Correo</h3>
														<p>{store.miembro.mail}</p>
													</div>
												</div>
											</div>
										</Animated>
									</div>
								</div>
							</div>
						</Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}
