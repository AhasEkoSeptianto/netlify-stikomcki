import React from 'react';

import s from './../../../../../asset/css/admin/dashboard/pages/mahasiswa/addMhs.module.css';

// lib
import { changeName, maxLength, changeNumberPhone } from './../../../../../lib/changeFormName.js';
import { post, get } from './../../../../../lib/axios.js';

// material ui
import { Paper, FormControl, InputLabel, Select, TextField, Button, InputAdornment } from '@material-ui/core';


class updateMhs extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			isLoading: true,
			form_id: '',
			form_nim: '',
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

		var posts = await post(`${process.env.REACT_APP_BASE_URL}api/mahasiswa/updateMhs`, {
			id: this.state.form_id,
			nama: this.state.form_nama,
			jurusan: this.state.form_jurusan,
			semester: this.state.form_semester,
			kelas: this.state.form_kelas,
			alamat: this.state.form_alamat,
			notelp: this.state.form_notelp,
		});

		this.props.history.push('/dashboard/mahasiswa');

	}

	async componentDidMount(){

		if (!this.props.location.id){
			this.props.history.push('/dashboard/mahasiswa')
		}

		var updateMhs = await post(`${process.env.REACT_APP_BASE_URL}api/mahasiswa/findMhs`, {id: this.props.location.id});

		this.setState({
			form_id: updateMhs.data.mahasiswa[0]._id,
			form_nim: updateMhs.data.mahasiswa[0].nim,
			form_nama: updateMhs.data.mahasiswa[0].nama,
			form_jurusan: updateMhs.data.mahasiswa[0].jurusan,
			form_semester: updateMhs.data.mahasiswa[0].semester,
			form_kelas: updateMhs.data.mahasiswa[0].kelas,
			form_alamat: updateMhs.data.mahasiswa[0].alamat,
			form_notelp: updateMhs.data.mahasiswa[0].notelp,
			isLoading: false,
		})
	}

	render(){
		return(
			<div className={this.state.isLoading ? s.loading : s.body }>
				<h1 className={s.titleHeader}>Update Mahasiswa</h1>

				<Paper className={s.container_form}>

					<TextField label="ID" className={s.formControl} value={this.state.form_id} onChange={this.setFormName} InputProps={{ readOnly: true }} disabled />

					<TextField label="Nim" className={s.formControl} value={this.state.form_nim} onChange={this.setFormName} InputProps={{ readOnly: true }} disabled />

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
				          <option value={2}>2</option>
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

export default updateMhs;