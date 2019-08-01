import React, { Component } from "react";
import { Context } from "../store/appContext";

export class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userAccount: "",
			mail: "",
			phone: "",
			fecha_nacimiento: "",
			comunidad: "2019--07",
			user_id: "",
			password: " ",
			terminos: true
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
						<div classNameName="text-center mt-5">
							<div className="container">
								<div className="row justify-content-md-center">
									<div className="text-center col-md-4 mb-4">
										<form onSubmit={this.formSubmit} className="form-signin">
											<h1 className="h3 mb-3 font-weight-normal">ingresar</h1>
											<label htmlFor="inputEmail" className="sr-only" />
											<input
												type="email"
												id="inputEmail"
												className="form-control"
												placeholder="Correo electronico"
												required=""
											/>
											<label htmlFor="inputPassword" className="sr-only">
												Contraseña
											</label>
											<input
												type="password"
												id="inputPassword"
												className="form-control"
												placeholder="Contraseña"
												required=""
											/>
											<div className="checkbox mb-3">
												<label>
													recordarme
													<input type="checkbox" value="remember-me" />
												</label>
											</div>
											<button className="btn btn-lg btn-primary btn-block" type="submit">
												Ingresar
											</button>
											<p className="mt-5 mb-3 text-muted">© 2019</p>
										</form>
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
