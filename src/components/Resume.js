import React from 'react';

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
				<h5>Proficiencies - Front End</h5>
				<ol>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
					<li>React</li>
					<li>responsive design</li>
				</ol>
        <h5>Proficiencies - Back End</h5>
        <ol>
        <li>APIs</li>
					<li>NodeJS</li>
					<li>Express</li>
          <li>MongoDB</li>
					<li>Mongoose</li>
          <li>MySQL</li>
					<li>Sequelize</li>
          </ol>
          <div className="bottom-spacing">

				<a href={require("./assets/Resume.pdf")} download>
					<h4>Download Resume</h4>
				</a>
			</div>
    </section>
  );
}


export default Resume;