import React, { Fragment } from "react";

// mycss;
import s from "./login.module.css";

// logo stikom
import Logo from "./../../asset/image/logo Stikom.png";

// icon material
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import CircularProgress from "@material-ui/core/CircularProgress";

// axios
import Axios from "axios";

// router
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

// Cookie
import Cookies from "universal-cookie";

class login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
			isLoading: false,
			login: {
				username: null,
				password: null,
			},
		};
	}

	is_auth() {
		var auth = new Cookies().get("username");
		if (auth) {
			this.setState({ redirect: true });
			return true;
		}
		return false;
	}

	validate = (item, id) => {
		if (item !== "") {
			document.getElementById(id).setAttribute("style", "border:none");
			return item;
		} else {
			document
				.getElementById(id)
				.setAttribute("style", "border:2px solid red;");
		}
	};

	submitForm = async () => {
		this.setState({ isLoading: true });
		let username = this.state.login.username;
		let password = this.state.login.password;
		if (username !== "" && password !== "") {
			let data = {
				username: username,
				password: password,
			};
			await Axios.post(
				"http://localhost:3001/api/login",
				data,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
				.then(async (response) => {
					let login = await response.data.login; // menunggu respone API db login
					console.log(response.data)
					//hadling user input jika user login salah maka akan show error
					let showerr = document.getElementById("wrong_user&pass");
					if (login === true) {
						this.props.Login(username); //setting username user ke redux
						new Cookies().set("auth-token", response.data.token, {
							path: "/",
						});
						new Cookies().set("username", response.data.username);
						showerr.style.display = "none";
						this.setState({ redirect: true });
					} else {
						showerr.style.display = "flex";
					}
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			console.log("error");
		}
		this.setState({ isLoading: false });
	};

	componentDidMount() {
		let is_login = this.is_auth(); //check jika user memiliki akses login
		if (is_login === true) {
			this.props.Login(localStorage.getItem("username"));
		}
		alert("demo pakai\nusername:admin\npassword:admin");
	}

	render() {
		if (this.state.redirect === true) {
			return <Redirect to="/" />;
		}
		return (
			<div className={s.bg}>
				<div className={s.container_login}>
					<div className={s.header_login}>
						<img alt="logo" src={Logo} className={s.img_logo} />
						<p className={s.text_stikom}>StikomCKI.D</p>
					</div>
					<div
						className={s.container_wrong_pass}
						id="wrong_user&pass"
					>
						<p className={s.text_wrong_pass}>
							&sdot; Login gagal, mohon periksa kembali username
							dan password yang digunakan
						</p>
					</div>

					{/* form */}
					<div className={s.form}>
						<div className={s.username} id="username">
							<AccountCircleRoundedIcon
								className={s.logo_login}
							/>
							<input
								type="text"
								onChange={(e) =>
									this.setState({
										login: {
											...this.state.login,
											username: e.target.value,
										},
									})
								}
								name="username"
								placeholder="username"
								className={s.form_user}
							/>
						</div>
						<div className={s.password} id="password">
							<LockOutlinedIcon className={s.logo_login} />
							<input
								type="password"
								name="password"
								placeholder="password"
								className={s.form_user}
								onChange={(e) =>
									this.setState({
										login: {
											...this.state.login,
											password: e.target.value,
										},
									})
								}
							/>
						</div>
						<button
							className={s.button}
							id="button"
							onClick={this.submitForm}
						>
							Login{" "}
							{this.state.isLoading === true ? (
								<Fragment>
									<p>..</p>
									<CircularProgress
										style={{ marginLeft: 10 }}
										size={15}
										color="inherit"
										disableShrink
									/>
								</Fragment>
							) : null}
						</button>
					</div>
					{/* end form */}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		username: state.username,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		Login: (user) => dispatch({ type: "login", user: user }),
		logout: () => dispatch({ type: "logout", user: "" }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(login);
