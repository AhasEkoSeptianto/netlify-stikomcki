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

class Dosen extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			isLoading: true,
			allDosen: [],
			filter:'',
			modal: {
				isLoading: false,
				open: false,
				nama_dosen: null,
				id_dosen: null,
			},
			pagination: {
				firstNumb: null,
				maxPages: 0,
				posPages: 1,
			}
		}
	}

	deleteDosen = async () => {
		this.setState({modal: { ...this.state.modal, isLoading: true }});

		await post(`${process.env.REACT_APP_BASE_URL}api/dosen/dltDosen`, {id: this.state.modal.id_dosen});

		this.setState({modal: {...this.state.modal, open:false, isLoading: false}});
		this.updateDosen();
	}

	componentDidMount(){
		this.updateDosen();
		this.props.changeNav(this.props.location.pathname);
	}

	changePagination = async (val) => {
		switch (val) {
			case '+' : {
				this.state.pagination.posPages < this.state.pagination.maxPages  ? this.updateDosen(this.state.pagination.posPages + 1 ) : console.log('page unknow') ;
				break;
			} case '-' : {
				this.state.pagination.posPages > 1 ? this.updateDosen( this.state.pagination.posPages - 1 ) : console.log('page unknow');
				break;
			} default : {
				console.log('errorr at changePagination')
			}
		}

		if (val < 100) {
			this.updateDosen( val );
		}

	}

	filterDosen = async (val) => {
		var allDosen = await post(`${process.env.REACT_APP_BASE_URL}api/dosen/filter_dosen`, {filter: this.state.filter});
		console.log(allDosen.data.filter);
		this.setState({allDosen: allDosen.data.filter});
	}

	async updateDosen(skipPage = 1){

		this.setState({isLoading: true})
		var allDosen = await post(`${process.env.REACT_APP_BASE_URL}api/dosen`, {pages: skipPage});
		this.setState({allDosen: allDosen.data.dosen, isLoading:false, pagination: {...this.state.pagination, maxPages: allDosen.data.maxPages, posPages:allDosen.data.posPages, firstNumb: allDosen.data.firstNumb }});
		console.log(this.state.allDosen);
	}

	render(){
		return(
			<Fragment>
			{this.state.isLoading ? <Loading /> : (
				<div className={s.body}>
				{/* modal delete */}
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
			            <p>Are you sure you delete {this.state.modal.nama_dosen} ? </p>
			            <button className={s.btn_dltModal} onClick={this.deleteDosen}>{this.state.modal.isLoading ? (
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
						<Link to='/dashboard/dosen/add'>
							<button className='bg-blue-300 p-1 '>tambah dosen</button>
						</Link>
					</div>
					<div className='flex justify-end w-1/2'>
						<input type='text' className='border text-black px-1' value={this.state.filter} onChange={e => this.setState({filter: e.target.value})} />
						<button className='bg-blue-300 p-1 rounded-r-lg' onClick={this.filterDosen}>filter</button>
					</div>

				</div>


				<table>
					<thead>
						<tr>
							<th>No</th>
							<th>Nid</th>
							<th>Nama</th>
							<th>Alamat</th>
							<th>Email</th>
							<th>No telp</th>
							<th>Aksi</th>
						</tr>
					</thead>

					<tbody>
						{this.state.allDosen.map((val, index) => (
							<tr>
								<td className={s.no}>{this.state.pagination.firstNumb + 1 + index}</td>
								<td className={s.nim}>{val.nid}</td>
								<td className={s.nama}>{changeName(val.nama)}</td>
								<td className='whitespace-nowrap max-w-lg'>{val.alamat}</td>
								<td>{val.email}</td>
								<td className={s.notelp}>0{val.notelp}</td>
								<td className={s.container_button}>
									<Link className={s.link} to={{pathname:'/dashboard/dosen/update', id:val._id}}>
										<button className={s.updateButton}>
											<img src='/image/icons/update.svg' className={s.iconsButton} title='update' alt='update' />
										</button>
									</Link>
									<Link className={s.link} onClick={() => this.setState({modal: { open:true, nama_dosen:val.nama , id_dosen:val._id }})}>
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

export default connect(null,mapDispathToProps)(Dosen);