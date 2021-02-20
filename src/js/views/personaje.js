import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { Card, Container, CardDeck, Button, Row, Col, ButtonToolbar } from "react-bootstrap"; ///

export const Personaje = () => {
	var parametros = useParams();
	const { store, actions } = useContext(Context);
	console.log(parametros);
	var detalles = store.peoples[parametros.theid];
	console.log(detalles);

	return (
		<div>
			<div className="container">
				<br />
				<img src="https://images.unsplash.com/photo-1592421972344-e7db99d3f6ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
				<h1 className="tittle" align="right">
					MANDOLORIAN{" "}
				</h1>
				<div>
					<p className="text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
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
					<Col>Bithyear: {detalles.birthyear}</Col>
					<Col>Gender: {detalles.gender}</Col>
					<Col>Height : {detalles.height}</Col>
					<Col>Skincolor: {detalles.skincolor} </Col>
					<Col>eyecolor: {detalles.eyecolor}</Col>
				</Row>
			</div>
		</div>
	);
};
