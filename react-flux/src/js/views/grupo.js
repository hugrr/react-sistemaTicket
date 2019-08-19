import React, { Component } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ListaTerminos } from "../component/list";
import { ListaMiembros } from "../component/listmiembros";

export class Grupo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			grupoName: "",
			terminos: ""
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
							<h1>grupo</h1>
							<div className="container">
								<div className="row justify-content-md-center">
									<div className="text-center col-md-6 mb-6">
										<form onSubmit={this.formSubmit}>
											<div className="form-row justify-content-md-center">
												<label htmlFor="validationDefault01">Nombre del Grupo</label>
												<input
													type="text"
													name="grupoName"
													onChange={this.handleInputChange}
													className="form-control"
													id="validationDefault01"
													placeholder="name group"
													value="grupo"
													required
												/>
												<label htmlFor="validationDefault02">
													<h2>Terminos y condiciones</h2>
												</label>
												<div className="input-group mb-3">
													<div className="input-group-prepend">
														<div className="input-group-text">
															<input
																type="checkbox"
																aria-label="Checkbox for following text input"
															/>
														</div>
													</div>
													<input
														type="text"
														name="terminos"
														onChange={this.handleInputChange}
														className="form-control"
														aria-label="Text input with checkbox"
													/>
												</div>
												<div className="input-group mb-3">
													<div className="input-group-prepend">
														<div className="input-group-text">
															<input
																type="checkbox"
																aria-label="Checkbox for following text input"
															/>
														</div>
													</div>
													<input
														type="text"
														name="terminos"
														onChange={this.handleInputChange}
														className="form-control"
														aria-label="Text input with checkbox"
													/>
												</div>
												<div className="input-group mb-3">
													<div className="input-group-prepend">
														<div className="input-group-text">
															<input
																type="checkbox"
																aria-label="Checkbox for following text input"
															/>
														</div>
													</div>
													<input
														type="text"
														name="terminos"
														onChange={this.handleInputChange}
														className="form-control"
														aria-label="Text input with checkbox"
													/>
												</div>
												<button
													className="btn btn-primary"
													type="submit"
													onClick={() => {
														actions.saveGrupo({
															grupoName: this.state.grupoName,
															terminos: this.state.terminos
														});
													}}>
													crear grupo
												</button>
											</div>
										</form>
									</div>
									<div className="text-center col-md-6 mb-6">
										<div>
											<label htmlFor="validationDefault02">
												<h2>miembros</h2>
											</label>
											<button className="btn btn-primary btn-sm" type="text">
												invitar
											</button>
										</div>
										<div>
											<ListaMiembros />
										</div>
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
