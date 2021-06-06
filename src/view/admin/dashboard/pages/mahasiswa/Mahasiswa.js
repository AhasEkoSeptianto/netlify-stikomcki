import React from 'react';

// router
import { Link } from 'react-router-dom';

// css
import s from './../../../../../asset/css/admin/dashboard/pages/mahasiswa/mahasiswa.module.css';

// lib
import { get, post } from './../../../../../lib/axios';
import { changeName } from './../../../../../lib/changeFormName.js';

// material ui
import { Modal, Backdrop, Fade, Button } from '@material-ui/core';

import { connect } from 'react-redux';

class Mahasiswa extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			isLoading: true,
			allMhs: [],
			filter:'',
			modal: {
				isLoading: false,
				open: false,
				nama_mhs: null,
				id_mhs: null,
			},
			pagination: {
				skipPage: 1	,
				maxPage: 0,
				posPage: 1,
			}
		}
	}

	deleteMhs = async () => {
		this.setState({modal: { ...this.state.modal, isLoading: true }});
		var posts = await post(`${process.env.REACT_APP_BASE_URL}api/mahasiswa/deleteMhs`, {id: this.state.modal.id_mhs});
		this.setState({modal: {...this.state.modal, open:false, isLoading: false}});
		this.updateMhs();
	}

	componentDidMount(){
		this.updateMhs(0);
		this.props.changeNav(this.props.location.pathname);
	}

	changePagination = async (val) => {
		switch (val) {
			case '+' : {
				this.state.pagination.posPage + 2 > this.state.pagination.maxPage ? console.log('page unknow') : this.updateMhs(this.state.pagination.posPage + 1 ) ;
				break;
			} case '-' : {
				this.state.pagination.posPage < 1 ? console.log('page unknow') : this.updateMhs( this.state.pagination.posPage - 1 );
				break;
			}
		}

		if (val < 100) {
			this.updateMhs( val );
		}

	}

	filterMhs = async (val) => {
		var allMhs = await post(`${process.env.REACT_APP_BASE_URL}api/mahasiswa/filterMhs`, {mhs: this.state.filter});
		this.setState({allMhs: allMhs.data.filter});
	}

	async updateMhs(skipPage){
		var allMhs = await post(`${process.env.REACT_APP_BASE_URL}api/mahasiswa`, {skip: skipPage});
		this.setState({allMhs: allMhs.data.mhs, isLoading:false, pagination: {...this.state.pagination, maxPage: allMhs.data.max, skipPage: allMhs.data.skip, posPage:allMhs.data.page}});
		console.log(this.state)
	}

	render(){
		return(
			<div className={this.state.isLoading ? s.hidden : s.body}>

				{/* modal */}

				<Modal
			        aria-labelledby="transition-modal-title"
			        aria-describedby="transition-modal-description"
			        className={s.container_modal}
			        open={this.state.modal.open}
			        onClose={() => this.setState({modal: {...this.state.modal, open:false}})}
			        closeAfterTransition
			        BackdropComponent={Backdrop}
			        BackdropProps={{
			          timeout: 500,
			        }}
			      >
			        <Fade in={this.state.modal.open}>
			          <div className={s.modal}>
			            <p>Are you sure you delete {this.state.modal.nama_mhs} ? </p>
			            <button className={s.btn_dltModal} onClick={this.deleteMhs}>{this.state.modal.isLoading ? (
			            	<img src='/image/icons/loading.svg' className={s.loadingIcons} />
			            	) : (<span>Delete</span>) }</button>
			            <button className={s.btn_cnclModal} onClick={() => this.setState({modal: { ...this.state.modal, open:false }})}>Cancel</button>
			          </div>
			        </Fade>
			      </Modal>

				{/* end  */}

				<h1 className={`${s.title} font-bold`}>Mahasiswa</h1>

				<div className={s.menuHeader}>
					<Link to='/dashboard/mahasiswa/add'>
						<button className={s.button}>Tambah Mhs</button>
					</Link>
					<div className={s.filter_cont}>
						<input type='text' placeholder='nim/nama/etc' onChange={(e) => this.setState({filter:e.target.value})} />
						<button className={s.button_filter} onClick={this.filterMhs}>filter</button>
					</div>
				</div>



				<table>
					<thead>
						<tr>
							<th>No</th>
							<th>Nim</th>
							<th>Nama</th>
							<th>Jurusan</th>
							<th>Semester</th>
							<th>Kelas</th>
							<th>Alamat</th>
							<th>No telp</th>
							<th>Aksi</th>
						</tr>
					</thead>

					<tbody>
						{this.state.allMhs.map((val, index) => (
							<tr>
								<td className={s.no}>{this.state.pagination.skipPage + 1 + index}</td>
								<td className={s.nim}>{val.nim}</td>
								<td className={s.nama}>{changeName(val.nama)}</td>
								<td className={s.jurusan}>{changeName(val.jurusan)}</td>
								<td className={s.semester}>{val.semester}</td>
								<td className={s.kelas}>{changeName(val.kelas)}</td>
								<td className={s.alamat}>{val.alamat}</td>
								<td className={s.notelp}>0{val.notelp}</td>
								<td className={s.container_button}>
									<Link className={s.link} to={{pathname:'/dashboard/mahasiswa/update', id:val._id}}>
										<button className={s.updateButton}>
											<img src='/image/icons/update.svg' className={s.iconsButton} title='update' alt='update' />
										</button>
									</Link>
									<Link className={s.link} onClick={() => this.setState({modal: { open:true, nama_mhs:val.nama , id_mhs:val._id }})}>
										<button className={s.deleteButton}>
											<img src='/image/icons/delete.svg' className={s.iconsButton} title='delete' alt='delete' />
										</button>
									</Link>
								</td>
							</tr>
							))}
					</tbody>
				</table>

				<div className={s.container_pagination}>
					<p>pages {Math.round(this.state.pagination.skipPage / 8 + 1)} from {this.state.pagination.maxPage} </p>
					<div className={s.container_arrow}>
						<img src='/image/icons/previous-button.svg' className={s.arrowPagin} onClick={() => this.changePagination('-')} />

						{/* pagination */}
						{(() => {
					        const pagination = [];
					        for (let i = 1; i <= this.state.pagination.maxPage; i++) {

					          if (i <= 0 ) {
					           continue
					       	 }

					       	 if (this.state.pagination.maxPage > 3){
					          	if (i >= this.state.pagination.skipPage + 3  ) { continue }
					          }

					          pagination.push(<p className={i === this.state.pagination.posPage + 1 ? s.paginationPost : '' } onClick={() => this.changePagination(i-1)}>{i}</p>);
					        }

					        if ( this.state.pagination.maxPage > 3 ) {
						        pagination.push(<p>...</p>);
						        pagination.push(<p>{this.state.pagination.maxPage}</p>);
					        }

					        return pagination;
					      })()}


						<img src='/image/icons/next-button.svg' className={s.arrowPagin} onClick={() => this.changePagination('+')} />
					</div>
				</div>

			</div>
			)
	}
}

const mapDispathToProps = dispatch => {
	return {
		changeNav : (nav) => dispatch({type:'change_navDashboard', nav:nav}),
	}
}

export default connect(null,mapDispathToProps)(Mahasiswa);