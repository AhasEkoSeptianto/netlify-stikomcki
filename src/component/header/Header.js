import React from "react";

// material ui
import { Container, Grid } from "@material-ui/core";

// link
import { Link } from "react-router-dom";

// lib
import { is_auth } from './../../lib/is_auth';
import { removeCookies } from './../../lib/cookie';

class Header extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			isAuth: false,
			isLoading: true,
		}
	}

	logout = () => {
		removeCookies('user')
		removeCookies('auth-token')
		window.location.reload()
	}

	async componentDidMount(){
		let isLogged = await is_auth();
		this.setState({isAuth: isLogged, isLoading:false});
	}

	render() {
		return (
			<div className='bg-gray-100 font-source_sans_proregular text-gray-600' id='index'>
				<Container>
					<Grid container>
						<Grid item xs={6} lg={6} className='lg:flex p-1 items-center'>

							<div className='flex text-sm mr-8'>
								<img src='/image/icons/telephone.svg' alt='phone' className='w-4 mr-2' />
								<p>+62 235 6789</p>
							</div>
							<div className='flex text-sm mr-8'>
								<img src='/image/icons/gmail.svg' alt='gmail' className='w-4 mr-2' />
								<p>stikomckid@gmail.ac.id</p>
							</div>

						</Grid>
						<Grid item xs={6} lg={6} className='lg:flex justify-end'>

							<Link to='/login' className='flex justify-end items-center ml-8'>
								<p>Login</p>
								<img src='/image/icons/user.svg' alt='user' className='w-4 ml-2' />
							</Link>
							{this.state.isAuth ? (
								<Link to='/dashboard' className='flex justify-end items-center ml-8'>
									<p>Dashboard</p>
									<img src='/image/icons/dashboard.svg' alt='dashboard' className='w-4 ml-2' />
								</Link>
								) : '' }


						</Grid>
					</Grid>
				</Container>
			</div>
		);
	}
}


export default Header;
