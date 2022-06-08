import React from 'react';
import { useEffect, useState } from 'react';
import { fetchLaunches } from '../../services/SpacexService';
import Spinner from '../Spinner/Spinner';
import Launch from './Launch';

const Launches = () => {
	const [launches, setlaunches] = useState([]);
	const [offset, setOffset] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);

		getLaunches();
	}, [offset]);

	const getLaunches = async () => {
		const data = await fetchLaunches(offset);
		console.log(offset);
		setlaunches([...launches, data].flat());
		setIsLoading(false);
	};

	const handleScroll = (e) => {
		const bottom =
			e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
		if (bottom) {
			setOffset(offset + 10);
		}
	};

	return (
		<div className='main__wrapper' onScroll={handleScroll}>
			{isLoading && launches.length === 0 ? (
				<Spinner />
			) : (
				launches.map((launch) => {
					return (
						<Launch
							key={`${launch.flight_number}-${launch.launch_date_unix}`}
							launch={launch}
						/>
					);
				})
			)}
			{isLoading && launches.length > 0 ? (
				<div className='spinner-container'>
					<Spinner />
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default Launches;
