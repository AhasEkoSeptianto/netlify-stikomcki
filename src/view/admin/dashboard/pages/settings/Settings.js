import React from "react";

import styles from "./../../../../../asset/css/admin/dashboard/pages/settings.module.css";

// material ui core
import  { Grid } from '@material-ui/core';

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
				<div className={styles.formSetting}>
					<p>Name</p>
					<input placeholder="name" />
					<button>Save</button>
				</div>

				<p className={styles.titleSetting}>Account</p>
				<div className={styles.formSetting}>
					<p>Username</p>
					<input placeholder="Username" />
					<button>Save</button>

					<p>Password</p>
					<input placeholder="password" />
					<button>Save</button>
				</div>
				
				<button className={styles.buttonLogout} onClick={this.Exit}>Exit</button>

			</div>
		);
	}
}

export default Settings;
