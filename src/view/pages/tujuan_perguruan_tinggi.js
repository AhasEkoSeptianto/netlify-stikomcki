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
import s from "./../../asset/css/tujuan_perguruan_tinggi.module.css";

// react-router-dom link
import { Link } from "react-router-dom";

// my footer
import Footer from "./../../component/footer/Footer.js";

class tujuan_perguruan_tinggi extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: [],
		};
	}

	componentDidMount() {
		document.title = "tujuan perguruan tinggi";
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
										Tujuan perguruan tinggi
									</Typography>
								</Breadcrumbs>
								<div className={s.paperContent}>
									<h2 className={s.contentheader}>
										Tujuan Perguruan Tinggi
									</h2>
									<div className={s.contentmain}>
										<h5>Tujuan :</h5>
										<Container>
											<ul className={s.listTujuan}>
												<li className={s.li_tujuan}>
													Menghasilkan lulusan Sarjana
													Komputer yang professional,
													bertaqwa dan beretika sesuai
													dengan kebutuhan pasar kerja
													yang mampu mengaplikasikan
													keahlian dan mampu
													beradaptasi dengan situasi
													untuk memanfaatkan ilmu
													pengetahuan, teknologi dan
													komputer dalam penyelesaian
												</li>
												<li className={s.li_tujuan}>
													Menghasilkan Peneliti dan
													hasil Penelitian yang
													berkualitas dalam bidang
													Sistem Informasi Cerdas dan
													Sistem jaringan komputer
													yang bermanfaat bagi
													perkembangan ilmu
													pengetahuan dan teknologi
													dengan landasan ketaqwaan.
												</li>
												<li className={s.li_tujuan}>
													Menghasilkan teknologi
													inovatif dan kreatif yang
													dapat memberi sumbangan
													kepada peningkatan kualitas
													kehidupan masyarakat yang
													lebih baik dengan menjunjung
													tinggi etika dan moral
												</li>
												<li className={s.li_tujuan}>
													Menghasilkan kerjasama
													antara perguruan tinggi dan
													dunia industri untuk
													mengembangkan link and match
													antara dunia pendidikan
													dengan perkembangan
													kebutuhan pasar kerja,serta
													wirausaha muda dalam bidang
													Komputer dan teknologi
													informasi (technopreneur)
													yang mampu mengambil
													keputusan tepat berdasarkan
													data dan analisis informasi.
												</li>
												<li className={s.li_tujuan}>
													Menghasilkan, serta dapat
													memberikan petunjuk dalam
													memilih berbagai alternatif
													solusi secara mandiri dan
													kelompok
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

export default tujuan_perguruan_tinggi;
