import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { Usuarios } from "./views/user";
import { Anuncio } from "./views/anuncio";
import { CrearEvento } from "./views/crearEvento";
import { Evento } from "./views/evento";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { ModalEvent } from "./component/modalEvento";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="page-inner">
				<BrowserRouter basename={basename}>
					<Fragment>
						<Navbar />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/usuarios" component={Usuarios} />
							<Route path="/eventos" component={Evento} />
							<Route path="/anuncios" component={Anuncio} />
							<Route path="/crearEvento" component={CrearEvento} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
						<Footer />
					</Fragment>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
