import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function Projects(props) {

	const currentProject = useState(props)[0].projects;
	const name = currentProject.name;
	const description = currentProject.description;
	const image = currentProject.image;
	const appLink = currentProject.deployed;


	return (
		<Card style={{ width: "20rem" }}>
			<div className="center">
				<Card.Body>
					<Card.Title className="card-title">{name}</Card.Title>
          <Card.Img
				variant="top"
				img src={require(`./assets/${image}`)}
				className="card-image"
			/>
					<Card.Text className="card-text">{description}</Card.Text>
					<Card.Link href={appLink} target="_blank" className="card-link">{name}</Card.Link>
				</Card.Body>
			</div>
		</Card>
	);
}

export default Projects;