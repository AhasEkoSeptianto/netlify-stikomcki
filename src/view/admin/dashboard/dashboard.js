import React from "react";

// mycss
import styles from "./../../../asset/css/admin/dashboard.module.css";

// user image
import Img_user from "./../../../asset/image/user/user.png";

// icons
import IconNavbar from "./../../../asset/image/icons/navbar.png";
import IconsCloceNav from "./../../../asset/image/icons/close.png";

// component nav
import NavLeft from "./comp_dashboard/navbar_left/navbarLeft.js";
import NavRight from "./comp_dashboard/navbar_right/navbarRight.js";

// material ui
import { Grid } from '@material-ui/core';

// router
import { Link } from "react-router-dom";

// lib
import { is_auth } from './../../../lib/is_auth';

// redux
import { connect } from 'react-redux'; 

class dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			uri: this.props.match,
			isMobile: false,
			navMobileOpen: false,
			profileClick: false,
		};
	}

	_btnNavMobile = () => {
		var nav = document.getElementById('nav_dashboard');
		if (this.state.navMobileOpen) {
			this.setState({navMobileOpen: false});
			nav.setAttribute('class', 'overflow-hidden bg-white h-full shadow fixed left-0  w-0 col-span-0');
		} else {
			this.setState({navMobileOpen: true});
			nav.setAttribute('class', 'overflow-hidden bg-white h-full shadow fixed left-0  w-60 col-span-2');
		}
	};

	_btnProfile = () => {
		this.state.profileClick
			? this.setState({ profileClick: false })
			: this.setState({ profileClick: true });
	};

	_logout = () => {
		this.props.history.push("/");
	};

	changeDeviceWidth = () => {
		let nav = document.getElementById('nav_dashboard');
		let height = window.innerHeight;
		let width = window.innerWidth;

		if (width <= 1024) {
			console.log('phone device');
		} else {
			nav.setAttribute('class', 'overflow-hidden bg-white h-full shadow absolute lg:static w-0 lg:w-full lg:col-span-2');
		}

	}

	componentDidMount() {
		let isAuth = is_auth();
		isAuth ? console.log('user loggend') : this.props.history.push('/') ;
		this.changeDeviceWidth();
		window.addEventListener('resize', this.changeDeviceWidth);

	}

	render() {
		return (
				<div className='grid grid-cols-12 grid-flow-row auto-rows-max h-full'>
					<div id='nav_dashboard' className='overflow-hidden bg-white h-full shadow fixed left-0 lg:static w-0 lg:w-full lg:col-span-2'>
						<div className='bg-blue-300 flex justify-end'>
							<img
								alt="icons"
								src={IconsCloceNav}
								className='w-14 overflow-hidden p-4 cursor-pointer lg:w-0'
								id='icon_nav'
								onClick={() => this._btnNavMobile()}
							/>
						</div>
						{/* navbar kiri window */}
						<NavLeft />
					</div>

					<div className='col-span-12 lg:col-span-10'>
						{/* component bagian kanan window */}
						<div className={`${styles.comp_rightTop}`}>
							{/* bagian awal headaer kanan */}
							<div className={styles.cont_headerLeft}>
								<img
									alt="icons"
									src={IconNavbar}
									className='h-1/2 overflow-hidden p-1 ml-3 cursor-pointer lg:h-0'
									onClick={() => this._btnNavMobile()}
								/>
							</div>
							{/* end bagian awal headaer kanan  */}
							{/* bagian akhir header kanan */}
							<div className={styles.cont_headerRight}>
								<input
									type="text"
									className={styles.input_form}
									placeholder="search for.."
								/>
								<img
									alt="icons"
									src={Img_user}
									className={
										this.state.profileClick
											? styles.iconsProfile_active
											: styles.iconsProfile_notActive
									}
									onClick={() => this._btnProfile()}
								/>
							</div>
							{/* end bagian akhir kanan */}
						</div>
						{/* component untuk hover profile */}
						<div
							className={
								this.state.profileClick
									? styles.comp_hoverProfile_active
									: styles.comp_hoverProfile_notActive
							}
						>
							<img
								alt="icons"
								src={Img_user}
								className={styles.iconsImage_hover}
							/>
							<h4>{this.props.user}</h4>
							<Link
								className={styles.link}
								onClick={() => alert("fiture cooming soon")}
							>
								Manage Account
							</Link>
							<Link
								className={styles.link}
								onClick={() => this._logout()}
							>
								Exit
							</Link>
						</div>
						{/* end comp untuk hover profile */}
						{/* window untuk body bagian kanan window */}
						<NavRight uri={this.state.uri} />
						{/* end window untuk body bagian kanan */}
						{/* end component bagian kanan window */}
					</div>
				</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.user,
	}
}

export default connect(mapStateToProps, null)(dashboard);
