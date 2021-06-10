import React, { Fragment } from "react";

// components
import Header from "./../header/Header.js";

// asset image
import logoNav from "./../../asset/image/logo Stikom.jpeg";

// module react-router-dom haslink scroll animated
import { HashLink as Link } from "react-router-hash-link";

import { Container, Grid } from "@material-ui/core";

import { listNav } from './listNav';

class navbar extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			navMobile: false,
		}
	}

	changeNavMobile = () => {
		this.state.navMobile ? this.setState({navMobile: false}) : this.setState({navMobile: true}) ;
	}

	opsiNavDropdown = (val, display) => {
		var id = document.getElementById(val);
		display === 'open' ? id.style.display = 'block' : id.style.display = 'none';
	}

	render(){
		return(
			<div>

				<Header />
				<Container>
					<Grid container className='items-center text-gray-700'>
						<Grid items xs={12} lg={5} className='lg:flex text-center lg:text-left items-center p-3'>
							<img src={logoNav} className='w-10 h-10 mx-auto lg:mx-0 lg:mr-5' />
							<div className='font-league_spartanbold'>
								<h1 className='text-red-500'>Sekolah Tinggi Ilmu Komputer</h1>
								<h1 className='text-blue-500'>Cipta Karya Informatika Kampus D</h1>
							</div>
						</Grid>




						<Grid items xs={12} lg={7} className='lg:flex py-5 lg:py-0 lg:justify-between font-source_sans_proregular text-md'>

							{/* jika mobile device show btn */}
							<img src='/image/icons/nav.svg' className='w-5 mx-auto my-5 cursor-pointer lg:hidden' onClick={this.changeNavMobile} />

							{listNav.map((val,index) => {
								return(

									<div className={this.state.navMobile ? 'lg:block' : `hidden lg:block`}>
										<div className='flex relative cursor-default'  onMouseOver={() => this.opsiNavDropdown(`nav_${val.header}`, 'open')} onMouseOut={() => this.opsiNavDropdown(`nav_${val.header}`, 'close')}>
											<span>{val.header}</span>
											{val.dropdownList.length < 1 ? '' : <img src='/image/icons/down-arrow.svg' className='w-3 ml-1' /> }
										</div>
										<div className='lg:absolute hidden z-20 bg-white rounded-lg divide-y divide-gray-300 whitespace-nowrap' id={`nav_${val.header}`} onMouseOver={() => this.opsiNavDropdown(`nav_${val.header}`, 'open')} onMouseOut={() => this.opsiNavDropdown(`nav_${val.header}`, 'close')}>

											{listNav[index]['dropdownList'].map((val, index) => (
												<Link to={`${val.link}#main`}>
													<p className='py-2 px-4 hover:bg-blue-100 cursor-pointer'>{val.name}</p>
												</Link>
											))}

										</div>
									</div>
									);

								})}

						</Grid>
					</Grid>
				</Container>

			</div>
			)
	}

}

export default navbar;
