import React from "react";

import s from "./footer.module.css";

// material-ui
import {  Grid, TextField, Button } from "@material-ui/core";

// axios
import Axios from "axios";

import AccountCircle from "@material-ui/icons/AccountCircle";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded";

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
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

	handleSubmit(event) {
		event.preventDefault();
		let nama = this.validate(event.target.name.value, "name");
		let email = this.validate(event.target.email.value, "email");
		let msg = this.validate(event.target.msg.value, "msg");
		if (nama !== "" && email !== "" && msg !== "") {
			console.log("benar");
			let data = {
				name: nama,
				email: email,
				msg: msg,
			};
			Axios.post("https://website-stikomcki.herokuapp.com/call-us", data, {
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((res) => {
					console.log("sucsess");
					alert("msg sucees");
					document.getElementById("name").value = "";
					document.getElementById("email").value = "";
					document.getElementById("msg").value = "";
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			console.log("error");
		}
	}

	render() {
		return (
			<div className={s.footerContainer}>
				<Grid container spacing={0}>
					<Grid item sm={2}>
						<div className={s.container_footer_inside}>
							<p>Alamat kami :</p>
							<p className={s.alamat}>
								Jl.Taman Harapan Baru, RT.008/RW 023, Pejuang,
								Kecamatan Medan Satria, Kota Bekasi, Jawa Barat
								17175 , Telp.0211234567
							</p>
						</div>
					</Grid>
					<Grid item sm={2}>
						<div className={s.container_footer_inside}>
							<p>Link Cepat</p>
						</div>
						<div className={s.link_Cepat}>
							<ul>
								<li className={s.li_linesremove}>
									<a href="/" className={s.li_link_cepat}>
										Home
									</a>
								</li>
								<li className={s.li_linesremove}>
									<a href="/tujuan-prodi-TI" className={s.li_link_cepat}>
										Program Studi TI
									</a>
								</li>
								<li className={s.li_linesremove}>
									<a href="/tujuan-prodi-SI" className={s.li_link_cepat}>
										Program Studi SI
									</a>
								</li>
							</ul>
						</div>
					</Grid>
					<Grid item sm={2}>
						<div className={s.container_footer_inside}>
							<p>Kunjungi juga</p>
						</div>
						<div className={s.link_Cepat}>
							<ul>
								<li className={s.li_linesremove}>
									<a href="/" className={s.li_link_cepat}>
										Home
									</a>
								</li>
								<li className={s.li_linesremove}>
									<a
										href="https://www.banpt.or.id/"
										target="_blank"
										rel="noreferrer"
										className={s.li_link_cepat}
									>
										Ban PT AKREDITASI
									</a>
								</li>
								<li className={s.li_linesremove}>
									<a
										href="https://www.kemdikbud.go.id"
										target="_blank"
										rel="noreferrer"
										className={s.li_link_cepat}
									>
										Kemdikbuk
									</a>
								</li>
								<li className={s.li_linesremove}>
									<a
										href="https://forlap.ristekdikti.go.id/"
										target="_blank"
										rel="noreferrer"
										className={s.li_link_cepat}
									>
										Informasi Pendidikan Nasional
									</a>
								</li>
							</ul>
						</div>
					</Grid>
					<Grid item sm={6}>
						<div className={s.container_footer_inside}>
							<p>Hubungi Kami</p>
							<form
								className={s.name_and_email_form}
								onSubmit={this.handleSubmit}
								noValidate
								autoComplete="off"
								method="post"
							>
								<div className={s.name_form}>
									<div className={s.name}>
										<AccountCircle
											className={s.iconsName}
										/>
										<TextField
											id="name"
											name="name"
											label="Name"
										/>
									</div>
									<div className={s.email}>
										<EmailRoundedIcon
											className={s.iconsEmail}
										/>
										<TextField
											id="email"
											label="Email"
											type="email"
											name="email"
										/>
									</div>
								</div>
								<div className={s.msg_form}>
									<CreateRoundedIcon />
									<textarea
										id="msg"
										name="msg"
										className={s.textarea_form}
										placeholder="massage"
									></textarea>
								</div>
								<div className={s.button_form}>
									<Button
										variant="contained"
										size="small"
										color="primary"
										type="submit"
									>
										send
									</Button>
								</div>
							</form>
						</div>
					</Grid>
				</Grid>
				<div>
					<p className={s.copyright_container}>
						Copyright &copy; STIKOMCKI_D
					</p>
				</div>
			</div>
		);
	}
}

export default Footer;
