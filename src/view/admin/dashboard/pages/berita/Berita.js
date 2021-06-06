import React from "react";

import styles from "./../../../../../asset/css/admin/dashboard/pages/berita.module.css";

import Axios from "axios";

import CircularProgress from "@material-ui/core/CircularProgress";

import { Card, Modal, Backdrop, Fade, Button } from '@material-ui/core';

// Cookie
import Cookies from "universal-cookie";

// lib
import { post } from './../../../../../lib/axios.js';


import { connect } from 'react-redux';

var cookie = new Cookies();

class Master extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {
				judul: null,
				file: null,
				textIsi: null,
			},
			modal: {
				open:false,
				id: null,
				title: null,
				image: null,
				content: null,
			},
			navCreate: true,
			liveImage: null,
			listNews: [],
			isLoading:false,
		};
	}

	_onChangeFile = (e) => {
		const file = e.target.files[0];
		this.setState({ form: { ...this.state.form, file: file } });

		const path = URL.createObjectURL(file);
		this.setState({ liveImage: path });
	};

	_btnSave = async () => {

		this.setState({isLoading:true})// loading true

		const formData = new FormData();
		formData.append("file", this.state.form.file);

		await post(`${process.env.REACT_APP_BASE_URL}api/broadcast/addImage`, formData)
			.then(async (res) => {
				if (res.data.status === true) {
					await post(`${process.env.REACT_APP_BASE_URL}api/broadcast/addNews`, {
						judul: this.state.form.judul,
						isiText: this.state.form.textIsi,
						imgUrl: res.data.path,
						token: cookie.get('auth-token'),
					}).then(res => alert('success')).catch(err => alert(err));
				}
			})

		this._generatedList();

		this.setState({isLoading:false});
	};

	_generatedList = async () => {
		await Axios.get(
			`${process.env.REACT_APP_BASE_URL}api/broadcast/allData`
		)
			.then((res) => {
				this.setState({ listNews: res.data.reverse() })
			})
			.catch((err) => console.log(err));
	};

	deleteNews = async () => {
		this.setState({ modal: { ...this.state.modal, open: false } });
		let resPost = await post(`${process.env.REACT_APP_BASE_URL}api/broadcast/delete`, { id: this.state.modal.id, token: cookie.get('auth-token') })
		if (resPost.data.result === 'success'){
			this._generatedList();
		}
	}

	componentDidMount() {
		this._generatedList();
		this.props.changeNav(this.props.location.pathname);
	}

	render() {
		return (
			<div className={styles.body}>
				<div className={styles.nav_berita}>
					<p onClick={() => this.setState({ navCreate: true })} className={this.state.navCreate ? `${styles.create_btn} bg-blue-100` : styles.create_btn}>
						create
					</p>
					<p onClick={() => this.setState({ navCreate: false })} className={this.state.navCreate ? styles.create_btn : `${styles.create_btn} bg-blue-100` }>
						list berita
					</p>
				</div>

				{/* create */}
				<div
					className={
						this.state.navCreate
							? styles.cont_create_active
							: styles.cont_create_notActive
					}
				>
					<div className={styles.left_windowCreate}>
						<div className={styles.inputJudul}>
							<p>Judul</p>
							<textarea
								className='border'
								type="text"
								onChange={(e) =>
									this.setState({
										form: {
											...this.state.form,
											judul: e.target.value,
										},
									})
								}
							/>
						</div>
						<div className={styles.inputImage}>
							<p>Gambar</p>
							<input type="file" onChange={this._onChangeFile} />
						</div>
						{this.state.liveImage ? (
							<div className={styles.liveImage}>
								<p>Preview</p>
								<img
									alt=""
									src={this.state.liveImage}
									style={{ width: "90%" }}
								/>
							</div>
						) : null}
					</div>
					<div className={styles.right_windowCreate}>
						<div className={styles.inputText}>
							<p>Content </p>
							<textarea
								type="text"
								className='border'
								onChange={(e) =>
									this.setState({
										form: {
											...this.state.form,
											textIsi: e.target.value,
										},
									})
								}
							/>
						</div>
						<button
							className={styles.btn_save}
							onClick={this._btnSave}
						>
							Save {this.state.isLoading ? <CircularProgress style={{ marginLeft: 10 }} size={15} color="inherit" disableShrink /> : null } 
						</button>
					</div>
				</div>
				{/* end create */}

				{/* list */}
				<div
					className={
						this.state.navCreate
							? styles.cont_create_notActive
							: styles.cont_create_active
					}
				>

					<Modal
				        aria-labelledby="transition-modal-title"
				        aria-describedby="transition-modal-description"
				        className={'classes.modal'}
				        open={this.state.modal.open}
				        onClose={() => this.setState({modal: { ...this.state.modal, open:false }})}
				        closeAfterTransition
				        BackdropComponent={Backdrop}
				        BackdropProps={{
				          timeout: 500,
				        }}
				      >
				        <Fade in={this.state.modal.open}>
				        	<div className='flex justify-center items-center h-screen'>
					        	<div className='w-10/12 lg:w-1/3 mx-auto bg-white p-5 overflow-y-auto h-full'>
					        		<p className='text-2xl text-center font-bold'>{this.state.modal.title}</p>
					        		<img src={`${process.env.REACT_APP_BASE_URL + this.state.modal.image}`} className='w-11/12 mx-auto my-5' />
					        		<p className='mb-5'>{this.state.modal.content}</p>

					        		<div className='flex justify-end my-5'>
					        			<div>
							        		<Button variant="contained" color="secondary" onClick={this.deleteNews}>Delete</Button>
					        			</div>
					        			<div className='ml-5'>
							        		<Button variant="contained" color="primary" onClick={
							        			() => this.setState({modal: { ...this.state.modal, open:false }})
							        			}>Close</Button>
					        			</div>
					        		</div>

					        	</div>
				        	</div>
				        </Fade>
				      </Modal>

					<div className={styles.cont_list}>
						{this.state.listNews.map((val, index) => (

							<Card className='w-1/2 lg:w-1/3 p-5 cursor-pointer hover:shadow-xl ' onClick={
								() => this.setState({modal: {id:val._id, title: val.title, image: val.imageUrl, content: val.content, open: true }})
								}>
								<h1 className='overflow-hidden text-lg lg:text-2xl font-bold text-center'>{val.title}</h1>
								<img src={`${process.env.REACT_APP_BASE_URL + val.imageUrl}`} className='w-11/12 mx-auto my-5' />
								<p className='max-h-20 text-sm'>{val.content}</p>
							</Card>
						))}
					</div>
				</div>
				{/* end list */}
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		changeNav: (nav) => dispatch({type:'change_navDashboard', nav: nav}),
	}
}

export default connect(null, mapDispatchToProps)(Master);
