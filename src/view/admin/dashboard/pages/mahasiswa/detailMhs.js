import React from 'react';

import { post } from './../../../../../lib/axios';

class detailMhs extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			mahasiswa: {},
		}
	}

	async componentDidMount(){

		var detailMhs = await post(`${process.env.REACT_APP_BASE_URL}/api/mahasiswa/detailMhs`, {id: this.props.location.id});
		this.setState({mahasiswa: detailMhs})
	}

	render(){
		return(
			<p>detail mhs</p>
			)
	}
}

export default detailMhs;