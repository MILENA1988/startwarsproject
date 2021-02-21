import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, Button, ButtonToolbar, Container, Row, Col } from "react-bootstrap";

export const Planets = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	useEffect(() => {
		actions.loadPlanets();
	}, []);

	return (
		<Container className="container" fluid>
			<h1 style={{ color: "pink" }}>Planetas</h1>
			<Row>
				{store.planets.map((planets, i) => {
					return (
						<Col md={4} className="mt-1 mb-3" key={i}>
							<Card>
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
										<Link to={`/planeta/${i}`}>
											<Button variant="primary">Learn More!</Button>
										</Link>

										<Link onClick={() => actions.addFavorite(planets.name, "planeta")}>
											<Button variant="outline-warning">
												<i className="far fa-heart" />
											</Button>
										</Link>
									</ButtonToolbar>
								</Card.Footer>
							</Card>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};
