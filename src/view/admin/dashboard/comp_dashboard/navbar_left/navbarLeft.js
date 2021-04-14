import React, { Fragment } from "react";

// mycss
import styles from "./navbar_left.module.css";

// image
import User from "./../../../../../asset/image/user/user.png";

// router
import { Link } from "react-router-dom";

// myicons
import Dashboard from "./../../../../../asset/image/icons/menu.png";
import Master from "./../../../../../asset/image/icons/master.png";
import Arrow from "./../../../../../asset/image/arrow.png";
import IconsCloceNav from "./../../../../../asset/image/icons/close.png";

// router
import { RouterMaster } from "./../../router.js";

class navbar_left extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dropdown: {
				master: false,
			},
		};
	}

	_btnNavMobile = () => {
		document.getElementById("myNav").style.width = "0%";
	};

	setDropdown = (val) => {
		this.state.dropdown[val]
			? this.setState({
					dropdown: { ...this.state.dropdown, [val]: false },
			  })
			: this.setState({
					dropdown: { ...this.state.dropdown, [val]: true },
			  });
	};

	render() {
		return (
			<Fragment>
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
					<img alt="user" src={User} className={styles.img_user} />
					<h4>Admin</h4>
				</div>
				{/* end comp profile user */}

				{/* comp_Menu */}
				<Link to="/dashboard" className={styles.cont_menu}>
					<img alt="dashboard" src={Dashboard} className={styles.icons_menu} />
					<h4>Dashboard</h4>
				</Link>
				<Link
					className={styles.cont_menu}
					onClick={() => this.setDropdown("master")}
				>
					<img alt="menu icons" src={Master} className={styles.icons_menu} />
					<h4>Master</h4>
					<img
						alt="icons"
						src={Arrow}
						className={
							this.state.dropdown.master
								? styles.icons_menu_arrow_open
								: styles.icons_menu_arrow_closed
						}
					/>
				</Link>
				{/* drop down master */}
				<ul
					className={
						this.state.dropdown.master
							? styles.dropdown_open
							: styles.dropdown_close
					}
				>
					{RouterMaster.map((val, index) => (
						<Link className={styles.link} to={val.link}>
							<li>{val.name}</li>
						</Link>
					))}
				</ul>
				{/* end dropdown master */}

				{/* end comp Menu */}
			</Fragment>
		);
	}
}

export default navbar_left;
