import React, { Component } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class ListaTerminos extends Component {
	constructor(props) {
		super(props);

		this.actionsContext = null;
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount() {
		this.actionsContext.GetGroup(
			{
				grupoName: "",
				terminos: ""
			},
			this.props.history
		);
		console.log(this.props);
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<Context.Consumer>
						{({ store, actions }) => {
							this.actionsContext = actions;
							return;
							store.grupo.map((index, i) => {
								return (
									<div className="col-sm-3" key={i}>
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
													<h5>{index.terminos}</h5>
												</label>
											</div>
										</div>
									</div>
								);
							});
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}
ListaTerminos.propTypes = {
	history: PropTypes.array
};
