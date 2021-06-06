import React from "react";

// mycss
import styles from "./navbar_left.module.css";

// router
import { Link } from "react-router-dom";

import IconsCloceNav from "./../../../../../asset/image/icons/close.png";

// router
import { router_nav } from "./../../routerNav.js";

// lib
import { getCookies } from './../../../../../lib/cookie';

// redux
import { connect } from 'react-redux';

class navbar_left extends React.Component {

	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
				{/* end icons untuk navbar mobile */}
				<div className='text-center mt-5'>
					<h4 className='text-red-400 text-sm font-bold'>
						Sekolah Tinggi Ilmu Komputer
					</h4>
					<h4 className='text-blue-400 text-sm font-bold'>
						Cipta Karya Informatika Kampus.D
					</h4>
				</div>
				{/* end container header // comp profile user */}
				<div className='mx-auto text-center my-5'>
					<img alt="user" src="/image/icons/user.svg" className='w-1/3 mx-auto' />
					<p>{this.props.user}</p>
				</div>
				{/* end comp profile user */}

				{/* comp_Menu */}

				{router_nav.map((val, index) => (
					<Link to={val.link} className={this.props.dashboardNav === val.link ? `${styles.cont_menu} bg-blue-100` : styles.cont_menu }>
						<img alt={val.name} src={val.icons} className={styles.icons_menu} />
						<p>{val.name}</p>
					</Link>
					))}

				{/* end comp Menu */}
			</div>
		);
	}
}


const mapStateToProps = state => {
	return {
		user: state.user,
		dashboardNav: state.dashboardNav,
	}
}


export default connect(mapStateToProps, null)(navbar_left);
