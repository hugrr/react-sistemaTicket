import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { UserAdmin } from "./views/userAdmin";
import { UserStandard } from "./views/userStandard";
import { SendTicket } from "./views/sendTicket";
import { GetTicket } from "./views/getTicket";
import { Navbar } from "./component/navbar";

import { Footer } from "./component/footer";

import { Context } from "./store/appContext";

//create your first component

export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.storeContext = store;
					this.actionsContext = actions;
					return (
						<div className="page-inner">
							<BrowserRouter basename={basename}>
								<Fragment>
									<Navbar />
									<Switch>
										<Route exact path="/" component={Home} />
										<Route path="/userAdmin" component={UserAdmin} />
										<Route path="/userStandard" component={UserStandard} />
										<Route path="/sendTicket" component={SendTicket} />
										<Route path="/getTicket" component={GetTicket} />
										<Route render={() => <h1>Not found!</h1>} />
									</Switch>
									<Footer />
								</Fragment>
							</BrowserRouter>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

export default injectContext(Layout);
