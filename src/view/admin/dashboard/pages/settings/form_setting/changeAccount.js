import React from 'react';

import styles from "./../../../../../../asset/css/admin/dashboard/pages/settings.module.css";

class changeAccount extends React.Component{

	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		
	// 	}
	// }

	render(){
		return(
			<div className={styles.formSetting}>
				<p>Username</p>
				<input placeholder="Username" />
				<button>Save</button>

				<p>Password</p>
				<input placeholder="password" />
				<button>Save</button>
			</div>
			)
	}
}

export default changeAccount;