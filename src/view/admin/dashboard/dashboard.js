import React from "react";

// mycss
import styles from "./../../../asset/css/admin/dashboard.module.css";

// user image
import Img_user from "./../../../asset/image/user/user.png";

// icons
import IconNavbar from "./../../../asset/image/icons/navbar.png";

// component nav
import NavLeft from "./comp_dashboard/navbar_left/navbarLeft.js";
import NavRight from "./comp_dashboard/navbar_right/navbarRight.js";

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
			navMobileClick: false,
			profileClick: false,
		};
	}

	_btnNavMobile = () => {
		document.getElementById("myNav").style.width = "50%";
		this.setState({ navMobileClick: true });
	};

	_btnProfile = () => {
		this.state.profileClick
			? this.setState({ profileClick: false })
			: this.setState({ profileClick: true });
	};

	_logout = () => {
		this.props.history.push("/");
	};

	// deteksi apakah user menekan btn nav pada mobile jikaiya maka ketika diconvert ke desktop akan menjadikan normal
	_detectNavDesktop = (event) => {
		if (
			event.target.innerWidth > 499 &&
			this.state.navMobileClick === true
		) {
			document.getElementById("myNav").style.width = "25%";
		}
		if (
			event.target.innerWidth < 500 &&
			this.state.navMobileClick === true
		) {
			document.getElementById("myNav").style.width = "0%";
		}
	};

	componentDidMount() {
		let isAuth = is_auth();
		isAuth ? console.log('user loggend') : this.props.history.push('/') ;

		window.addEventListener("resize", this._detectNavDesktop);
	}

	render() {
		return (
			<div className={styles.body}>
				<div className={styles.cont_left} id="myNav">
					{/* navbar kiri window */}
					<NavLeft />
				</div>
				<div className={styles.cont_right}>
					{/* component bagian kanan window */}
					<div className={styles.comp_rightTop}>
						{/* bagian awal headaer kanan */}
						<div className={styles.cont_headerLeft}>
							<img
								alt="icons"
								src={IconNavbar}
								className={styles.icons_nav}
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
