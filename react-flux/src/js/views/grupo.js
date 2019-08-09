import React, { Component } from "react";

export class Grupo extends Component {
	render() {
		return (
			<div className="text-center mt-5">
				<h1>grupo</h1>
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="text-center col-md-6 mb-6">
							<form>
								<div className="form-row justify-content-md-center">
									<label htmlFor="validationDefault01">Nombre del Grupo</label>
									<input
										type="text"
										className="form-control"
										id="validationDefault01"
										placeholder="name group"
										value="grupo"
										required
									/>
									<div>
										<label htmlFor="validationDefault02">
											<h2>miembros</h2>
										</label>
										<button className="btn btn-primary btn-sm" type="text">
											invitar
										</button>
									</div>
									<table className="table table-striped table-sm">
										<thead>
											<tr>
												<th>ID </th>
												<th>User</th>
												<th>Mail</th>
												<th>fecha</th>
												<th>estado</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>map.user</td>
												<td>map.mail</td>
												<td>map.fecha</td>
												<td>map.estado</td>
											</tr>
											<tr>
												<td>2</td>
												<td>fco</td>
												<td>fibadilla@uc.cl</td>
												<td>22-22-2019</td>
												<td>activo</td>
											</tr>
											<tr>
												<td>3</td>
												<td>hugo</td>
												<td>hugo@gmail.com</td>
												<td>22-11-2190</td>
												<td>activo</td>
											</tr>
										</tbody>
									</table>

									<button type="button" className="btn btn-primary btn-sm" disabled>
										modificar
									</button>
									<button type="submit" className="btn btn-secondary btn-sm">
										crear
									</button>
								</div>
							</form>
						</div>
						<div className="text-center col-md-6 mb-6">
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
							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<div className="input-group-text">
										<input type="checkbox" aria-label="Checkbox for following text input" />
									</div>
								</div>
								<input type="text" className="form-control" aria-label="Text input with checkbox" />
							</div>
							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<div className="input-group-text">
										<input type="checkbox" aria-label="Checkbox for following text input" />
									</div>
								</div>
								<input type="text" className="form-control" aria-label="Text input with checkbox" />
							</div>
							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<div className="input-group-text">
										<input type="checkbox" aria-label="Checkbox for following text input" />
									</div>
								</div>
								<input type="text" className="form-control" aria-label="Text input with checkbox" />
							</div>
							<button className="btn btn-primary" type="submit">
								crear grupo
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
