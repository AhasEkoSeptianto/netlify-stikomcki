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
import s from "./../../asset/css/visi_misi_perguruan_tinggi.module.css";

// my nav
import Nav from "./../../component/navbar/navbar.js";

// react-router-dom link
import { Link } from "react-router-dom";

// my footer
import Footer from "./../../component/footer/Footer.js";

class visi_misi_perguruan_tinggi extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: [],
		};
	}

	componentDidMount() {
		document.title = "visi misi perguruan tinggi";
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
										Visi dan Misi perguruan tinggi
									</Typography>
								</Breadcrumbs>
								<div className={s.paperContent}>
									<h2 className={s.contentheader}>
										Visi dan Misi perguruan tinggi
									</h2>
									<div className={s.contentmain}>
										<h3>Visi</h3>
										<Container>
											<p className={s.visi}>
												Menjadi Perguruan Tinggi Ilmu
												Komputer yang unggul, adaptif,
												inovatif dan kreatif dalam
												bidang sistem informasi cerdas
												dan sistem jaringan komputer
												untuk menghasilkan sumber daya
												manusia yang professional,
												bertaqwa dan beretika pada Tahun
												2025.
											</p>
										</Container>
									</div>
									<div className={s.contentmain}>
										<h3>Misi</h3>
										<Container>
											<ul className={s.listTujuan}>
												<li className={s.li_tujuan}>
													Menyelenggarakan pendidikan
													tinggi yang profesional
													berbasis penelitian dalam
													bidang Sistem Informasi
													Cerdas dan Sistem jaringan
													komputer dengan Kurikulum
													yang mengacu pada kebutuhan
													pasar kerja Nasional dan
													Asia Tenggara
												</li>
												<li className={s.li_tujuan}>
													Menyelenggarakan Penelitian
													dasar dan terapan untuk
													pengembangan teknologi
													inovatif dan kreatif yang
													dapat memberi sumbangan
													kepada pengembangan ilmu
													pengetahuan dan teknologi
													terkini.
												</li>
												<li className={s.li_tujuan}>
													Melaksanakan pengabdian
													masyarakat melalui penerapan
													teknologi inovatif dan
													kreatif untuk meningkatka
													kualitas kehidupan
													masyarakat yang lebih baik
													dengan menjunjung tinggi
													etika dan moral
												</li>
												<li className={s.li_tujuan}>
													Membina hubungan antara
													perguruan tinggi dengan
													dunia usaha dan industri
													(link and match) untuk
													menyelenggarakan pembinaan
													wirausaha bidang Informatika
													dan Komputer
													(technopreneur).
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

export default visi_misi_perguruan_tinggi;
