import React, { useState, useContext } from 'react';
import axios from 'axios';
import { DataContext } from '../store/context';

const Search = () => {
	const [search, setSearch] = useState('');
	const { dispatch } = useContext(DataContext);

	const handleChange = (e) => {
		const { value } = e.target;
		setSearch(value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!search) return;

		dispatch({ type: 'LOADING' });
		const { data } = await axios.post(
			'/api/v1/device/search',
			{ search },
			{ headers: { 'Content-Type': 'application/json' } }
		);

		dispatch({ type: 'SEARCH_DEVICES', payload: data });
	};

	return (
		<form className='row gy-2 gx-3 align-items-center' onSubmit={handleSubmit}>
			<div className='col-6'>
				<input
					type='text'
					className='form-control'
					onChange={handleChange}
					id='autoSizingInput'
					placeholder='Enter Search Term (e.g iPhone X, 128GB or A1)'
				/>
			</div>
			<div className='col-6'>
				<button type='submit' className='btn btn-primary'>
					Search <i className='fa fa-arrow-right'></i>
				</button>
			</div>
		</form>
	);
};

export default Search;
