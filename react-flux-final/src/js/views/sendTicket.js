import React, { Fragment } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export class SendTicket extends React.Component {
	constructor(props) {
		super(props);
		this.storeContext = null;
		this.actionsContext = null;
		this.props.history;
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
													<h1>Gestion de Ticket</h1>
													<span className="intro-text-small">
														debes elegir un usuario para asignale un ticket
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</header>
							<div className="gtco-section border-bottom">
								<div className="gtco-container">
									<div className="row">
										<div className="col-md-12">
											<div className="col-md-6 ">
												<h3>Tickets Disponibles</h3>
												<form>
													<div className="row form-group">
														<div className="col-md-12">
															<div className="feature-left">
																<span className="icon">
																	<i className="ti-check-box" />
																</span>
															</div>
															<div className="feature-copy">
																{" "}
																<label className="sr-only" htmlFor="name" />
																<div className="form-group" />
															</div>{" "}
														</div>
													</div>

													<div className="row form-group">
														<div className="col-md-12">
															<div className="feature-left">
																<table className="table">
																	<thead className="bg-light">
																		<tr />
																	</thead>
																	<tbody>
																		<tr>
																			<td> </td>
																			<td>
																				{" "}
																				<input
																					type="text"
																					value="ticket 1"
																					className="btn btn-primary"
																				/>
																			</td>
																			<td>
																				{" "}
																				<div className="custom-contrti-check-boxol custom-checkbox">
																					<input
																						type="checkbox"
																						className="custom-control-input"
																						id="customCheck1"
																					/>
																					<label
																						className="custom-control-label"
																						htmlFor="customCheck1">
																						selecciona
																					</label>
																				</div>
																			</td>
																		</tr>
																		<tr>
																			<td />
																			<td>
																				{" "}
																				<input
																					type="text"
																					value="ticket 2"
																					className="btn btn-primary"
																				/>
																			</td>
																			<td>
																				<div className="custom-control custom-checkbox">
																					<input
																						type="checkbox"
																						className="custom-control-input"
																						id="customCheck1"
																					/>
																					<label
																						className="custom-control-label"
																						htmlFor="customCheck1">
																						selecciona
																					</label>
																				</div>
																			</td>
																		</tr>
																		<tr>
																			<td> </td>
																			<td>
																				<input
																					type="text"
																					value="ticket 3"
																					ocket
																					className="btn btn-primary"
																				/>
																			</td>
																			<td>
																				<div className="custom-control custom-checkbox">
																					<input
																						type="checkbox"
																						className="custom-control-input"
																						id="customCheck1"
																					/>
																					<label
																						className="custom-control-label"
																						htmlFor="customCheck1">
																						selecciona
																					</label>
																				</div>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</div>
														</div>
													</div>
													<div className="row form-group">
														<div className="col-md-12">
															<div className="feature-left">
																<span className="icon">
																	<i className="ti-user" />
																</span>
																<div className="feature-copy">
																	<label className="sr-only" htmlFor="subject">
																		usuario
																	</label>
																	<select
																		name="usuarioId"
																		id="usuarioId"
																		onChange={e => actions.handleMiembro(e)}
																		type="text"
																		className="form-control">
																		<option value="1">Asignar</option>
																		{store.grupos.length > 0 &&
																			store.grupos.map((item, i) => {
																				return (
																					<option value={item.id} key={i}>
																						{item.grupoName}
																					</option>
																				);
																			})}
																	</select>
																</div>
															</div>
														</div>
													</div>
													<div className="form-group">
														<input
															type="submit"
															value="enviar"
															className="btn btn-primary"
														/>
													</div>
												</form>
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
SendTicket.propTypes = {
	history: PropTypes.object
};
