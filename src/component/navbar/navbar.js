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
			isMobile: {
				mobile: false,
			},
		}
	}


	// opsi untuk navbar dropdown platform dekstop
	opsiNavDropdownDesktop = (val, display) => {
		var id = document.getElementById(val);
		display === 'open' ? id.style.display = 'block' : id.style.display = 'none';
	}

	// opsi untuk navbar dropdown platform desktop
	opsiNavDropdownMobile = (val) => {
		var id = document.getElementById(val);
		// create all nav from './listNav.js' as objects
		var allNav = {}
		listNav.forEach(val => {
			val.id !== null ? allNav[val.id] = false : console.log('null id') ;
		})

		// jika nav dropdown yang dipilih bernilai true maka variabel diubah ke false
		// dan style nya adalah none dan sebaliknya
		if (listNav[val] === true ) {
			id.style.display = 'none';
			listNav[val] = false;

		} else {
			console.log('else')
			id.style.display = 'block';
			listNav[val] = true;
		}

	}

	// opsi untuk show button/togle nav pada platform mobile
	changeNavMobile = () => {
		this.state.navMobile ? this.setState({navMobile: false}) : this.setState({navMobile: true}) ;
	}

	// setup / config
	setup = () => {
		// jika mobile user maka state akan berubah isMobile
		window.innerWidth <= 1000 ? this.setState({ isMobile:true }) : this.setState({ isMobile: false }) ;
		// listener resize
		window.addEventListener('resize', function(){
			window.innerWidth <= 1000 ? this.setState({ isMobile:true }) : this.setState({ isMobile: false }) ;
		});
	}

	componentDidMount(){
		this.setup();
	}

	render(){
		return(
			<div>

				<Header />
				<Container>
					<Grid container className='items-center text-gray-700'>
						<Grid items xs={12} lg={5}>
							<Link to={'/#main'} className='lg:flex text-center lg:text-left items-center p-3'>
								<img src={logoNav} alt='logo' className='w-10 h-10 mx-auto lg:mx-0 lg:mr-5' />
								<div className='font-league_spartanbold'>
									<h1 className='text-red-500'>Sekolah Tinggi Ilmu Komputer</h1>
									<h1 className='text-blue-500'>Cipta Karya Informatika Kampus D</h1>
								</div>
							</Link>
						</Grid>




						<Grid items xs={12} lg={7} className='lg:flex py-5 lg:py-0 lg:justify-between font-source_sans_proregular text-md'>

							{/* jika mobile device show btn */}
							<img src='/image/icons/nav.svg' alt='nav' className='w-5 mx-auto my-5 cursor-pointer lg:hidden' onClick={this.changeNavMobile} />

							{listNav.map((val,index) => {
								return(

									<div className={this.state.navMobile ? 'lg:block' : `hidden lg:block`}>

										{this.state.isMobile ? (
											<Fragment>
												<div className='flex relative cursor-pointer'
												onClick={() => this.opsiNavDropdownMobile(`${val.id}`)}
												>
													<span>{val.name}</span>
													{val.dropdownList.length < 1 ? '' : <img src='/image/icons/down-arrow.svg' alt='arrow' className='w-3 ml-1' /> }
												</div>
												<div className='lg:absolute hidden z-20 bg-white rounded-lg divide-y divide-gray-300 whitespace-nowrap' 
													id={`${val.id}`}
													>

													{listNav[index]['dropdownList'].map((val, index) => (
														<Link to={`${val.link}#main`}>
															<p className='py-2 px-4 hover:bg-blue-100 cursor-pointer'>{val.name}</p>
														</Link>
													))}
												</div>
											</Fragment>
											) : (
											<Fragment>
												<div className='flex relative cursor-pointer'
												onMouseOver={() => this.opsiNavDropdownDesktop(`${val.id}`, 'open')}
												onMouseOut={() => this.opsiNavDropdownDesktop(`${val.id}`, 'close')}
												>
														<span>{val.name}</span>
														{val.dropdownList.length < 1 ? '' : <img src='/image/icons/down-arrow.svg' alt='arrow' className='w-3 ml-1' /> }
												</div>
												<div className='lg:absolute hidden z-20 bg-white rounded-lg divide-y divide-gray-300 whitespace-nowrap' 
													onMouseOver={() => this.opsiNavDropdownDesktop(`${val.id}`, 'open')}
													onMouseOut={() => this.opsiNavDropdownDesktop(`${val.id}`, 'close')}
													id={`${val.id}`}
													>

													{listNav[index]['dropdownList'].map((val, index) => (
														<Link to={`${val.link}#main`}>
															<p className='py-2 px-4 hover:bg-blue-100 cursor-pointer'>{val.name}</p>
														</Link>
													))}
												</div>
											</Fragment>
											) }

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
