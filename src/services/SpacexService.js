import axios from 'axios';

axios.defaults.baseURL = 'https://api.spacexdata.com/v3';

export const fetchLaunches = async (offset, query) => {
	console.log('hello');
	const response = await axios.get(
		`/launches?limit=10&offset=${offset}&launch_year=${query}`
	);
	return await response.data;
};
