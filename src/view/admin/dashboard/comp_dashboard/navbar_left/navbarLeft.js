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

	_btnNavMobile = () => {
		document.getElementById("myNav").style.width = "0%";
	};

	render() {
		return (
			<div className={styles.body}>
				{/* container header */}
				{/* icons untuk navbar mobile */}
				<div className={styles.cont_navMobile}>
					<img
						alt="icons"
						src={IconsCloceNav}
						className={styles.icons_nav}
						onClick={() => this._btnNavMobile()}
					/>
				</div>
				{/* end icons untuk navbar mobile */}
				<div className={styles.cont_headNav}>
					<h4 className={styles.headNav_top}>
						Sekolah Tinggi Ilmu Komputer
					</h4>
					<h4 className={styles.headNav_bot}>
						Cipta Karya Informatika Kampus.D
					</h4>
				</div>
				{/* end container header // comp profile user */}
				<div className={styles.cont_profile}>
					<img alt="user" src="/image/icons/user.svg" className={styles.img_user} />
					<p>{this.props.user}</p>
				</div>
				{/* end comp profile user */}

				{/* comp_Menu */}

				{router_nav.map((val, index) => (
					<Link to={val.link} className={styles.cont_menu}>
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
	}
}


export default connect(mapStateToProps, null)(navbar_left);
