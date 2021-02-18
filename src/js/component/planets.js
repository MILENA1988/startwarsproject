import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, Button, ButtonToolbar } from "react-bootstrap";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadPlanets();
	}, []);
	//console.log(store.peoples);

	return (
		<div className="container">
			<h1>Planetas</h1>
			<div className="row">
				<div className="planets">
					{store.planets.map((planets, i) => {
						return (
							<Card style={{ width: "18rem" }} key={i}>
								<Card.Img
									variant="top"
									src="https://okdiario.com/img/2016/12/02/origen-nomre-planetas-sistema-solar-a-655x368.jpg"
								/>
								<Card.Body>
									<Card.Title className="text-center">{planets.name}</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the
										cards content.
									</Card.Text>
								</Card.Body>
								<Card.Footer>
									<ButtonToolbar
										className="justify-content-between"
										arial-label="Toolbar with Button groups">
										<Link to="/planeta/whatever">
											<Button variant="primary">Learn More!</Button>
										</Link>
										<Link>
											<Button variant="outline-warning">
												<i className="far fa-heart" />
											</Button>
										</Link>
									</ButtonToolbar>
								</Card.Footer>
							</Card>
						);
					})}
				</div>
			</div>
		</div>
	);
};
