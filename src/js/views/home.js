import React, { useState, useEffect, useContext } from "react";
//import { Context } from "../store/appContext";
import { Card, Button, Carousel } from "react-bootstrap";
//import { People } from "../component/people";
//import { Planets } from "../component/planets";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		/*<div className="container">
			<People />
			<Planets />
        </div>*/
		<div className="container text-center mt-5">
			<Carousel>
				<Carousel.Item interval={2000}>
					<Link to="/people/whatever">
						<img
							className="d-block w-100"
							src="https://images.unsplash.com/photo-1610131914242-9e1642e441fd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
							alt="Characters"
						/>
						<Carousel.Caption>
							<h3>Personajes</h3>
							<p>Descripcion de personajes</p>
						</Carousel.Caption>
					</Link>
				</Carousel.Item>
				<Carousel.Item interval={2000}>
					<Link to="/planets/whatever">
						<img
							className="d-block w-100"
							src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
							alt="Planets"
						/>
						<Carousel.Caption>
							<h3>Planetas</h3>
							<p>Descripcion de planetas</p>
						</Carousel.Caption>
					</Link>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};
