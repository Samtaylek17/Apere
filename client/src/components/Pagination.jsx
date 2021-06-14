import { Link } from 'react-router-dom';
import React from 'react';

const Pagination = ({ pages, currpage }) => {
	return (
		<>
			<nav aria-label='...' className='mt-4'>
				{pages > 1 && (
					<ul className='pagination pagination-md'>
						{[...Array(pages).keys()].map((i) => (
							<li key={i + 1} className='page-item active' aria-current='page'>
								<Link to={`/page/${i + 1}`} className='page-link'>
									{i + 1}
								</Link>
							</li>
						))}
						<li className='page-item'>
							<a className='page-link' href='#'>
								2
							</a>
						</li>
						<li className='page-item'>
							<a className='page-link' href='#'>
								3
							</a>
						</li>
					</ul>
				)}
			</nav>
		</>
	);
};

export default Pagination;
