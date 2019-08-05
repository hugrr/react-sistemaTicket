import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export default class ModalForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name_event: "",
			date_event: "",
			cost: "",
			event_id: 1
		};
		this.handleInputChange = this.handleInputChange.bind(this);
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

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div
							className="modal fade"
							id="exampleModal1"
							tabIndex="-1"
							role="dialog"
							aria-labelledby="exampleModalLabel"
							aria-hidden="true">
							<div className="modal-dialog" role="document">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title" id="exampleModalLabel">
											Crear Evento
										</h5>
										<button type="button" className="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div className="modal-body">
										<form>
											<div className="form-row">
												<div className="form-group col-md-6">
													<label htmlFor="inputNombre">Nombre</label>
													<input
														type="text"
														name="name_event"
														onChange={this.handleInputChange}
														className="form-control"
														id="inputNombre"
														placeholder=""
													/>
												</div>
												<div className="form-group">
													<label htmlFor="inputDireccion">Direccion</label>
													<input
														name=""
														onChange={this.handleInputChange}
														type="text"
														className="form-control"
														id="inputdireccion"
														placeholder=""
													/>
												</div>

												<div />
											</div>

											<div className="form-row">
												<div className="form-group col-md-6">
													{" "}
													<label htmlFor="inputTime">hora Evento</label>
													<input
														type="time"
														name="usr_time"
														className="form-control"
														id="inputTime"
													/>
													<label htmlFor="inputDate">Fecha Evento</label>
													<input
														id="date"
														name="date_event"
														onChange={this.handleInputChange}
														type="date"
														className="form-control"
													/>
												</div>{" "}
												<div className="form-group col-md-4">
													<label htmlFor="inputCity">Costo</label>
													<input
														name="cost"
														onChange={this.handleInputChange}
														type="text"
														className="form-control"
														id="inputCity"
													/>
												</div>
											</div>
										</form>
									</div>

									<div className="modal-footer">
										<button type="button" className="btn btn-secondary" data-dismiss="modal">
											Close
										</button>
										<button
											onClick={() => {
												actions.SaveTextEvento({
													name_event: this.state.name_event,
													date_event: this.state.date_event,
													cost: this.state.cost,
													event_id: this.state.event_id
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
