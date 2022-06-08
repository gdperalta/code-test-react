import { useEffect } from 'react';
import { fetchLaunches } from '../../services/SpacexService';

const Launches = () => {
	useEffect(() => {
		// setIsLoading(true);

		getLaunches();
	}, []);

	const getLaunches = async () => {
		const launches = await fetchLaunches();

		console.log(launches);
	};
};

export default Launches;
