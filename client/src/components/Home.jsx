import React from 'react';
import Search from './Search';

export default function Home() {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-6 align-self-center'>
					<h1 className='text-uppercase fs-2'>
						Shop our latest <br />
						Available stock here
					</h1>
					<Search />
				</div>
				<div className='col-md-6'>
					<img src='assets/img/imac-iphone.png' className='img-fluid' />
				</div>
			</div>
		</div>
	);
}
