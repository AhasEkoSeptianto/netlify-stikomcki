import React from "react";

import styles from "./../../../../../asset/css/admin/dashboard/pages/settings.module.css";

// comp form
import ChangeName from './form_setting/changeName';
import ChangeAccount from './form_setting/changeAccount';

import { connect } from 'react-redux';

import Breadcumbs from './../../../../../component/breadCumb/breadcumb';

class Settings extends React.Component {

	Exit = () => {
		this.props.history.push("/");
	}

	componentDidMount(){
		this.props.changeNav(this.props.location.pathname);
	}

	render() {
		return (
			<div className={styles.body}>

				<div className='mb-5'>
					<Breadcumbs path={this.props.location.pathname} />
				</div>

				{/* settings profile */}
				<p className={styles.titleSetting}>Profile</p>
				<ChangeName />

				<p className={styles.titleSetting}>Account</p>
				<ChangeAccount />

				<button className={styles.buttonLogout} onClick={this.Exit}>Exit</button>

			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		changeNav : (nav) => dispatch({type:'change_navDashboard', nav:nav}),
	}
}

export default connect(null, mapDispatchToProps)(Settings);
