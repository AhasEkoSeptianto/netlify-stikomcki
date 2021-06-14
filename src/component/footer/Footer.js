import React from "react";

// material-ui
import {  Grid, Container, TextField, Button } from "@material-ui/core";

// axios
import Axios from "axios";

import { HashLink as Link } from 'react-router-hash-link';

class Footer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			form: {
				name: '',
				email: '',
				msg: '',
			}
		}
	}

	validate = (item, id) => {
		if (item !== "") {
			document.getElementById(id).setAttribute("style", "border:none");
			return item;
		} else {
			document
				.getElementById(id)
				.setAttribute("style", "border:.1rem solid red;");
		}
	};

	handleSubmit() {

		let nama = this.validate(this.state.form.name, "name");
		let email = this.validate(this.state.form.email, "email");
		let msg = this.validate(this.state.form.msg, "msg");
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
			<div className='bg-gray-100'>
				<Container className='text-gray-700 py-10'>

					<Grid container spacing={2} className='py-10'>

						<Grid item xs={12} lg={2}>
							<h1 className='font-league_spartanbold text-sm'>Alamat Kami :</h1>
							<section className='py-5'>
								<p className='font-source_sans_proregular text-sm'>Jl.Taman Harapan Baru, RT.008/RW 023, Pejuang, Kecamatan Medan Satria, Kota Bekasi, Jawa Barat 17175 , Telp.0211234567</p>
							</section>
						</Grid>

						<Grid item xs={12} lg={2}>
							<h1 className='font-league_spartanbold text-sm'>Link Cepat :</h1>
							<section className='py-5 text-sm divide-y divide-gray-400'>

								<Link to='/#index'>
									<p className='p-1 cursor-pointer border-b-2 border-gray-300 hover:bg-gray-200'>Home</p>
								</Link>
								<Link to='/tujuan-prodi-TI#index'>
									<p className='p-1 cursor-pointer border-b-2 border-gray-300 hover:bg-gray-200'>Program Studi TI</p>
								</Link>
								<Link to='/tujuan-prodi-SI#index'>
									<p className='p-1 cursor-pointer border-b-2 border-gray-300 hover:bg-gray-200'>Program Studi SI</p>
								</Link>

							</section>
						</Grid>

						<Grid item xs={12} lg={2}>
							<h1 className='font-league_spartanbold text-sm'>Kunjungi Juga :</h1>
							<section className='py-5 text-sm divide-y divide-gray-400'>
								<Link to='/#index'>
									<p className='p-1 cursor-pointer border-b-2 border-gray-300 hover:bg-gray-200'>Home</p>
								</Link>
								<a target='_blank' rel="noreferrer" href='https://www.banpt.or.id'>
									<p className='p-1 cursor-pointer border-b-2 border-gray-300 hover:bg-gray-200'>Ban PT AKREDITASI</p>
								</a>
								<a target='_blank' rel="noreferrer" href='https://kemdikbud.go.id'>
									<p className='p-1 cursor-pointer border-b-2 border-gray-300 hover:bg-gray-200'>Kemdikbuk</p>
								</a>
								<a target='_blank' rel="noreferrer" href='https://forlap.ristekdikti.go.id'>
									<p className='p-1 cursor-pointer border-b-2 border-gray-300 hover:bg-gray-200'>Informasi Pendidikan Nasional</p>
								</a>

							</section>
						</Grid>

						<Grid item xs={12} lg={6}>
							<h1 className='font-league_spartanbold text-sm'>Hubungi Kami :</h1>

							<Grid container spacing={2} className='my-5 p-2'>

								<Grid item xs={12} lg={6} className='flex items-center'>

									<Grid container spacing={1} alignItems="flex-end">
							          <Grid item>
							            <img src='/image/icons/userFooter.svg' alt='user' className='w-5' />
							          </Grid>
							          <Grid item>
							            <TextField label="Name" id='name' name='name' onChange={(e) => this.setState({form: {...this.state.form, name:e.target.value}})} />
							          </Grid>
							        </Grid>

								</Grid>

								<Grid item xs={12} lg={6}>

									<Grid container spacing={1} alignItems="flex-end">
							          <Grid item>
							            <img src='/image/icons/gmail.svg' alt='gmail' className='w-5' />
							          </Grid>
							          <Grid item>
							            <TextField id="email" name='email' label="Email" onChange={(e) => this.setState({form: {...this.state.form, email: e.target.value}})} />
							          </Grid>
							        </Grid>

								</Grid>

								<Grid item xs={12} lg={12}>
									<Grid container spacing={1}>

							          <Grid item lg={0}>
							            <img src='/image/icons/draw.svg' className='w-5' alt='draw' />
							          </Grid>

							          <Grid item lg={11}>

							          	<textarea placeholder='text' id='msg' className='border border-gray-300 outline-none w-full h-32 p-1 mb-2' onChange={(e) => this.setState({form: {...this.state.form, text: e.target.value}})} />
										<Button variant="contained" color='primary' size='small' className='lg:float-right' onClick={() => this.handleSubmit()}>Save</Button>

							          </Grid>

							        </Grid>
								</Grid>

							</Grid>


						</Grid>


					</Grid>

					<p className='font-source_sans_proregular text-sm'>Copyright © STIKOMCKI_D</p>

				</Container>
			</div>
		);
	}
}

export default Footer;
