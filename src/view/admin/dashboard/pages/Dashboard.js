import React from "react";

// css
import s from "./../../../../asset/css/admin/dashboard/Dashboard.module.css";

import Chart from './cartjs/chart.js';

// react material ui
import { Grid, Card } from '@material-ui/core'; 

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// lib
import { get, post } from './../../../../lib/axios.js';

import style from './Dashboard.module.css';

class Dashboard extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			date: new Date(),
			visitor: 0,
			mahasiswa: 0,
		}
	}

	async componentDidMount(){
		let Visitor = await get(`${process.env.REACT_APP_BASE_URL}api/getvisitor`);
		this.setState({visitor: Visitor.data.visitor});

		let Mahasiswa = await post(`${process.env.REACT_APP_BASE_URL}api/mahasiswa`, { skip: 0 });
		this.setState({mahasiswa: Mahasiswa.data.allMhs.length });

	}

	render() {
		return (
			<div className={s.body}>

				<Grid container spacing={5} className={s.cont_header}>
					<Grid item xs={12} lg={6}>
						<Card className={s.cardHeader}>
							<div className={s.cont_head_icons}>
								<img src='/image/icons/mahasiswa.svg' className={s.icons_headers} />
							</div>

							<div>
								<p>Mahasiswa</p>
								<p>{this.state.mahasiswa}</p>
							</div>

						</Card>
					</Grid>

					<Grid item xs={12} lg={6}>
						<Card className={s.cardHeader}>
							<div className={s.cont_head_icons}>
								<img src='/image/icons/visitor.svg' className={s.icons_headers} />
							</div>

							<div className={s.cont_info_head}>
								<p>Visitor Page</p>
								<p>{this.state.visitor} this month</p>
							</div>

						</Card>
					</Grid>

					<Grid item xs={12} lg={8}>			
						<Chart />			
					</Grid>

					<Grid item xs={12} lg={4}>
						<Calendar className={style.calendar} onChange={() => this.setState({date: new Date()})} value={this.state.date} className={s.calendar} />	
					</Grid>

				</Grid>



			</div>
		);
	}
}

export default Dashboard;
