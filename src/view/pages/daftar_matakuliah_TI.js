import React, { Fragment } from "react";

// material-ui
import {
	Paper,
	Breadcrumbs,
	Typography,
	Grid,
} from "@material-ui/core";

// my nav
import Nav from "./../../component/navbar/navbar.js";

// module react-anchor
import ScrollableAnchor from "react-scrollable-anchor";

// mycss
import s from "./../../asset/css/daftar_matakuliah_TI.module.css";

// react-router-dom link
import { Link } from "react-router-dom";

// my footer
import Footer from "./../../component/footer/Footer.js";

// data mata kuliah TI
import Data_dosen_TI from "./../../component/data/data_daftar_matkul_TI.js";

class daftar_matakuliah_TI extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: [],
		};
	}

	componentDidMount() {
		document.title = "kalender akademik";
	}

	render() {
		return (
			<Fragment>
				<Nav />
				<ScrollableAnchor id="main">
					<div></div>
				</ScrollableAnchor>
				<div className={s.container}>
					<Grid container spacing={5}>
						<Grid item sm={8}>
							<Paper
								className={s.paperMain}
								variant="outlined"
								square
							>
								<Breadcrumbs
									aria-label="breadcrumb"
									className={s.breadcrumb}
								>
									<Link
										color="inherit"
										to="/#main"
										className={s.link}
									>
										Home
									</Link>
									<Typography color="textPrimary">
										Daftar matakuliah TI
									</Typography>
								</Breadcrumbs>
								<div className={s.paperContent}>
									<h2 className={s.contentheader}>
										Daftar matakuliah TI
									</h2>

								{/* table */}

								<table className='table-auto text-sm' cellspacing="0">

									<thead>
										<tr>
											<th>No</th>
											<th>Nama Dosen Pengajar</th>
											<th>Kode Matakuliah</th>
											<th>Nama Matakuliah</th>
											<th>Jumlah Kelas</th>
											<th>Jumlah Pertemuan</th>
										</tr>
									</thead>

									<tbody>
										{Data_dosen_TI.map((val, index) => {
											return (
												<tr>
													<td className='p-2 m-0 border'>{val.no}</td>
													<td className='p-2 m-0 border'>{val.nama}</td>
													<td className='p-2 m-0 border divide-y divide-gray-300'>
														{val.data.map((val, index) => (
															<tr className='border-0'>
																<td>{val.kode_matakuliah}</td>
															</tr>
														))}
													</td>
													<td className='p-2 m-0 border divide-y divide-gray-300'>
														{val.data.map((val, index) => (
															<tr className='border-0'>
																<td className='whitespace-nowrap'>{val.nama_matakuliah}</td>
															</tr>
														))}
													</td>
													<td className='p-2 m-0 border divide-y divide-gray-300'>
														{val.data.map((val, index) => (
															<tr className='border-0'>
																<td>{val.jumlah_kelas}</td>
															</tr>
														))}
													</td>
													<td className='p-2 m-0 border divide-y divide-gray-300'>
														{val.data.map((val, index) => (
															<tr className='border-0'>
																<td>{val.pertemuan}</td>
															</tr>
														))}
													</td>
												</tr>
												)
										})}
									</tbody>
								</table>

								{/* end table */}

								</div>
							</Paper>
						</Grid>
						<Grid item sm={3}>
							<Paper
								className={s.paperKategory}
								variant="outlined"
								square
							>
								<div className={s.kategori}>
									<h4>Kategori</h4>
									<ul className={s.ul_kategori}>
										<li className={s.list_kategori}>
											<Link
												className={s.link}
												href="#"
												to="#"
											>
												Berita
											</Link>
										</li>
										<li className={s.list_kategori}>
											<Link
												className={s.link}
												href="#"
												to="#"
											>
												Pengumuman
											</Link>
										</li>
									</ul>
								</div>
								<div className={s.berita_terbaru}>
									<h4>Pos-pos terbaru</h4>
									<ul className={s.ul_kategori}>
										<li className={s.list_kategori}>
											<Link
												className={s.link}
												href="#"
												to="#"
											>
												Berita
											</Link>
										</li>
										<li className={s.list_kategori}>
											<Link
												className={s.link}
												href="#"
												to="#"
											>
												Pengumuman
											</Link>
										</li>
									</ul>
								</div>
							</Paper>
						</Grid>
					</Grid>
				</div>
				<Footer />
			</Fragment>
		);
	}
}

export default daftar_matakuliah_TI;
