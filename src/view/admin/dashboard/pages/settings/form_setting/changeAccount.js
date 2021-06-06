import React from 'react';

import styles from "./../../../../../../asset/css/admin/dashboard/pages/settings.module.css";

class changeAccount extends React.Component{

	render(){
		return(
			<div className={styles.formSetting}>
				<p>Username</p>
				<input placeholder="Username" className='border' />
				<button>Save</button>

				<p>Password</p>
				<input placeholder="password" className='border' />
				<button>Save</button>
			</div>
			)
	}
}

export default changeAccount;