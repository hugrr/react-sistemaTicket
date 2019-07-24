import React, { Component } from "react";

export class Usuarios extends Component {
	render() {
		return (
			<div className="text-center mt-5">
				<h1>usuario</h1>
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="text-center col-md-4 mb-4">
							<form>
								<div className="form-row justify-content-md-center">
									<label htmlFor="validationDefault01">Nombre</label>
									<input
										type="text"
										className="form-control"
										id="validationDefault01"
										placeholder="First name"
										value="Francisco"
										required
									/>
									<label htmlFor="validationDefault02">Email</label>
									<input
										type="email"
										className="form-control"
										id="validationDefault02"
										placeholder="Email"
										value="usuario@usuario.com"
										required
									/>
									<label htmlFor="validationDefault02">telefono</label>
									<input
										type="text"
										className="form-control"
										id="validationDefault02"
										placeholder="+569 6666 6666"
									/>
									<label htmlFor="validationDefault02">Fecha de Nacimiento</label>
									<input
										type="text"
										className="form-control"
										id="validationDefault02"
										placeholder="+569 6666 6666"
									/>
									<label htmlFor="validationDefault02">Contraseña</label>
									<input
										type="password"
										className="form-control"
										id="inputPassword"
										placeholder="Contraseña"
									/>
									<button type="button" className="btn btn-primary btn-sm" disabled>
										modificar
									</button>
									<button type="submit" className="btn btn-secondary btn-sm">
										crear
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
									className="form-control"
									id="validationDefaultUsername"
									placeholder="nombre del grupo"
									aria-describedby="inputGroupPrepend2"
									required
								/>
								<button className="btn btn-primary" type="text">
									Buscar
								</button>
							</div>
							<label htmlFor="validationDefault02">
								<h2>Terminos y condiciones</h2>
							</label>
							<div className="form-group">
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										value=""
										id="invalidCheck2"
										required
									/>
									<label className="form-check-label" htmlFor="invalidCheck2">
										map. terminos y condiciones
									</label>
								</div>
							</div>
							<div className="form-group">
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										value=""
										id="invalidCheck2"
										required
									/>
									<label className="form-check-label" htmlFor="invalidCheck2">
										acepto los terminos 2
									</label>
								</div>
							</div>
							<div className="form-group">
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										value=""
										id="invalidCheck2"
										required
									/>
									<label className="form-check-label" htmlFor="invalidCheck2">
										acepto los terminos 3
									</label>
								</div>
							</div>
							<button className="btn btn-primary" type="submit">
								Ingresar
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
