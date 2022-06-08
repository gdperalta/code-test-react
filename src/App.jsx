import React, { useEffect, useState } from 'react';
import './App.css';
import Launches from './components/Launches/Launches';
import Searchbar from './components/Searchbar/Searchbar';
import Spinner from './components/Spinner/Spinner';
import { fetchLaunches } from './services/SpacexService';

function App() {
	const [query, setQuery] = useState('');
	const [launches, setLaunches] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [fullyLoaded, setFullyLoaded] = useState(false);
	const [offset, setOffset] = useState(0);

	const resetStates = () => {
		setLaunches([]);
		setOffset(0);
	};

	useEffect(() => {
		getLaunches();
	}, [offset, query]);

	const getLaunches = async () => {
		setIsLoading(true);
		const data = await fetchLaunches(offset, query);
		if (data.length === 0) {
			setFullyLoaded(true);
		}

		setLaunches([...launches, data].flat());
		setIsLoading(false);

		console.log(data);
	};

	const handleScroll = (e) => {
		const bottom =
			roundUpNearest10(e.target.scrollHeight) -
				roundUpNearest10(e.target.scrollTop) ===
			roundUpNearest10(e.target.clientHeight);

		if (bottom && !fullyLoaded && !isLoading) {
			setOffset(offset + 10);
		}
	};

	const roundUpNearest10 = (num) => {
		return Math.ceil(num / 10) * 10;
	};

	return (
		<div className='App container'>
			<h1>SpaceX Launches</h1>
			<Searchbar setQuery={setQuery} resetStates={resetStates} />
			<div className='main__wrapper' onScroll={handleScroll}>
				{isLoading && launches.length === 0 ? (
					<div className='spinner-container'>
						<Spinner />
					</div>
				) : (
					<Launches
						launches={launches}
						isLoading={isLoading}
						fullyLoaded={fullyLoaded}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
