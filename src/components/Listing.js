import React from 'react';
import './styles/Listing.css';

function Listing({id, logo, logoColor, company, companySite, postedAt, contract, position, location, apply, description, reqContent, reqItems, roleContent, roleItems}) {
	return (
		<div className="listing" key={id}>
			<section className="listing__top">
				<img src={`${logo}`} alt={company} style={{ backgroundColor: `${logoColor}` }} className="listing__topImage" />

				<div className="listing__topContent">
					<div className="topContent__text">
						<h3>{company}Scoot</h3>
						<p>{company}Scoot.com</p>
					</div>

					<a href={companySite}>
						<button>Company Site</button>	
					</a>			
				</div>
			</section>

			<main className="listing__info">

				<section className="info__title">
					<div className="title__text">
						<div className="text__postingSpecs">
							<p className="text__postingSpec">{postedAt}1w ago</p>
							<span className="text__postingSpec">·</span>
							<p className="text__postingSpec">{contract}Part Time</p>
						</div>

						<h3 className="text__title">{position}Senior Software Engineer</h3>

						<span className="text__location">{location}United Kingdom</span>
					</div>

					<a href={apply}>
						<button>Apply Now</button>	
					</a>		
				</section>

				<section className="info__description">
					<p>{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident alias dolorem quo illo, est dolorum corporis minus quisquam facere! Temporibus ea tenetur doloremque cumque quaerat nemo officiis maiores quo modi fugit sed placeat amet sunt voluptatem, nulla veritatis itaque nisi fugiat id, quasi rem quibusdam error. Quos aut fugiat deleniti.</p>
				</section>

				<section className="info__requirements">
					<h4>Requirements</h4>
					<p>{reqContent}</p>
					<ul>
						{/* {reqItems.map((item) => {
							<li>{item}</li>
						})} */}
						<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, et molestiae provident veritatis eligendi voluptates maxime minima quo quis doloremque!</li>
						<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, et molestiae provident veritatis eligendi voluptates maxime minima quo quis doloremque!</li>
						<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, et molestiae provident veritatis eligendi voluptates maxime minima quo quis doloremque!</li>
					</ul>
				</section>

				<section className="info__responsibilities">
					<h4>What you will do</h4>
					<p>{roleContent}</p>
						<ol>
						{/* {roleItems.map((item) => {
							<li>{item}</li>
						})} */}
						<li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident architecto odio aspernatur?</li>
						<li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident architecto odio aspernatur?</li>
						<li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident architecto odio aspernatur?</li>
					</ol>
				</section>
			</main>

			<footer className="listing__footer">
				<div className="footer__titles">
					<h3>{position}</h3>
					<p>{company}</p>
				</div>

				<a href={apply} target="_blank">
						<button>Apply Now</button>	
					</a>		
			</footer>
		</div>
	)
}

export default Listing
