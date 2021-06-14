import React from 'react';
import Ranger from './Ranger';

const Sidebar = () => {
	return (
		<div className='col-md-3 bg-main'>
			<h5 className='py-5 px-4'>Categories</h5>
			<div className='form-check px-5'>
				<input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault1' />
				<label className='form-check-label' for='flexRadioDefault1'>
					All
				</label>
			</div>
			<div className='form-check px-5'>
				<input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault2' checked />
				<label className='form-check-label' for='flexRadioDefault2'>
					iPhone
				</label>
			</div>
			<div className='form-check px-5'>
				<input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault2' checked />
				<label className='form-check-label' for='flexRadioDefault2'>
					Samsung
				</label>
			</div>
			<div className='form-check px-5'>
				<input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault2' checked />
				<label className='form-check-label' for='flexRadioDefault2'>
					iPad
				</label>
			</div>
			<div className='form-check px-5'>
				<input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault2' checked />
				<label className='form-check-label' for='flexRadioDefault2'>
					MacBook
				</label>
			</div>
			<div className='form-check px-5'>
				<input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault2' checked />
				<label className='form-check-label' for='flexRadioDefault2'>
					Airpod
				</label>
			</div>

			<h5 className='py-5 px-4'>Price Filter</h5>
			<Ranger />
		</div>
	);
};

export default Sidebar;
