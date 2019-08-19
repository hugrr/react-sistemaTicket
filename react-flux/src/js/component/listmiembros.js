import React, { Component } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class ListaMiembros extends Component {
	constructor(props) {
		super(props);
		this.storeContext = null;
		this.actionsContext = null;
	}
	componentDidMount() {
		console.log("load group", this.storeContext);
		this.actionsContext.GetUser(
			{
				userAccount: "Francisco",
				mail: "",
				phone: "",
				fecha_nacimiento: "",
				comunidad: "2019--07",
				user_id: "",
				password: " ",
				terminos: true,
				grupoid: ""
			},
			this.props.history
		);
		console.log(this.props);
	}
	render() {
		return (
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
					<Context.Consumer>
						{({ store, actions }) => {
							this.storeContext = store;
							this.actionsContext = actions;
							const peo2 = store.miembro.map((item, i) => {
								return (
									<tr key={i}>
										<td>{item.id}</td>
										<td>{item.userAccount}</td>
										<td>{item.mail}</td>
										<td>{item.userAccount}</td>
										<td>{item.userAccount}</td>
									</tr>
								);
							});
							console.log(peo2);
							return <>{peo2}</>;
						}}
					</Context.Consumer>
				</tbody>
			</table>
		);
	}
}
ListaMiembros.propTypes = {
	history: PropTypes.object
};
