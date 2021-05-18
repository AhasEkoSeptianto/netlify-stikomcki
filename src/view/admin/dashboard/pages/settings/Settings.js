import React from "react";

import styles from "./../../../../../asset/css/admin/dashboard/pages/settings.module.css";

// comp form
import ChangeName from './form_setting/changeName';
import ChangeAccount from './form_setting/changeAccount';

class Settings extends React.Component {

	Exit = () => {
		this.props.history.push("/");
	}

	render() {
		return (
			<div className={styles.body}>
				
				<h1 className={styles.titleHead}>Setting</h1>

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

export default Settings;
