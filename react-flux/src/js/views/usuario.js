import React, { Component } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ListaTerminos } from "../component/list";

export class Usuarios extends Component {
	constructor(props) {
		super(props);
		(this.state = {
			userAccount: "Francisco",
			mail: "",
			phone: "",
			fecha_nacimiento: "",
			comunidad: "2019--07",
			user_id: "",
			password: " ",
			terminos: true,
			grupoid: ""
		}),
			{
				grupoName: ""
			};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.formSubmit = this.formSubmit.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		console.log(this.state);
		this.setState({
			[name]: value
		});
	}
	formSubmit(event) {
		event.preventDefault();
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
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
													onChange={this.handleInputChange}
													className="form-control"
													id="validationDefault01"
													placeholder="First name"
													value="Francisco"
													required
												/>
												<label htmlFor="validationDefault02">Email</label>
												<input
													type="email"
													name="mail"
													onChange={this.handleInputChange}
													className="form-control"
													id="validationDefault02"
													placeholder="Email"
													value="usuario@usuario.com"
													required
												/>
												<label htmlFor="validationDefault02">telefono</label>
												<input
													type="text"
													name="phone"
													onChange={this.handleInputChange}
													className="form-control"
													id="validationDefault02"
													placeholder="+569 6666 6666"
												/>
												<label htmlFor="validationDefault02">Fecha de Nacimiento</label>
												<input
													type="text"
													name="fecha_nacimiento"
													onChange={this.handleInputChange}
													className="form-control"
													id="validationDefault02"
													placeholder="26/03/2019"
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
													type="submit"
													onClick={() => {
														actions.saveUser({
															userAccount: this.state.userAccount,
															mail: this.state.mail,
															phone: this.state.phone,
															fecha_nacimiento: this.state.fecha_nacimiento,
															password: this.state.password
														});
													}}
													className="btn btn-secondary btn-sm">
													Guardar
												</button>
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
