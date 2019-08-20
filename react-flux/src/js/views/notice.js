import React from "react";
import Modal from "../component/modal";
import Anuncio from "../component/anuncio";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

//create your first component
export class Notice extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<h1>Avisos</h1>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
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
							<div className="row">
								{!!store.avisos &&
									store.avisos.map((item, i) => {
										return (
											<div className="col-md-4" key={i}>
												<h3>
													<p>hola {item.avisoName}</p>
												</h3>
											</div>
										);
									})}
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
