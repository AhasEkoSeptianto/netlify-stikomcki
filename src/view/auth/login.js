import React, { Fragment } from "react";

// mycss;
import s from "./login.module.css";

// icon material
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import CircularProgress from "@material-ui/core/CircularProgress";

// lib
import { post } from './../../lib/axios';
import { setCookies } from './../../lib/cookie';

class login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
		};
	}

	submitForm = async () => {
		this.setState({ isLoading: true });

		let username = document.getElementById('username_login').value;
		let password = document.getElementById('password_login').value;

		if (username !== "" && password !== "") {
			let data = {
				username: username,
				password: password,
			};

			let is_login = await post(`${process.env.REACT_APP_BASE_URL}api/login`, data)
			console.log(is_login)
			let showerr = document.getElementById("wrong_user&pass");
			if (is_login.data.login === true) {

				setCookies('user', is_login.data.name);
				setCookies('auth-token', is_login.data.token);

				showerr.style.display = "none";
				this.props.history.push('/dashboard');
// 				window.location.href = `dashboard`;

			} else {
				showerr.style.display = "flex";
			}
		} else {
			console.log("field form is valid");
		}


		this.setState({ isLoading: false });
	};

	componentDidMount(){
		alert('gunakan akun\nusername: admin\npassword: admin')
	}

	render() {
		return (
			<div className={s.bg}>
				<div className={s.container_login}>
					<div className={s.header_login}>
						<img alt="logo" src='/favicon.ico' className={`${s.img_logo} mx-auto`} />
						<p className='font-league_spartanbold p-2'>
							<span className='text-red-500'>Stikom</span>
							<span className='text-blue-500'>CKI</span>
							<span className='text-white'>.D</span>
						</p>
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
								id='username_login'
								type="text"
								name="username"
								placeholder="username"
								className={`${s.form_user} outline-none`}
							/>
						</div>
						<div className={s.password} id="password">
							<LockOutlinedIcon className={s.logo_login} />
							<input
								id='password_login'
								type="password"
								name="password"
								placeholder="password"
								className={`${s.form_user} outline-none`}
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

export default login;
