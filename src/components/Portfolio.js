import React from 'react';
import Projects from './Projects';
import Card from "react-bootstrap/Card";

function Portfolio() {
	const projects = [
		{
			name: 'Weather App',
			description:
				'Search by city and get the 5 day forecast.',
			image: 'weather.png',
			deployed: 'https://mikebombay.github.io/weather/',
		},
		{
			name: 'JavaScript Quiz',
			description:
				'A timed multiple choice Javascript quiz that keeps score',
			image: 'quiz.png',
			deployed: 'https://mikebombay.github.io/javascriptquiz/',
		},
		{
			name: 'Note Taker',
			description:
				'Make a note, save it.',
			image: 'note.png',
			
			deployed: 'https://calm-basin-11047.herokuapp.com/',
		},
		{
			name: 'Budget Tracker',
			description:
				'A Budget Tracker App that uses a noSQL database and offline persistance.',
			image: 'budget.png',
			deployed: 'https://warm-hollows-68088.herokuapp.com/',
		},
		{
			name: 'Workday Scheduler',
			description:
				'Schedule your workday.',
			image: 'scheduler.png',
			deployed: 'https://mikebombay.github.io/scheduler/',
		},
		{
			name: 'What2Watch',
			description:
				'Enter preferences or just get a movie suggestion based on the weather. Watch trailers, save movies to lists.',
			image: 'watch.png',
			deployed: 'https://jacob-banks.github.io/group-project-1/',
		},
		
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Projects projects={projects[0]}></Projects>
					</li>
					<li className="padding">
						<Projects projects={projects[1]}></Projects>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Projects projects={projects[2]}></Projects>
					</li>
					<li className="padding">
						<Projects projects={projects[3]}></Projects>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Projects projects={projects[4]}></Projects>
					</li>
					<li className="padding">
						<Projects projects={projects[5]}></Projects>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;