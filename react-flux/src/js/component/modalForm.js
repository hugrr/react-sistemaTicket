import React from "react";

export default class ModalForm extends React.Component {
	render() {
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
								Modal title
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label htmlFor="inputEmail4">Email</label>
										<input
											type="email"
											className="form-control"
											id="inputEmail4"
											placeholder="Email"
										/>
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="inputPassword4">Password</label>
										<input
											type="password"
											className="form-control"
											id="inputPassword4"
											placeholder="Password"
										/>
									</div>
								</div>
								<div className="form-group">
									<label htmlFor="inputAddress">Address</label>
									<input
										type="text"
										className="form-control"
										id="inputAddress"
										placeholder="1234 Main St"
									/>
								</div>
								<div className="form-group">
									<label htmlForr="inputAddress2">Address 2</label>
									<input
										type="text"
										className="form-control"
										id="inputAddress2"
										placeholder="Apartment, studio, or floor"
									/>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label htmlFor="inputCity">City</label>
										<input type="text" className="form-control" id="inputCity" />
									</div>
									<div className="form-group col-md-4">
										<label htmlFor="inputState">State</label>
										<select id="inputState" className="form-control">
											<option selected>Choose...</option>
											<option>...</option>
										</select>
									</div>
									<div className="form-group col-md-2">
										<label htmlFor="inputZip">Zip</label>
										<input type="text" className="form-control" id="inputZip" />
									</div>
								</div>
								<div className="form-group">
									<div className="form-check">
										<input className="form-check-input" type="checkbox" id="gridCheck" />
										<label className="form-check-label" htmlForr="gridCheck">
											Check me out
										</label>
									</div>
								</div>
								<button type="submit" className="btn btn-primary">
									Sign in
								</button>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								Close
							</button>
							<button type="button" className="btn btn-primary">
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
