import React from 'react';

// router
import { Link } from 'react-router-dom';

// css
import s from './../../../../../asset/css/admin/dashboard/pages/mahasiswa/mahasiswa.module.css';

// lib
import { get } from './../../../../../lib/axios';

class Mahasiswa extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			isLoading: true,
			allMhs: [],
		}
	}

	async componentDidMount(){
		var allMhs = await get(`${process.env.REACT_APP_BASE_URL}/api/mahasiswa`)
		this.setState({allMhs: allMhs.data.mhs, isLoading:false});
	}

	render(){
		return(
			<div className={this.state.isLoading ? s.hidden : s.body}>

				<h1 className={s.title}>Mahasiswa</h1>

				<div className={s.menuHeader}>
					<Link to='/dashboard/mahasiswa/add'>
						<button className={s.button}>Tambah Mhs</button>
					</Link>
					<div className={s.filter_cont}>
						<input type='text' />
						<button className={s.button_filter}>filter</button>
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
								<td className={s.no}>{index + 1}</td>
								<td className={s.nim}>{val.nim}</td>
								<td className={s.nama}>{val.nama}</td>
								<td className={s.jurusan}>{val.jurusan}</td>
								<td className={s.semester}>{val.semester}</td>
								<td className={s.kelas}>{val.kelas}</td>
								<td className={s.alamat}>{val.alamat}</td>
								<td className={s.notelp}>{val.notelp}</td>
								<td className={s.container_button}>
									<Link to={{pathname:'/dashboard/mahasiswa/detail', id:val._id }} className={s.link}>
										<button className={s.detailButton}>
											<img src='/image/icons/detail.svg' className={s.iconsButton} title='detail' alt='detail' />
										</button>
									</Link>
									<Link className={s.link}>
										<button className={s.updateButton}>
											<img src='/image/icons/update.svg' className={s.iconsButton} title='update' alt='update' />
										</button>
									</Link>
									<Link className={s.link}>
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
					<p>pages 1 from 2</p>
					<div className={s.container_arrow}>
						<img src='/image/icons/previous-button.svg' className={s.arrowPagin} />

						<p>1</p>
						<p>2</p>
						<p>..</p>
						<p>4</p>
						<p>5</p>

						<img src='/image/icons/next-button.svg' className={s.arrowPagin} />
					</div>
				</div>

			</div>
			)
	}
}

export default Mahasiswa;