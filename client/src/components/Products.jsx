import Pagination from './Pagination';
import React from 'react';
import Sidebar from './Sidebar';

const Product = () => {
	return (
		<main>
			<section>
				<div className='container-fluid'>
					<div className='row'>
						<Sidebar />
						<div className='col-md-9 ms-auto'>
							<div className='row row-cols-sm-5 px-5'>
								<div className='col'>
									<div className='card bg-main'>
										<div className='card-body text-center'>
											<button type='button' className='btn btn-outline-light py-0 float-end'>
												A1
											</button>
											<img src='assets/img/iphone6.png' className='img-fluid' />

											<h6 className='text-center mt-1'>iPhone XS Max</h6>
											<p className='fw-light mb-0'>Unlocked | 64GB</p>
											<p className='small mb-0'>Unit Price</p>
											<h4>$560</h4>
											<p className='small text-center'>1200 Available</p>
											<button className='btn btn-primary'>Buy</button>
										</div>
									</div>
								</div>
								<div className='col'>
									<div className='card bg-main'>
										<div className='card-body text-center'>
											<button type='button' className='btn btn-outline-light py-0 float-end'>
												A1
											</button>
											<img src='assets/img/iphone6.png' className='img-fluid' />

											<h6 className='text-center mt-1'>iPhone XS Max</h6>
											<p className='fw-light mb-0'>Unlocked | 64GB</p>
											<p className='small mb-0'>Unit Price</p>
											<h4>$560</h4>
											<p className='small text-center'>1200 Available</p>
											<button className='btn btn-primary'>Buy</button>
										</div>
									</div>
								</div>
								<div className='col'>
									<div className='card bg-main'>
										<div className='card-body text-center'>
											<button type='button' className='btn btn-outline-light py-0 float-end'>
												A1
											</button>
											<img src='assets/img/iphone6.png' className='img-fluid' />

											<h6 className='text-center mt-1'>iPhone XS Max</h6>
											<p className='fw-light mb-0'>Unlocked | 64GB</p>
											<p className='small mb-0'>Unit Price</p>
											<h4>$560</h4>
											<p className='small text-center'>1200 Available</p>
											<button className='btn btn-primary'>Buy</button>
										</div>
									</div>
								</div>
								<div className='col'>
									<div className='card bg-main'>
										<div className='card-body text-center'>
											<button type='button' className='btn btn-outline-light py-0 float-end'>
												A1
											</button>
											<img src='assets/img/iphone6.png' className='img-fluid' />

											<h6 className='text-center mt-1'>iPhone XS Max</h6>
											<p className='fw-light mb-0'>Unlocked | 64GB</p>
											<p className='small mb-0'>Unit Price</p>
											<h4>$560</h4>
											<p className='small text-center'>1200 Available</p>
											<button className='btn btn-primary'>Buy</button>
										</div>
									</div>
								</div>
								<div className='col'>
									<div className='card bg-main'>
										<div className='card-body text-center'>
											<button type='button' className='btn btn-outline-light py-0 float-end'>
												A1
											</button>
											<img src='assets/img/iphone6.png' className='img-fluid' />

											<h6 className='text-center mt-1'>iPhone XS Max</h6>
											<p className='fw-light mb-0'>Unlocked | 64GB</p>
											<p className='small mb-0'>Unit Price</p>
											<h4>$560</h4>
											<p className='small text-center'>1200 Available</p>
											<button className='btn btn-primary'>Buy</button>
										</div>
									</div>
								</div>

								<Pagination />
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Product;
