import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./views/scrollToTop";

import { Home } from "./views/home";
import { Personaje } from "./views/personaje";
import { Planeta } from "./views/planeta";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Favorites } from "./component/favorites";
import { Footer } from "./component/footer";
import { People } from "./component/people";
import { Planets } from "./component/planets";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Favorites />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/people/:theid">
							<People />
						</Route>
						<Route exact path="/planets/:theid">
							<Planets />
						</Route>
						<Route exact path="/personaje/:theid">
							<Personaje />
						</Route>
						<Route exact path="/planeta/:theid">
							<Planeta />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
