import { useState, useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Slider, Switch } from 'antd';

const Ranger = ({ min, max, minmax }) => {
	const [minVal, setMinVal] = useState(min);
	const [maxVal, setMaxVal] = useState(max);
	const [disabled, setDisabled] = useState(false);

	const handleDisabledChange = (disabled) => {
		setDisabled(disabled);
	};

	const minValRef = useRef(min);
	const maxValRef = useRef(max);

	const range = useRef(null);

	const getPercent = useCallback((value) => Math.round(((value - min) / (max - min)) * 100), [min, max]);

	useEffect(() => {
		const minPercent = getPercent(minVal);
		const maxPercent = getPercent(maxValRef.current);

		if (range.current) {
			range.current.style.left = `${minPercent}%`;
			range.current.style.width = `${maxPercent - minPercent}%`;
		}
	}, [minVal, getPercent]);

	useEffect(() => {
		const minPercent = getPercent(minValRef.current);
		const maxPercent = getPercent(maxVal);

		if (range.current) {
			range.current.style.width = `${maxPercent - minPercent}%`;
		}
	}, [maxVal, getPercent]);

	return (
		<>
			<Slider range defaultValue={[20, 50]} disabled={disabled} className='pe-5' />
			<div className='px-4'>
				<input
					readOnly
					className='shadow appearance-none border rounded w-32 md:w-full py-2 px-3 block text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4'
					type='text'
					value={`Min: $ ${minVal}`}
					placeholder='Min'
				/>
				<input
					readOnly
					className='shadow appearance-none border rounded w-32 md:w-full py-2 px-3 block text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
					type='text'
					value={`Max: $ ${maxVal}`}
					placeholder='Max'
				/>
			</div>
		</>
	);
};

export default Ranger;
