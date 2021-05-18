import React from "react";

import styles from "./../../../../../asset/css/admin/dashboard/pages/berita.module.css";

import Axios from "axios";

import CircularProgress from "@material-ui/core/CircularProgress";


// Cookie
import Cookies from "universal-cookie";

class Master extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {
				judul: null,
				file: null,
				textIsi: null,
			},
			navCreate: true,
			liveImage: null,
			listNews: [],
			isLoading:false,
		};
	}

	_onChangeFile = (e) => {
		console.log(this.state.form);
		const file = e.target.files[0];
		this.setState({ form: { ...this.state.form, file: file } });

		const path = URL.createObjectURL(file);
		// console.log("path = ", path);
		this.setState({ liveImage: path });
	};

	_btnSave = async () => {

		this.setState({isLoading:true})// loading true

		const formData = new FormData();
		formData.append("file", this.state.form.file);
		await Axios.post(
			"https://website-stikomcki.herokuapp.com/api/broadcast/addImage",
			formData
		)
			.then(async (res) => {
				console.log("first = " ,res.data);
				if (res.data.status === true) {
					await Axios.post(
						"https://website-stikomcki.herokuapp.com/api/broadcast/addNews",
						{
							judul: this.state.form.judul,
							isiText: this.state.form.textIsi,
							imgUrl: res.data.path,
							token: new Cookies().get('auth-token'),
						}
					)
						.then((res) => alert(res))
						.catch((err) => alert(err));
				}
			})
			.catch((err) => alert(err));
		await this._generatedList();
		this.setState({isLoading:false});
	};

	_generatedList = async () => {
		await Axios.get(
			"https://website-stikomcki.herokuapp.com/api/broadcast/allData"
		)
			.then((res) => {
				this.setState({ listNews: res.data.reverse() })
			})
			.catch((err) => console.log(err));
	};

	componentDidMount() {
		this._generatedList();
	}

	render() {
		return (
			<div className={styles.body}>
				<div className={styles.nav_berita}>
					<p onClick={() => this.setState({ navCreate: true })} className={styles.create_btn}>
						create
					</p>
					<p onClick={() => this.setState({ navCreate: false })}>
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
					<div className={styles.cont_list}>
						{this.state.listNews.map((val, index) => (
							<div className={styles.card_list}>
								<p className={styles.isiText}>{val.title}</p>
								<img
									alt="image"
									src={
										"https://website-stikomcki.herokuapp.com/" +
										val.imageUrl
									}
									className={styles.img_list}
								/>
								<p className={styles.isiText}>{val.content}</p>
							</div>
						))}
					</div>
				</div>
				{/* end list */}
			</div>
		);
	}
}

export default Master;
