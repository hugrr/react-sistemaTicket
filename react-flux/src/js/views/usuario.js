import React, { Component } from "react";

export class Usuarios extends Component {
	render() {
		return (
			<div className="text-center mt-5">
				<form>
					<div className="form-row">
						<div className="col-md-6 mb-6">
							<div className="col-md-4 mb-3">
								<label htmlFor="validationDefault01">Nombre</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault01"
									placeholder="First name"
									value="Francisco"
									required
								/>
							</div>
							<div className="col-md-4 mb-3">
								<label htmlFor="validationDefault02">Apellido</label>
								<input
									type="text"
									className="form-control"
									id="validationDefault02"
									placeholder="Badilla"
									value="Otto"
									required
								/>
							</div>
							<div className="col-md-4 mb-3">
								<label htmlFor="validationDefaultUsername">Usuario</label>
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
										placeholder="Username"
										aria-describedby="inputGroupPrepend2"
										required
									/>
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
										acepto los terminos 1
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
						</div>
						<button className="btn btn-primary" type="submit">
							cambiar
						</button>
					</div>
				</form>
			</div>
		);
	}
}
