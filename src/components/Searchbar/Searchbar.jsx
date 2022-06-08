import React, { useState } from 'react';
const Searchbar = ({ setQuery, resetStates }) => {
	const [value, setValue] = useState('');

	const search = () => {
		resetStates();
		setQuery(value);
	};
	return (
		<div>
			<input
				className='search'
				type={'search'}
				value={value}
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>
			<button className='btn' onClick={search}>
				Search by Launch Year
			</button>
		</div>
	);
};

export default Searchbar;
