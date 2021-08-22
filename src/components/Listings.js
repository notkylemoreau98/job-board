import React from 'react';
import JobData from './data/data.json';
import Listing from './Listing';
import { useParams } from 'react-router-dom'

function Listings() {
		const { listingName } = useParams();

	return (
		<div className="listings">
			{JobData.map((listing) => {
					return <Listing
						key={listing.id}
						id={listing.id}
						logo={listing.logo}
						logoColor={listing.logoColor}
						company={listing.company}
						companySite={listing.website}
						postedAt={listing.postedAt}
						contract={listing.contract}
						location={listing.location}
						apply={listing.apply}
						description={listing.description}
						reqContent={listing.requirements.content}
						reqItems={listing.requirements.items}
						roleContent={listing.role.content} 
				/>
				})}
		</div>
	)
}

export default Listings
