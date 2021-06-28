import React, {Fragment} from 'react';

// router
import { Link } from 'react-router-dom';

// css
import s from './../../../../asset/css/admin/dashboard/pages/mahasiswa/mahasiswa.module.css';

// lib
import { post } from './../../../../lib/axios';
import { changeName } from './../../../../lib/changeFormName.js';

// material ui
import { Modal, Backdrop, Fade} from '@material-ui/core';

import { connect } from 'react-redux';

import Loading from './../../../../component/animLoading/loading.js';
import Breadcumb from './../../../../component/breadCumb/breadcumb';

class Mahasiswa extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			isLoading: true,
			allMhs: [],
			showMhs: [],
			modal: {
				isLoading: false,
				open: false,
				nama_mhs: null,
				id_mhs: null,
			},
			pagination: {
				firstNumb: 1,
				maxPages: 0,
				posPages: 1,
			}
		}
	}

	deleteMhs = async () => {
		this.setState({modal: { ...this.state.modal, isLoading: true }});
		await post(`${process.env.REACT_APP_BASE_URL}api/mahasiswa/deleteMhs`, {id: this.state.modal.id_mhs});
		this.setState({modal: {...this.state.modal, open:false, isLoading: false}});
		this.updateMhs();
	}

	componentDidMount(){
		this.getMhs();
		this.props.changeNav(this.props.location.pathname);
	}

	changePagination = async (val) => {
		if ( val === '+' && this.state.pagination.posPages < this.state.pagination.maxPages ) {
			 this.setState({
				showMhs: this.state.allMhs.slice(this.state.pagination.firstNumb + 8, this.state.pagination.firstNumb + 16),
				pagination: {
					...this.state.pagination,
					firstNumb: this.state.pagination.firstNumb + 8,
					posPages: this.state.pagination.posPages + 1,
				},
			})
		} else if ( val === '-' && this.state.pagination.posPages > 1 ) {
			 this.setState({
				showMhs: this.state.allMhs.slice(this.state.pagination.firstNumb - 8, this.state.pagination.firstNumb),
				pagination: {
					...this.state.pagination,
					firstNumb: this.state.pagination.firstNumb - 8,
					posPages: this.state.pagination.posPages - 1,
				},
			})
		}
	}

	filterMhs = async (val) => {
		await post(`${process.env.REACT_APP_BASE_URL}api/mahasiswa/filterMhs`, {
			mhs: document.getElementById('filter_mahasiswa').value,
		}).then(res => {console.log(res);this.setState({showMhs: res.data.filter})})
			.catch(err => console.log(err));
	}

	async getMhs(){

		this.setState({isLoading: true})

		await post(`${process.env.REACT_APP_BASE_URL}api/mahasiswa`)
			.then(res => this.setState({
				allMhs: res.data.Mhs,
				showMhs: res.data.Mhs.slice(0,8),
				isLoading:false,
				pagination: {
					...this.state.pagination,
					maxPages: Math.ceil(res.data.Mhs.length / 8),
				}
			}))
			.catch(err => console.log(err));

	}

	render(){
		return(
			<Fragment>
			{this.state.isLoading ? <Loading /> : (
				<div className={s.body}>
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
			            	<img src='/image/icons/loading.svg' alt='loading' className={s.loadingIcons} />
			            	) : (<span>Delete</span>) }</button>
			            <button className={s.btn_cnclModal} onClick={() => this.setState({modal: { ...this.state.modal, open:false }})}>Cancel</button>
			          </div>
			        </Fade>
			      </Modal>

				{/* end  */}

				<Breadcumb path={this.props.location.pathname} />

				<div className='flex text-white my-7'>

					<div className='flex justify-start w-1/2'>
						<Link to='/dashboard/mahasiswa/add'>
							<button className='bg-blue-300 p-1 '>tambah siswa</button>
						</Link>
					</div>
					<div className='flex justify-end w-1/2'>
						<input type='text' className='border text-black px-1' id="filter_mahasiswa" />
						<button className='bg-blue-300 p-1 rounded-r-lg' onClick={this.filterMhs}>filter</button>
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
						{this.state.showMhs.map((val, index) => (
							<tr>
								<td className={s.no}>{this.state.pagination.firstNumb + index}</td>
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

				<div className='flex my-5'>

					<div className='flex justify-start w-1/2'>
						<p>pages {this.state.pagination.posPages} from {this.state.pagination.maxPages} </p>
					</div>
					<div className='flex justify-end w-1/2'>
						<img src='/image/icons/previous-button.svg' alt='button' className={s.arrowPagin} onClick={() => this.changePagination('-')} />

						{/* pagination */}
						{(() => {
							const allPagination = [];
							for (let i = 1; i <= this.state.pagination.maxPages; i++) {
								if (i === this.state.pagination.posPages) {
									allPagination.push(<p className='px-1 cursor-pointer bg-blue-400 text-white' onClick={() => this.changePagination(i)}>{i}</p>)
									continue;
								}
								allPagination.push(<p className='px-1 cursor-pointer' onClick={() => this.changePagination(i)}>{i}</p>)
							}
							return allPagination;
					      })()}


						<img src='/image/icons/next-button.svg' alt='button' className={s.arrowPagin} onClick={() => this.changePagination('+')} />
					</div>
				</div>

			</div>
				) }
			</Fragment>
			)
	}
}

const mapDispathToProps = dispatch => {
	return {
		changeNav : (nav) => dispatch({type:'change_navDashboard', nav:nav}),
	}
}

export default connect(null,mapDispathToProps)(Mahasiswa);