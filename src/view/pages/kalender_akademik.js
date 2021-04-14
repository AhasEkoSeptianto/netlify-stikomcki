import React, { Fragment } from "react";

// material-ui
import {
	Paper,
	Breadcrumbs,
	Typography,
	Container,
	Grid,
} from "@material-ui/core";

// module react-anchor
import ScrollableAnchor from "react-scrollable-anchor";

// my nav
import Nav from "./../../component/navbar/navbar.js";

// mycss
import s from "./../../asset/css/kalender_akademik.module.css";

// react-router-dom link
import { Link } from "react-router-dom";

// image
import img_kalender_akademik from "./../../asset/image/Kalender_Akademik_2019-2020_Baru.jpeg";

// my footer
import Footer from "./../../component/footer/Footer.js";

class kalender_akademik extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: [],
		};
	}

	componentDidMount() {
		document.title = "kalender akademik";
	}

	render() {
		return (
			<Fragment>
				<Nav />
				<ScrollableAnchor id="main">
					<div></div>
				</ScrollableAnchor>
				<div className={s.container}>
					<Grid container spacing={5}>
						<Grid item sm={8}>
							<Paper
								className={s.paperMain}
								variant="outlined"
								square
							>
								<Breadcrumbs
									aria-label="breadcrumb"
									className={s.breadcrumb}
								>
									<Link
										color="inherit"
										to="/#main"
										className={s.link}
									>
										Home
									</Link>
									<Typography color="textPrimary">
										Kalender akademik
									</Typography>
								</Breadcrumbs>
								<div className={s.paperContent}>
									<h2 className={s.contentheader}>
										Kalender akademik
									</h2>
									<div className={s.contentmain}>
										<Container>
											<a
												href="/image/Kalender_Akademik_2019-2020_Baru.jpeg"
												target="_blank"
												alt="kalender akademik"
											>
												<img
													alt="kalendar"
													src={img_kalender_akademik}
													className={
														s.img_kalender_akademik
													}
												/>
											</a>
										</Container>
									</div>
								</div>
							</Paper>
						</Grid>
						<Grid item sm={3}>
							<Paper
								className={s.paperKategory}
								variant="outlined"
								square
							>
								<div className={s.kategori}>
									<h4>Kategori</h4>
									<ul className={s.ul_kategori}>
										<li className={s.list_kategori}>
											<Link className={s.link} href="#">
												Berita
											</Link>
										</li>
										<li className={s.list_kategori}>
											<Link className={s.link} href="#">
												Pengumuman
											</Link>
										</li>
									</ul>
								</div>
								<div className={s.berita_terbaru}>
									<h4>Pos-pos terbaru</h4>
									<ul className={s.ul_kategori}>
										<li className={s.list_kategori}>
											<Link className={s.link} href="#">
												Berita
											</Link>
										</li>
										<li className={s.list_kategori}>
											<Link className={s.link} href="#">
												Pengumuman
											</Link>
										</li>
									</ul>
								</div>
							</Paper>
						</Grid>
					</Grid>
				</div>
				<Footer />
			</Fragment>
		);
	}
}

export default kalender_akademik;
