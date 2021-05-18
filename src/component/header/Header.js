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

// lib
import { is_auth } from './../../lib/is_auth';
import { removeCookies, getAllCookies } from './../../lib/cookie';

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

								{/* check apakah user telah login */}
								<div className={`${this.state.isLoading ? styles.loading : styles.notloading }`}>
									{this.state.isAuth ? (
										<Fragment>
											<Link className={styles.container_login} to="/dashboard">
												<p className={styles.p_login}>Dashboard</p>
												<DashboardIcon />
											</Link>
											<div
												className={styles.container_logout}
												onClick={this.logout}
											>
												<p className={styles.p_login}>Logout</p>
												<AccountCircleIcon />
											</div>
										</Fragment>
										) : (
											<Link className={styles.container_login} to="/login">
												<p className={styles.p_login}>Login</p>
												<AccountCircleIcon />
											</Link>
										) }
									
								</div>

							</Grid>
						</Grid>
					</Container>
				</div>
			</Fragment>
		);
	}
}


export default Header;
