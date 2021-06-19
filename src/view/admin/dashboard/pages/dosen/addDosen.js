import React from 'react';

import s from './../../../../../asset/css/admin/dashboard/pages/mahasiswa/addMhs.module.css';

// lib
import { changeName, maxLength, changeNumberPhone } from './../../../../../lib/changeFormName.js';
import { post } from './../../../../../lib/axios.js';
import Breadcumbs from './../../../../../component/breadCumb/breadcumb';
import { validate } from 'react-email-validator';

// material ui
import { Paper, FormControl, InputLabel, Select, TextField, Button, InputAdornment } from '@material-ui/core';

class addDosen extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			form_nama:'',
			form_alamat: '',
			form_email: '',
			form_notelp: '',
			form_option : {
				validate : {
					email: false,
				},
				duplicate: {
					nama: {
						dupl: false,
						msg: '',
					},
					email: {
						dupl: false,
						msg: '',
					},
				}
			}
		}
	}

	setFormName = (e) => {
		let fmtName = changeName(e.target.value);
		this.setState({form_nama: fmtName});
	}

	setFormAlamat = (e) => {
		let fmtAlamat = maxLength(50, e.target.value);
		this.setState({form_alamat: fmtAlamat});
	}

	setFormNoTelp = (e) => {
		var alamat = e.target.value;
		alamat = changeNumberPhone(alamat);
		this.setState({form_notelp: alamat})
	}

	setEmail = (e) => {
		this.setState({form_email: e.target.value});
		var valid = validate(this.state.form_email);
		console.log(valid);
		var id = document.getElementById('dosen_email_form')
		if (valid) {
			this.setState({form_option: {...this.state.form_option, validate: {email: false}}})
		} else {
			this.setState({form_option: {...this.state.form_option, validate: {email: true}}})
		}
	}

	submitForm = async () => {

		var request = await post(`${process.env.REACT_APP_BASE_URL}api/dosen/addDosen`, {
			nama: this.state.form_nama,
			email: this.state.form_email,
			alamat: this.state.form_alamat,
			notelp: this.state.form_notelp,
		});

		console.log(request);

		if (request.data.result === 'success') {
			this.props.history.push('/dashboard/dosen');
		}

		if (request.data.result === 'duplicate'){
			this.setState({
				form_option: {
					...this.state.form_option,
					duplicate: {
						nama : {
							dupl: false,
							msg: '',
						},
						email: {
							dupl: false,
							msg: '',
						},
						[request.data.exist]: {
							dupl: true,
							msg: request.data.msg,
						},
					}
				}
			});
		}


	}

	render(){
		return (
			<div className={s.body}>

				<Breadcumbs path={this.props.location.pathname} />

				<Paper className={`${s.container_form} my-5`}>

					<div className='my-3'>
						<TextField label="Nama" error={this.state.form_option.duplicate.nama.dupl} helperText={this.state.form_option.duplicate.nama.msg} className={s.formControl} value={this.state.form_nama} onChange={this.setFormName} maxlength="50" />
					</div>

					<div className='my-3'>
						<TextField label="Alamat" className={s.formControl} onChange={this.setFormAlamat} value={this.state.form_alamat} />
					</div>

					<div className='my-3'>
						<TextField label="Email" error={this.state.form_option.validate.email || this.state.form_option.duplicate.email.dupl} helperText={this.state.form_option.duplicate.email.msg} type='email' className={s.formControl} onChange={this.setEmail} value={this.state.form_email} id='dosen_email_form' />
					</div>

					<TextField label="No Telp" InputProps={{ startAdornment: <InputAdornment position="start">+62</InputAdornment>, }} className={s.formControl} onChange={this.setFormNoTelp} value={this.state.form_notelp} maxlength="50" />

			    	<Button variant="contained" color="primary" className={s.buttonForm} onClick={this.submitForm}>Save</Button>
			    	<Button variant="contained" color="secondary" className={s.buttonForm} onClick={() => this.props.history.push('/dashboard/mahasiswa')}>Cancel</Button>

				</Paper>

			</div>
			)
	}
}

export default addDosen;