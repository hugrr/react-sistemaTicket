import React from "react";

export default class ModalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            name_event="",
            date_event ="",
            cost ="",
            event_id = 1



        }
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
                                        <input type="text"	name="name_event"
												onChange={this.handleInputChange} className="form-control" id="inputNombre" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputDireccion">Direccion</label>
                                        <input name=""onChange={this.handleInputChange}
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
                                        <label htmlFor="inputCity">Ciudad</label>
                                        <input type="text" className="form-control" id="inputCity" />
                                        <label htmlFor="inputTime">hora Evento</label>
                                        <input type="time" name="usr_time" className="form-control" id="inputTime" />
                                        <label htmlFor="inputDate">Fecha Evento</label>
                                        <input id="date"name="date_event"onChange={this.handleInputChange} type="date" className="form-control" />
                                    </div>
                                      <div className="form-group">
                                        <label htmlFor="inputDireccion">Direccion</label>
                                        <input name=""onChange={this.handleInputChange}
                                            type="text"
                                            className="form-control"
                                            id="inputdireccion"
                                            placeholder=""
                                        />
                                    </div>

                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputState">Comuna</label>
                                        <select id="inputState" className="form-control">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>
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
