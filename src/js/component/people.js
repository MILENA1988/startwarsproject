import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, Button, ButtonToolbar, Row, Container, Col } from "react-bootstrap";

export const People = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadPeople();
	}, []);
	//console.log(store.peoples);

	return (
		<Container className="container" fluid>
			<h1 style={{ color: "white" }}>Personajes</h1>
			<Row>
				{store.peoples.map((people, i) => {
					return (
						<Col md={4} className="mt-1 mb-3" key={i}>
							<Card>
								<Card.Img
									variant="top"
									src="https://images.unsplash.com/photo-1601814933824-fd0b574dd592?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80"
								/>
								<Card.Body>
									<Card.Title className="text-center">{people.name}</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the
										cards content.
									</Card.Text>
								</Card.Body>
								<Card.Footer>
									<ButtonToolbar
										className="justify-content-between"
										arial-label="Toolbar with Button groups">
										<Link to={`/personaje/${i}`}>
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
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};
