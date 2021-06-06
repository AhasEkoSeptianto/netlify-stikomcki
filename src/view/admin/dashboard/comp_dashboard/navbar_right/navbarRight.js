import React from "react";

import { Switch, Route } from "react-router-dom";

import Dashboard from "./../../pages/Dashboard.js";
import Berita from "./../../pages/berita/Berita.js";

import Mahasiswa from "./../../pages/mahasiswa/Mahasiswa.js";
import AddMhs from './../../pages/mahasiswa/addMhs.js';
import UpdateMhs from './../../pages/mahasiswa/updateMhs.js';

import Settings from "./../../pages/settings/Settings.js";


class navbarRight extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: this.props.uri,
		};
	}
	render() {
		return (
			<Switch>
				<Route path={this.state.url.path} exact={true} component={Dashboard} />
				<Route path={`${this.state.url.path}/berita`} exact={true} component={Berita} />
				<Route path={`${this.state.url.path}/mahasiswa`} exact={true} component={Mahasiswa} />
				<Route path={`${this.state.url.path}/mahasiswa/add`} exact={true} component={AddMhs} />
				<Route path={`${this.state.url.path}/mahasiswa/update`} exact={true} component={UpdateMhs} />
				<Route path={`${this.state.url.path}/settings`} exact={true} component={Settings} />
			</Switch>
		);
	}
}

export default navbarRight;
