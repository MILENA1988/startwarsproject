import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import { Link, useParams } from "react-router-dom";
import { Card, Container, CardDeck, Button, Row, Col, ButtonToolbar } from "react-bootstrap";

export const Planeta = () => {
	var parametros = useParams();
	const { store, actions } = useContext(Context);
	console.log(parametros);
	var detalles = store.planets[parametros.theid];
	console.log(detalles);

	return (
		<div className="container">
			<br />
			<div className="media">
				<img
					className="rounded-circle"
					style={{ height: 220 }}
					src="https://images.unsplash.com/photo-1447433693259-c8549e937d62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=777&q=80"
					alt="Circle image"
				/>
				<div className="media-body" style={{ marginLeft: "30px" }}>
					<h5 className="mt-3">TAKODANA</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>
			<br />
			<div className="footer">
				<Row style={{ backgroundColor: "gray" }}>
					<Col>Name: {detalles.name}</Col>
					<Col>Climate: {detalles.climate}</Col>
					<Col>Population: {detalles.population}</Col>
					<Col>Orbital Period: {detalles.period}</Col>
					<Col>Rotation: {detalles.rotation} </Col>
					<Col>Diameter: {detalles.diameter}</Col>
				</Row>
			</div>
		</div>
	);
};
