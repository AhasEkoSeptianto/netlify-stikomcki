import React from "react";

// css
import s from "./../../../asset/css/admin/dashboard/Dashboard.module.css";

// component
import Chart from './component/cartjs/chart.js';
import News_table from './component/table/news_tables';
import Calendar from './component/calendar/calendar';

// react material ui
import { Grid, Card } from '@material-ui/core';

// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
//  import Calendar from 'rc-calendar';



// lib
import { get, post } from './../../../lib/axios.js';
import { connect } from 'react-redux';

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

		this.props.changeNav(this.props.location.pathname);


		let Visitor = await get(`${process.env.REACT_APP_BASE_URL}api/getvisitor`);
		this.setState({visitor: Visitor.data.visitor});


	}

	render() {
		return (
			<Grid container spacing={0} className='flex p-2 h-full'>
				<Grid item xs={12} lg={6}>
					<Card className={s.cardHeader}>
						<div className={s.cont_head_icons}>
							<img src='/image/icons/mahasiswa.svg' alt='mahasiswa' className={s.icons_headers} />
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
							<img src='/image/icons/visitor.svg' alt='visitor' className={s.icons_headers} />
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
					<Calendar />
				</Grid>


				<Grid item xs={12}>
					<News_table />
				</Grid>

			</Grid>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		changeNav : (nav) => dispatch({type:'change_navDashboard', nav:nav}),
	}
}

export default connect(null, mapDispatchToProps)(Dashboard);
