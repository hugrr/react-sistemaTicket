import React, { Fragment } from "react";
import { Context } from "../store/appContext";
import ModalEvento from "../component/modalEvento";

export class CrearEvento extends React.Component {
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
								style={{ backgroundImage: "url(images/img_1.jpg)" }}>
								<div className="overlay" />
								<div className="gtco-container">
									<div className="row">
										<div className="col-md-12 col-md-offset-0 text-left">
											<div className="row row-mt-15em">
												<div className="col-md-7 mt-text ">
													<span className="intro-text-small"> tu tiempo ..tu espacio</span>
													<h1>Crea Un Evento</h1>
												</div>
											</div>
										</div>
									</div>
								</div>
							</header>
							<div id="gtco-features" className="border-bottom">
								<div className="gtco-container">
									<div className="row">
										<div className="col-md-8 col-md-offset-2 text-center gtco-heading ">
											<h2>Crear</h2>
											<p>
												La comunicacion debe ser fluida, mantente siempre al dia con la
												informacion de tu grupo
											</p>
											<button
												type="button"
												className="btn btn-primary btn-lg "
												data-toggle="modal"
												data-target="#exampleModal1">
												Crear
											</button>
										</div>
									</div>
									<div className="row">
										{!!store.eventos &&
											store.evento.map((item, i) => {
												return (
													<div key={i} className="col-md-3 col-sm-6">
														<div className="feature-center">
															<span className="icon">
																<i className="ti-rocket" />
															</span>
															<h3>{item.name_event}</h3>
															<p>{item.date_event} </p>
															<p>{item.cost} Por persona </p>
														</div>
													</div>
												);
											})}
									</div>
									<ModalEvento />
								</div>
							</div>
						</Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}
