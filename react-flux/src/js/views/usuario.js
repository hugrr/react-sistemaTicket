import React, { Component } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ListaTerminos } from "../component/list";
import PropTypes from "prop-types";
import ModalUser from "../component/modaluser";

export class Usuarios extends Component {
	constructor(props) {
		super(props);
		this.storeContext = null;
		this.actionsContext = null;

		this.formSubmit = this.formSubmit.bind(this);
	}
	componentDidMount() {
		this.actionsContext.GetProfile();
	}

	formSubmit(event) {
		event.preventDefault();
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.storeContext = store;
					this.actionsContext = actions;
					return (
						<div className="text-center mt-5">
							<h1>usuario</h1>
							<div className="container">
								<div className="row justify-content-md-center">
									<div className="text-center col-md-4 mb-4">
										<form onSubmit={this.formSubmit}>
											<div className="form-row justify-content-md-center">
												<label htmlFor="validationDefault01">Nombre</label>
												<input
													type="text"
													name="userAccount"
													className="form-control"
													id="validationDefault01"
													placeholder="First name"
													value={store.miembro.userAccount}
												/>
												<label htmlFor="validationDefault02">Email</label>
												<input
													type="email"
													name="mail"
													className="form-control"
													id="validationDefault02"
													placeholder="Email"
													value={store.miembro.mail}
												/>
												<label htmlFor="validationDefault02">telefono</label>
												<input
													type="text"
													name="phone"
													onChange={this.handleInputChange}
													className="form-control"
													id="validationDefault02"
													placeholder="+569 6666 6666"
													value={store.miembro.phone}
												/>
												<label htmlFor="validationDefault02">Fecha de Nacimiento</label>
												<input
													id="date"
													name="fecha_nacimiento"
													onChange={this.handleInputChange}
													type="date"
													className="form-control"
												/>
												<label htmlFor="validationDefault02">Contraseña</label>
												<input
													type="password"
													name="password"
													onChange={this.handleInputChange}
													className="form-control"
													id="inputPassword"
													placeholder="Contraseña"
												/>

												<button
													type="button"
													className="btn btn-primary"
													data-toggle="modal"
													data-target="#exampleModal2">
													modificar usuario
												</button>
												<ModalUser />
											</div>
										</form>
									</div>
									<div className="text-center col-md-4 mb-4">
										<label htmlFor="validationDefaultUsername">grupo</label>
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text" id="inputGroupPrepend2">
													@
												</span>
											</div>
											<input
												type="text"
												name="grupoName"
												onChange={this.handleInputChange}
												className="form-control"
												id="validationDefaultUsername"
												placeholder="nombre del grupo"
												aria-describedby="inputGroupPrepend2"
												required
											/>
											<button
												type="submit"
												onSubmit={this.formSubmit}
												onClick={() => {
													actions.GetGroup({
														grupoName: this.state.grupoName
													});
												}}
												className="btn btn-primary">
												Buscar
											</button>
										</div>
										<label htmlFor="validationDefault02">
											<h2>Terminos y condiciones</h2>
										</label>
										<div>
											<ListaTerminos />
										</div>
										<button className="btn btn-primary" type="submit">
											Ingresar
										</button>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
Usuarios.propTypes = {
	history: PropTypes.array
};
