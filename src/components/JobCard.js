import React from 'react';
import './styles/JobCard.css';
import { Link } from 'react-router-dom';
// import exampleLogo from './styles/assets/logos/scoot.svg';

function JobCard({id, logo, logoColor, position, company, postedAt, contract, location, listingName}) {
	return (
		<div className="card" key={id}>
			<img className="card__logo" src={logo} style={{ backgroundColor: `${logoColor}` }} alt={company} />

			<section className="card__text">
				<div className="text__postingSpecs">
					<p className="text__postingSpec">{postedAt}</p>
					<span className="text__postingSpec">·</span>
					<p className="text__postingSpec">{contract}</p>
				</div>

				<Link to={`/listing/${listingName}`}>
					<h3 className="text__title">{position}</h3>
				</Link>				

				<span className="text__company">{company}</span>
			</section>

			<div className="card__location"><a href="#" name="location">{location}</a></div>
		</div>
	)
};

export default JobCard
