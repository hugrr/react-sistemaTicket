import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export default class ModalUser extends React.Component {
	constructor(props) {
		super(props);
		(this.state = {
			userAccount: "",
			mail: "",
			phone: "",
			fecha_nacimiento: "",
			comunidad: "2019--07",
			user_id: "",
			password: " ",
			terminos: true,
			grupoid: ""
		}),
			(this.handleInputChange = this.handleInputChange.bind(this));
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
						<div
							className="modal fade"
							id="exampleModal2"
							tabIndex="-1"
							role="dialog"
							aria-labelledby="exampleModalLabel"
							aria-hidden="true">
							<div className="modal-dialog" role="document">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title" id="exampleModalLabel">
											modificar mis datos
										</h5>
										<button type="button" className="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div className="modal-body">
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
													value={store.miembro.userAccount}
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
											</div>
										</form>
									</div>

									<div className="modal-footer">
										<button type="button" className="btn btn-dark" data-dismiss="modal">
											Close
										</button>
										<button
											className="btn btn-dark"
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
											data-dismiss="modal">
											{""}
											Save changes
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
