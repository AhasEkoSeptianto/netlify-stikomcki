import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Loading from './Loading.js';

// pages
const Home = lazy(() => import("./view/pages/Home.js"));
const Visi_misi_perguruan_tinggi = lazy(() => import("./view/pages/visi_misi_perguruan_tinggi.js"));
const Tujuan_perguruan_tinggi = lazy(() => import("./view/pages/tujuan_perguruan_tinggi.js"));
const Kalender_akademik = lazy(() => import("./view/pages/kalender_akademik.js"));
const Visi_misi_TI = lazy(() => import("./view/pages/visi_misi_TI.js"));
const Tujuan_prodi_TI = lazy(() => import("./view/pages/tujuan_prodi_TI.js"));
const Daftar_matakuliah_TI = lazy(() => import("./view/pages/daftar_matakuliah_TI.js"));
const Visi_misi_SI = lazy(() => import("./view/pages/visi_misi_SI.js"));
const Tujuan_prodi_SI = lazy(() => import("./view/pages/tujuan_prodi_SI.js"));
const Daftar_matakuliah_SI = lazy(() => import("./view/pages/daftar_matakuliah_SI.js"));
const Dashboard = lazy(() =>  import("./view/admin/dashboard"));

// login page
const Login = lazy(() =>  import("./view/auth/login.js"));


class router extends React.Component {

	render() {
		return (
			<Suspense fallback={<Loading />}>
				<Switch>
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/login" component={Login} />
					<Route
						path="/daftar-matakuliah-SI"
						component={Daftar_matakuliah_SI}
					/>
					<Route path="/tujuan-prodi-SI" component={Tujuan_prodi_SI} />
					<Route path="/visi-misi-SI" component={Visi_misi_SI} />
					<Route
						path="/tujuan-perguruan-tinggi"
						component={Tujuan_perguruan_tinggi}
					/>
					<Route
						path="/visi-misi-perguruan-tinggi"
						component={Visi_misi_perguruan_tinggi}
					/>
					<Route
						path="/kalender-akademik"
						component={Kalender_akademik}
					/>
					<Route path="/visi-misi-TI" component={Visi_misi_TI} />
					<Route path="/tujuan-prodi-TI" component={Tujuan_prodi_TI} />
					<Route
						path="/daftar-matakuliah-TI"
						component={Daftar_matakuliah_TI}
					/>
					<Route path="/" component={Home} />
				</Switch>
			</Suspense>
		);
	}
}

export default router;
