import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export default class Anuncio extends React.Component {
	render() {
		return (
			<div className="container">
                <div className="row">
            <div calssName="col 3-md">
				<div className="card text-white bg-dark mb-3">
					<div className="card-header"></div>
					<div className="card-body">
						<h5 className="card-title">Votaciones de Grupo</h5>
						<p className="card-text"><i class="fas fa-person-booth"></i></p>
					</div>
				</div>
			</div>
        </div>
        	<div>
				<div className="text-center mt-5">
					<h1></h1>
					<button
						type="button"
						className="btn btn-primary btn-lg "
						data-toggle="modal"
						data-target="#exampleModal1">
						Crear votacion
					</button>
					<ModalVotacion />
                    </div>
                 </div>
             </div>
		);
	}
}