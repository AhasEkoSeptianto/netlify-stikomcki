import React from 'react';

class calendar extends React.Component{

	componentDidMount(){

		var all_days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

		var date = new Date();
		// var day = all_days[date.getDay()];
		var month = date.getUTCMonth() + 1; //months from 1-12
		var day = date.getDate();
		var year = date.getUTCFullYear();

		var all_date = this.getDaysInMonth(month, year);

		var calendar = {
			years: year,
			frmday: all_days[day],
			month: month,
			cal: [],
		}

		var before = 35 - day;


		console.log(day, year, month, day);
	}

	getDaysInMonth = (iMonth, iYear) => {
		return new Date(iYear, iMonth, 0).getDate();
	}


	render(){
		return(
			<div className='w-full my-10'>

				<div className='w-full p-1'>

				</div>

			</div>
			)
	}
}

export default calendar;