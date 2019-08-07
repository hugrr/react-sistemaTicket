import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Notice } from "./views/notice";
import { Evento } from "./views/evento";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Usuarios } from "./views/usuario";
import { Grupo } from "./views/grupo";
import { Single } from "./views/single";
import { Login } from "./views/login";
import injectContext from "./store/appContext";

import { ModalForm } from "./component/modalForm";
import { Anuncio } from "./component/anuncio";
import { Navbar } from "./component/navbar";
import { Sidenav } from "./component/Sidenav";
import { Footer } from "./component/footer";
import { Modal } from "./component/modal";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />
						<div className="row">
							<div className="col-md-2 d-none d-md-block bg-light sidebar">
								<div className="justify-content-md-center">
									<Sidenav />
								</div>
							</div>
							<div className="col-md-10">
								<Switch>
									<Route exact path="/avisos" component={Notice} />
									<Route exact path="/eventos" component={Evento} />
									<Route path="/demo" component={Demo} />
									<Route path="/usuarios" component={Usuarios} />
									<Route path="/grupo" component={Grupo} />
									<Route path="/login" component={Login} />
									<Route path="/single/:theid" component={Single} />
									<Route render={() => <h1>Not found!</h1>} />
								</Switch>
							</div>
						</div>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
