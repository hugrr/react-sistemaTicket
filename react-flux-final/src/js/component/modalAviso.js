import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

//create your first component
export default class ModalAviso extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			descripton: "",
			avisoName: "",
			media: "fotoo01",
			date_anuncio: "2019-07-07",
			anuncio_nameID: "1",
			ubication: "hola hola",
			enviado: false
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
							id="exampleModalLong"
							role="dialog"
							aria-labelledby="exampleModalLongTitle"
							aria-hidden="true">
							<div className="modal-dialog" role="document">
								<div className="modal-content">
									<div className="modal-header">
										<div className="input-group input-group-lg">
											<div className="input-group-prepend">
												<span
													className="input-group-text bg-dark bg-info text-white"
													id="inputGroup-sizing-lg">
													Nombre
												</span>
											</div>
											<input
												type="text"
												name="avisoName"
												onChange={this.handleInputChange}
												classNAme="form-control"
												aria-label="Sizing example input"
												aria-describedby="inputGroup-sizing-lg"
											/>
										</div>

										<button type="button" className="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div className="modal-body">
										<textarea
											name="descripton"
											className="form-control"
											rows="5"
											id="comment"
											onChange={this.handleInputChange}
										/>
									</div>
									<div className="modal-footer">
										<button type="button" className="btn btn-dark" data-dismiss="modal">
											Close
										</button>
										<button
											type="button"
											className="btn btn-warning"
											onClick={() => {
												actions.SaveAviso({
													descripton: this.state.descripton,
													avisoName: this.state.avisoName,
													media: this.state.media,
													date_anuncio: this.state.date_anuncio,
													anuncio_nameID: this.state.anuncio_nameID,
													ubication: this.state.ubication
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
