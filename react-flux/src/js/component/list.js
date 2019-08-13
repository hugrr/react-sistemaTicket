import React, { Component } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class ListaTerminos extends Component {
	constructor(props) {
		super(props);
		this.storeContext = null;
		this.actionsContext = null;
	}
	componentDidMount() {
		console.log("load group", this.storeContext);
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
							this.storeContext = store;
							this.actionsContext = actions;
							console.log("render", store.grupo);
							const peo = store.grupo.map((index, i) => {
								return (
									<div key={i}>
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
							return <>{peo}</>;
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
