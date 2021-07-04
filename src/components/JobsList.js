import React from 'react';
import JobData from './data/data.json';
import JobCard from './JobCard';

function JobsList() {
	return (
		<div>
			{JobData.map((jobDetail, index) => {
				return <p>{jobDetail.company}</p>			
			})}
		</div>
	)
}

export default JobsList;
