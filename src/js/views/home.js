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
							src="https://images5.alphacoders.com/672/672012.jpg"
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
							src="https://images5.alphacoders.com/388/388257.jpg"
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
