import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

//create your first component
export default class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			descripton: "",
			avisoName: "",
			media: "fotoo01",
			date_anuncio: "2019-07-07",
			anuncio_nameID: "1",
			ubication: "hola hola"
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
										<h5texto className="modal-title" id="exampleModalLongTitle">
											Aviso
										</h5texto>
										<input type="text" name="avisoName" onChange={this.handleInputChange} />
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
										<button type="button" className="btn btn-secondary" data-dismiss="modal">
											Close
										</button>
										<button
											type="button"
											className="btn btn-primary"
											onClick={() => {
												actions.SaveText({
													descripton: this.state.descripton,
													avisoName: this.state.avisoName,
													media: this.state.media,
													date_anuncio: this.state.date_anuncio,
													anuncio_nameID: this.state.anuncio_nameID,
													ubication: this.state.ubication
												});
											}}>
											{" "}
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
