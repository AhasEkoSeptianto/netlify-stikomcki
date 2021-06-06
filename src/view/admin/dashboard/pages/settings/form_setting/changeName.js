import React, { Fragment } from 'react';

import styles from "./../../../../../../asset/css/admin/dashboard/pages/settings.module.css";
// redux
import { connect } from 'react-redux';

// lib
import { post } from './../../../../../../lib/axios';
import { getCookies, setCookies } from './../../../../../../lib/cookie';

// react material ui
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

class changeName extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			newName : null,
			ModalOpen: false,
		}
	}

	submit = async () => {
		if (this.state.newName === '' || this.state.newName === null) {
			return null ;
		}

		let resPost = await post(`${process.env.REACT_APP_BASE_URL}api/setting/change-name`, { userName: getCookies('user') ,newName : this.state.newName} ) 
		if (resPost.request.status === 200) {
			setCookies('user', resPost.data.newName);
			this.props.changeName(resPost.data.newName);
			this.setState({ModalOpen: true})
		}
	}

	render(){
		return(
			<Fragment>
				<Modal
			        aria-labelledby="transition-modal-title"
			        aria-describedby="transition-modal-description"
			        open={this.state.ModalOpen}
			        onClose={() => this.setState({ModalOpen: false})}
			        closeAfterTransition
			        BackdropComponent={Backdrop}
			        BackdropProps={{
			          timeout: 500,
			        }}
			        className={styles.container_modal}
			      >
			        <Fade in={this.state.ModalOpen}>
			          <div className={styles.modal} >
			            <h2 id="transition-modal-title">Success</h2>
			            <p id="transition-modal-description">Name has been changed</p>
			          </div>
			        </Fade>
			    </Modal>

				<div className={styles.formSetting}>
					<p>Name</p>
					<input placeholder="name" onChange={(e) => this.setState({newName: e.target.value})} className='border' />
					<button onClick={this.submit}>Save</button>
				</div>
			</Fragment>
			)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		changeName : (user) => dispatch({type:'change_name', user:user})
	}
}

export default connect(null, mapDispatchToProps)(changeName);