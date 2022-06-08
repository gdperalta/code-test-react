import axios from 'axios';

axios.defaults.baseURL = 'https://api.spacexdata.com/v3';

export const fetchLaunches = async () => {
	const data = await axios.get('/launches');
	console.log(data);
};
