import React from 'react';
import './styles/JobCard.css';
import exampleLogo from './styles/assets/logos/blogr.svg';

function JobCard({id, logo, logoColor, position, postedAt, contract, location}) {
	return (
		<div className="card" id={id}>
			<img className="card__logo" src={logo} alt="Company Name" />

			<section className="card__text">
				<div className="text__postingSpecs">
					<p className="text__postingSpec">5h ago {postedAt}</p>
					<span className="text__postingSpec">·</span>
					<p className="text__postingSpec">Full time {contract}</p>
				</div>

				<h3 className="text__title">Senior Software Engineer {position}</h3>

				<span className="text__company">Scoot</span>
			</section>

			<div className="card__location"><a href="#" name="location">United Kingdom {location}</a></div>
		</div>
	)
};

export default JobCard
