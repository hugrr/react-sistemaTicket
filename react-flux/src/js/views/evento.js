import React from "react";

import ModalForm from "../component/modalForm";
import Anuncio from "../component/anuncio";

export class Evento extends React.Component {
	render() {
		return (
			<div>
				<div className="text-center mt-5">
					<h1>EVENTOS</h1>
					<button
						type="button"
						className="btn btn-primary btn-lg "
						data-toggle="modal"
						data-target="#exampleModal1">
						Crear Evento
					</button>
					<ModalForm />

					<table className="table table-striped table-dark">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">First</th>
								<th scope="col">Last</th>
								<th scope="col">Handle</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>Mark</td>
								<td>Otto</td>
								<td>
									<button type="button" className="btn btn-success">
										<i className="fas fa-eye" />
									</button>
									<button type="button" className="btn btn-success">
										<i className="fas fa-edit" />
									</button>
								</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Jacob</td>
								<td>Thornton</td>
								<td>
									<button type="button" className="btn btn-success">
										<i className="fas fa-eye" />
									</button>
									<button type="button" className="btn btn-success">
										<i className="fas fa-edit" />
									</button>
								</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>Larry</td>
								<td>the Bird</td>
								<td>
									<button type="button" className="btn btn-success">
										<i className="fas fa-eye" />
									</button>
									<button type="button" className="btn btn-success">
										<i className="fas fa-edit" />
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
