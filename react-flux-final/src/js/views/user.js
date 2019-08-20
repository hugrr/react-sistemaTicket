import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class Usuarios extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
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
												<div
													className="col-md-7 mt-text animate-box"
													data-animate-effect="fadeInUp">
													<span className="intro-text-small">Bienvenido</span>
													<h1>Francisco acountuser</h1>
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
											<h2>Mis Datos</h2>
											<p>Estos son tus datos registrados</p>
										</div>
									</div>

									<div className="row">
										<div className="col-md-6">
											<img
												src="images/user2.png"
												className="img-responsive"
												alt="Free HTML5 Bootstrap Template"
											/>
										</div>
										<div className="col-md-6 mt-sm">
											<div className="feature-left animate-box" data-animate-effect="fadeInLeft">
												<span className="icon">
													<i className="ti-user" />
												</span>
												<div className="feature-copy">
													<h3>Nombre</h3>
													<p>usuario fbadilla</p>
												</div>
											</div>

											<div className="feature-left animate-box" data-animate-effect="fadeInLeft">
												<span className="icon">
													<i className="ti-email" />
												</span>
												<div className="feature-copy">
													<h3>Correo</h3>
													<p>Tucorreo@correo.cl</p>
												</div>
											</div>

											<div className="feature-left animate-box" data-animate-effect="fadeInLeft">
												<span className="icon">
													<i className="ti-calendar" />
												</span>
												<div className="feature-copy">
													<h3>Fecha de nacimiento</h3>
													<p>26-03-1990</p>
												</div>
											</div>

											<div className="feature-left animate-box" data-animate-effect="fadeInLeft">
												<span className="icon">
													<i className="ti-agenda" />
												</span>
												<div className="feature-copy">
													<h3>Telefono</h3>
													<p>+569 6666 6666</p>
												</div>
											</div>

											<div className="feature-left animate-box" data-animate-effect="fadeInLeft">
												<span className="icon">
													<i className="ti-bolt" />
												</span>
												<div className="feature-copy">
													<h3>Mi Grupo</h3>
													<p>club 666</p>
												</div>
											</div>
										</div>
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
