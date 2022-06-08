import axios from 'axios';

axios.defaults.baseURL = 'https://api.spacexdata.com/v3';

export const fetchLaunches = async (offset = 0) => {
	const response = await axios.get(`/launches?limit=10&offset=${offset}`);

	return await response.data;
};
