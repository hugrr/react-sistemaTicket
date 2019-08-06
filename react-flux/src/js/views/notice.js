import React from "react";
import Modal from "../component/modal";
import Anuncio from "../component/anuncio";

//create your first component
export class Notice extends React.Component {
	render() {
		return (
			<div>
				<div className="text-center mt-5">
					<h1>AVISOS</h1>
					<div className="container">
						<div className="row justify-content-md-center">
							<div className="text-center col-md-4 mb-4">
								<div className="card">
									<img
										src="https://st2.depositphotos.com/1008939/7972/i/450/depositphotos_79723078-stock-photo-three-friends-drinking-a-glass.jpg"
										className="card-img-top"
										alt="..."
									/>
									<div className="card-body">
										<h5 className="card-title" />
										<p className="card-text">
											Some quick example text to build on the card title and make up the bulk of
											the content.
										</p>
										<button
											type="button"
											className="btn btn-dark"
											data-toggle="modal"
											data-target="#exampleModalLong">
											Crear Aviso
										</button>
										<Modal />
									</div>
								</div>
								<div />
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<table className="table table-striped table-dark">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Nombre</th>
								<th scope="col">Mostar</th>
								<th scope="col">Fecha</th>
								<th scope="col">Ubicacion</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>Mark </td>
								<td>
									<p>
										<a
											className="btn btn-primary"
											data-toggle="collapse"
											href="#collapseExample1"
											role="button"
											aria-expanded="false"
											aria-controls="collapseExample">
											<i className="fas fa-eye" />
										</a>
									</p>
									<div className="collapse" id="collapseExample1">
										<div className="card text-white bg-success mb-3">
											<div className="card-header">Header</div>
											<div className="card-body">
												<h5 className="card-title">Success card title</h5>
												<p className="card-text">
													Some quick example text to build on the card title and make up the
													bulk of the cards content.
												</p>
											</div>
										</div>
									</div>
								</td>
								<td>Otto</td>
								<td>@mdo</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Jacob</td>
								<td>
									<p>
										<a
											className="btn btn-primary"
											data-toggle="collapse"
											href="#collapseExample2"
											role="button"
											aria-expanded="false"
											aria-controls="collapseExample">
											<i className="fas fa-eye" />
										</a>
									</p>
									<div className="collapse" id="collapseExample2">
										<div className="card text-white bg-success mb-3">
											<div className="card-header">Header</div>
											<div className="card-body">
												<h5 className="card-title">Success card title</h5>
												<p className="card-text">
													Some quick example text to build on the card title and make up the
													bulk of the cards content.
												</p>
											</div>
										</div>
									</div>
								</td>
								<td>Thornton</td>
								<td>@fat</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>Larry</td>
								<td>
									<p>
										<a
											className="btn btn-primary"
											data-toggle="collapse"
											href="#collapseExample3"
											role="button"
											aria-expanded="false"
											aria-controls="collapseExample">
											<i className="fas fa-eye" />
										</a>
									</p>
									<div className="collapse" id="collapseExample3">
										<div className="card text-white bg-success mb-3">
											<div className="card-header">Header</div>
											<div className="card-body">
												<h5 className="card-title">Success card title</h5>
												<p className="card-text">
													Some quick example text to build on the card title and make up the
													bulk of the cards content.
												</p>
											</div>
										</div>
									</div>
								</td>
								<td>the Bird</td>
								<td>@twitter</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
