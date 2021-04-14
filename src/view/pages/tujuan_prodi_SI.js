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

// mycss
import s from "./../../asset/css/tujuan_prodi_SI.module.css";

// my nav
import Nav from "./../../component/navbar/navbar.js";

// react-router-dom link
import { Link } from "react-router-dom";

// my footer
import Footer from "./../../component/footer/Footer.js";

class tujuan_prodi_SI extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: [],
		};
	}

	componentDidMount() {
		document.title = "tujuan prodi TI";
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
										Tujuan prodi SI
									</Typography>
								</Breadcrumbs>
								<div className={s.paperContent}>
									<h2 className={s.contentheader}>
										Tujuan prodi SI
									</h2>
									<div className={s.contentmain}>
										<h3>tujuan prodi SI adalah</h3>
										<Container>
											<ul className={s.listTujuan}>
												<li className={s.li_tujuan}>
													Menghasilkan lulusan yang
													professional, bertaqwa dan
													beretika.
												</li>
												<li className={s.li_tujuan}>
													Menghasilkan lulusan yang
													kompeten dalam bidang smart
													information systems dan
													mampu menciptakan peluang
													kerja.
												</li>
												<li className={s.li_tujuan}>
													Menghasilkan teknologi
													inovatif dan kreatif
													berbasis penelitian dalam
													bidang smart information
													systems.
												</li>
												<li className={s.li_tujuan}>
													Meningkatkan kualitas hidup
													masyarakat melalui
													pemanfaatan teknologi
													informasi yang inovatif dan
													kreatif yang berlandaskan
													etika dan moral.{" "}
												</li>
												<li className={s.li_tujuan}>
													Terjalinnya link and match
													antara program studi sistem
													informasi dengan instansi
													pemerintah dan swasta pada
													tingkat nasional dan
													internasional dalam rangka
													adopsi perkembangan ilmu dan
													teknologi serta
													penerapannya.
												</li>
											</ul>
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

export default tujuan_prodi_SI;
