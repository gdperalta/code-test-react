import React from 'react';

const Launch = ({ launch }) => {
	return (
		<div className='launch row launch__item'>
			<h2>{launch.mission_name}</h2>
			<div className='launch__details launch__meta'>
				<span>{launch.launch_year}</span>
				{launch.launch_success ? (
					<span className='launch__status--success'>success</span>
				) : (
					<span className='launch__status--danger'>failed</span>
				)}
			</div>
			<p className='launch__details'>{launch.details}</p>
		</div>
	);
};

export default Launch;
