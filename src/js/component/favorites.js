import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/sw.jpg";

export const Favorites = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src={rigoImage} height="60" />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<div className="card">
						<div className="card-body">Favorites</div>
					</div>
				</Link>
			</div>
		</nav>
	);
};
