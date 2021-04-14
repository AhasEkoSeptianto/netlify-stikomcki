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
import s from "./../../asset/css/visi_misi_SI.module.css";

// my nav
import Nav from "./../../component/navbar/navbar.js";

// react-router-dom link
import { Link } from "react-router-dom";

// my footer
import Footer from "./../../component/footer/Footer.js";

class visi_misi_SI extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: [],
		};
	}

	componentDidMount() {
		document.title = "visi misi TI";
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
										Visi dan Misi SI
									</Typography>
								</Breadcrumbs>
								<div className={s.paperContent}>
									<h2 className={s.contentheader}>
										Visi Misi SI
									</h2>
									<div className={s.contentmain}>
										<h3>visi</h3>
										<Container>
											<p className={s.visi}>
												Menjadi program studi sistem
												informasi unggul yang adaptif,
												kreatif dan inovatif dalam
												bidang smart information systems
												untuk menghasilkan lulusan yang
												professional, bertaqwa dan
												beretika pada tahun 2025.
											</p>
										</Container>
									</div>
									<div className={s.contentmain}>
										<h3>misi</h3>
										<Container>
											<ul className={s.listTujuan}>
												<li className={s.li_tujuan}>
													Menyelenggarakan sistem
													pendidikan tinggi yang
													berlandaskan pada
													prefesionalisme, ketaqwaan
													dan norma-norma etika yang
													berlaku.
												</li>
												<li className={s.li_tujuan}>
													Menyelenggarakan pendidikan
													tinggi berkualitas untuk
													menghasilkan lulusan yang
													berkualifikasi unggul dalam
													bidang smart information
													systems yang mampu bersaing
													pada pasar profesional.
												</li>
												<li className={s.li_tujuan}>
													Mengembangkan penelitian
													dalam bidang smart
													information systems yang
													adaptif, kreatif dan
													inovatif
												</li>
												<li className={s.li_tujuan}>
													Melaksanakan pengabdian
													kepada masyarakat dalam
													mengimplementasikan bidang
													ilmu sistem informasi.
												</li>
												<li className={s.li_tujuan}>
													Menjalin kerjasama dengan
													instansi pemerintah dan
													swasta pada tingkat nasional
													dan internasional dalam
													rangka adopsi perkembangan
													ilmu dan teknologi serta
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

export default visi_misi_SI;
