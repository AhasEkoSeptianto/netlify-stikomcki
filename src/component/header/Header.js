import React, { Fragment } from "react";

// icons material-ui
import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import EmailIcon from "@material-ui/icons/Email";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DashboardIcon from "@material-ui/icons/Dashboard";

// material ui
import { Container, Grid } from "@material-ui/core";

// mycss
import styles from "./Header.module.css";

// link
import { Link } from "react-router-dom";

// redux
import { connect } from "react-redux";

// cookies
import Cookies from "universal-cookie";

// lib
import { is_auth } from './../../lib/is_auth';

class Header extends React.Component {

	showAuth = () => {
		if (this.props.user === "annonymous") {
			return (
				<Link className={styles.container_login} to="/login">
					<p className={styles.p_login}>Login</p>
					<AccountCircleIcon />
				</Link>
			);
		} else {
			return (
				<Fragment>
					<Link className={styles.container_login} to="/dashboard">
						<p className={styles.p_login}>Dashboard</p>
						<DashboardIcon />
					</Link>
					<div
						className={styles.container_logout}
						onClick={this.props.logout}
					>
						<p className={styles.p_login}>Logout</p>
						<AccountCircleIcon />
					</div>
				</Fragment>
			);
		}
	};

	componentDidMount() {
		let isAuth = is_auth();
		if (isAuth) { this.props.login(new Cookies().get("user")); }
	}

	render() {
		return (
			<Fragment>
				<div className={styles.header}>
					<Container>
						<Grid container spacing={1}>
							<Grid
								container
								item
								xs={6}
								className={styles.headerListLeft}
							>
								<div className={styles.phoneCenter}>
									<AddIcCallIcon
										className={styles.imgCallPhone}
										style={{ fontSize: 15 }}
									/>
									<p className={styles.textIcon}>
										+62 235 6789
									</p>
								</div>
								<div className={styles.emailCenter}>
									<EmailIcon
										className={styles.imgheaderEmail}
										style={{ fontSize: 15 }}
									/>
									<p className={styles.textIcon}>
										stikomckid@gmail.ac.id
									</p>
								</div>
							</Grid>
							<Grid
								container
								item
								xs={6}
								className={styles.headerListRight}
							>
								{this.showAuth()}
							</Grid>
						</Grid>
					</Container>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		login: (user) => {
			dispatch({ type: "login", user: user });
		},
		logout: () => {
			dispatch({ type: "logout", user: "annonymous" });
			new Cookies().remove("user");
			new Cookies().remove("auth-token");

			window.location.reload();
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
