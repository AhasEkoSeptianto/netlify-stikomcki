import React from 'react';

import s from './../../../../../asset/css/admin/dashboard/pages/mahasiswa/addMhs.module.css';

// lib
import { changeName, maxLength, changeNumberPhone } from './../../../../../lib/changeFormName.js';
import { post } from './../../../../../lib/axios.js';
import Breadcumbs from './../../../../../component/breadCumb/breadcumb';

// material ui
import { Paper, FormControl, InputLabel, Select, TextField, Button, InputAdornment } from '@material-ui/core';

class addMhs extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			form_nama:'',
			form_jurusan: '',
			form_semester: '',
			form_kelas: '',
			form_alamat: '',
			form_notelp: '',
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

	submitForm = async () => {

		await post(`${process.env.REACT_APP_BASE_URL}api/mahasiswa/addMhs`, {
			nama: this.state.form_nama,
			jurusan: this.state.form_jurusan,
			semester: this.state.form_semester,
			kelas: this.state.form_kelas,
			alamat: this.state.form_alamat,
			notelp: this.state.form_notelp,
		});

		this.props.history.push('/dashboard/mahasiswa');

	}

	render(){
		return (
			<div className={s.body}>

				<Breadcumbs path={this.props.location.pathname} />

				<Paper className={s.container_form}>

					<TextField label="Nama" className={s.formControl} value={this.state.form_nama} onChange={this.setFormName} maxlength="50" />

					<FormControl className={s.formControl}>
				        <InputLabel >Jurusan</InputLabel>
				        <Select
				          native
				          value={this.state.form_jurusan}
				          onChange={(e) => this.setState({form_jurusan: e.target.value })}
				        >
				          <option aria-label="None" value="" />
				          <option value={"Teknik Informatika"}>Teknik Informatika</option>
				          <option value={"Sistem Informasi"}>Sistem Informasi</option>
				        </Select>
				    </FormControl>

				    <FormControl className={s.formControl}>
				        <InputLabel >Semester</InputLabel>
				        <Select
				          native
				          value={this.state.form_semester}
				          onChange={(e) => this.setState({form_semester: e.target.value })}
				        >
				          <option aria-label="None" value="" />
				          <option value={1}>1</option>
				          <option value={2}>2</option>
				          <option value={3}>3</option>
				          <option value={4}>4</option>
				          <option value={5}>5</option>
				          <option value={6}>6</option>
				          <option value={7}>7</option>
				          <option value={8}>8</option>
				        </Select>
				    </FormControl>

				    <FormControl className={s.formControl}>
				        <InputLabel >Kelas</InputLabel>
				        <Select
				          native
				          value={this.state.form_kelas}
				          onChange={(e) => this.setState({form_kelas: e.target.value })}
				        >
				          <option aria-label="None" value="" />
				          <option value={'Reguler Pagi'}>Reguler Pagi</option>
				          <option value={'Reguler Malam'}>Reguler Malam</option>
				          <option value={'Karyawan Sabtu'}>Karyawan Sabtu</option>
				          <option value={'Shift'}>Shift</option>
				        </Select>
				    </FormControl>

					<TextField label="Alamat" className={s.formControl} onChange={this.setFormAlamat} value={this.state.form_alamat} />

					<TextField label="No Telp" InputProps={{ startAdornment: <InputAdornment position="start">+62</InputAdornment>, }} className={s.formControl} onChange={this.setFormNoTelp} value={this.state.form_notelp} maxlength="50" />

			    	<Button variant="contained" color="primary" className={s.buttonForm} onClick={this.submitForm}>Save</Button>
			    	<Button variant="contained" color="secondary" className={s.buttonForm} onClick={() => this.props.history.push('/dashboard/mahasiswa')}>Cancel</Button>

				</Paper>

			</div>
			)
	}
}

export default addMhs;