import React from 'react';
import './styles/JobsList.css'
import JobData from './data/data.json';
import JobCard from './JobCard';
import { useParams } from 'react-router-dom';

function JobsList() {
	const { listingName } = useParams();

	return (
		<div className="jobList">
			{JobData.map((job) => {
				return <JobCard
					key={job.id}
					id={job.id}
					logo={job.logo}
					logoColor={job.logoBackground}
					postedAt={job.postedAt}
					contract={job.contract}
					position={job.position}
					company={job.company}
					location={job.location}
					listingName={job.company}
				/>
			})}
		</div>
	)
}

export default JobsList;
