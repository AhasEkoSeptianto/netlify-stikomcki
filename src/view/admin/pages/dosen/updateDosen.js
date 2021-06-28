import React from 'react';

import s from './../../../../asset/css/admin/dashboard/pages/mahasiswa/addMhs.module.css';

// lib
import { changeName, maxLength, changeNumberPhone } from './../../../../lib/changeFormName.js';
import { post } from './../../../../lib/axios.js';

// material ui
import { Paper, TextField, Button, InputAdornment } from '@material-ui/core';


class updateDosen extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			isLoading: true,
			form : {
				id: '',
				nid: '',
				nama: '',
				alamat: '',
				email: '',
				notelp: '',
			}
		}
	}

	setFormName = (e) => {

		let fmtName = changeName(e.target.value);
		this.setState({
			form: {
				...this.state.form,
				nama: fmtName,
			}
		});
	}

	setFormAlamat = (e) => {
		let fmtAlamat = maxLength(50, e.target.value);
		this.setState({
			form: {
				...this.state.form,
				alamat: fmtAlamat,
			}
		});
	}

	setFormNoTelp = (e) => {

		var notelp = e.target.value;
		notelp = changeNumberPhone(notelp);
		this.setState({
			form: {
				...this.state.form,
				notelp: notelp,
			}
		})
	}

	submitForm = async () => {

		await post(`${process.env.REACT_APP_BASE_URL}api/dosen/update_dosen`, {
			id: this.state.form.id,
			nid: this.state.form.nid,
			nama: this.state.form.nama,
			alamat: this.state.form.alamat,
			email: this.state.form.email,
			notelp: this.state.form.notelp,
		});

		this.props.history.push('/dashboard/dosen');

	}

	async componentDidMount(){

		if (!this.props.location.id){
			this.props.history.push('/dashboard/mahasiswa')
		}

		var get_dosen = await post(`${process.env.REACT_APP_BASE_URL}api/dosen/find_dosen`, {id: this.props.location.id});

		this.setState({
			form: {
				id: get_dosen.data.dosen._id,
				nid: get_dosen.data.dosen.nid,
				nama: get_dosen.data.dosen.nama,
				alamat: get_dosen.data.dosen.alamat,
				email: get_dosen.data.dosen.email,
				notelp: get_dosen.data.dosen.notelp,
			},
			isLoading: false,
		})

	}

	render(){
		return(
			<div className={this.state.isLoading ? s.loading : s.body }>
				<h1 className={s.titleHeader}>Update Mahasiswa</h1>

				<Paper className={s.container_form}>

					<div className='my-5'>
						<TextField
							label="NID"
							className={s.formControl}
							value={this.state.form.id}
							InputProps={{ readOnly: true }}
							disabled />
					</div>

					<div className='my-5'>
						<TextField
							label="Nama"
							className={s.formControl}
							value={this.state.form.nama}
							onChange={this.setFormName}
							maxlength="50" />
					</div>

					<div className='my-5'>
						<TextField
							label="Alamat"
							className={s.formControl}
							onChange={this.setFormAlamat}
							value={this.state.form.alamat} />
					</div>

					<div className='my-2'>
						<TextField
							label="No Telp"
							InputProps={{
								startAdornment: <InputAdornment position="start">+62</InputAdornment>, 
							}}
							className={s.formControl}
							onChange={this.setFormNoTelp}
							value={this.state.form.notelp}
							maxlength="50" />
					</div>

			    	<Button variant="contained" color="primary" className={s.buttonForm} onClick={this.submitForm}>Save</Button>
			    	<Button variant="contained" color="secondary" className={s.buttonForm} onClick={() => this.props.history.push('/dashboard/mahasiswa')}>Cancel</Button>

				</Paper>

			</div>
			)
	}
}

export default updateDosen;