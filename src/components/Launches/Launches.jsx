import React from 'react';
import Spinner from '../Spinner/Spinner';
import Launch from './Launch';

const Launches = ({ launches, isLoading, fullyLoaded }) => {
	return (
		<div>
			{launches.map((launch) => {
				return (
					<Launch
						key={`${launch.flight_number}-${launch.launch_date_unix}`}
						launch={launch}
					/>
				);
			})}
			{isLoading && launches.length > 0 ? (
				<div className='spinner-container'>
					<Spinner />
				</div>
			) : (
				''
			)}
			{fullyLoaded ? (
				<div className='max-reached'>
					<p>End of list</p>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default Launches;
